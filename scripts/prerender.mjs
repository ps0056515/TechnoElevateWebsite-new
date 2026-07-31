#!/usr/bin/env node
/**
 * Post-build prerender - snapshots fully rendered HTML for crawlers.
 * Uses Playwright against vite preview (fixes SPA crawlability gap).
 */
import { spawn } from "child_process";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");
const PREVIEW_PORT = Number(process.env.PRERENDER_PORT) || 4321;
const PREVIEW_URL = `http://localhost:${PREVIEW_PORT}`;
const viteBin = path.join(root, "node_modules", "vite", "bin", "vite.js");

function waitForServer(url, timeoutMs = 90000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url, { redirect: "follow" });
        if (res.ok || res.status === 304) return resolve();
      } catch {
        /* retry */
      }
      if (Date.now() - start > timeoutMs)
        return reject(new Error("Preview server did not start"));
      setTimeout(tick, 500);
    };
    tick();
  });
}

async function loadRoutes() {
  const { getAllPublicPaths } = await import("../src/data/seo.js");
  return getAllPublicPaths();
}

async function writeRouteHtml(route, html) {
  if (route === "/") {
    await fs.writeFile(path.join(dist, "index.html"), html, "utf8");
    return;
  }
  const dir = path.join(dist, route.replace(/^\//, ""));
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, "index.html"), html, "utf8");
}

async function main() {
  const routes = await loadRoutes();
  console.log(`Prerendering ${routes.length} routes…`);

  const preview = spawn(
    process.execPath,
    [viteBin, "preview", "--port", String(PREVIEW_PORT), "--strictPort"],
    {
      cwd: root,
      stdio: ["ignore", "pipe", "pipe"],
      env: { ...process.env, NODE_ENV: "production" },
    },
  );

  preview.stdout?.on("data", (d) => process.stdout.write(d));
  preview.stderr?.on("data", (d) => process.stderr.write(d));

  try {
    await waitForServer(PREVIEW_URL);
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();

    for (const route of routes) {
      const url = route === "/" ? PREVIEW_URL : `${PREVIEW_URL}${route}`;
      const page = await context.newPage();
      try {
        await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
        await page.waitForSelector("#root", { timeout: 30000 });
        await page.waitForTimeout(800);
        const html = await page.content();
        await writeRouteHtml(route, html);
        console.log(`  ✓ ${route}`);
      } finally {
        await page.close();
      }
    }

    await browser.close();
    console.log("Prerender complete.");
  } finally {
    preview.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

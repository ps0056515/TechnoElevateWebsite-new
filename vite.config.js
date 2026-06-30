import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function apiMiddleware() {
  const dbFilePath = path.join(process.cwd(), 'inquiries.json');
  
  const ensureDbFile = () => {
    if (!fs.existsSync(dbFilePath)) {
      fs.writeFileSync(dbFilePath, JSON.stringify([], null, 2), 'utf-8');
    }
  };

  const getInquiries = () => {
    ensureDbFile();
    try {
      return JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'));
    } catch (e) {
      return [];
    }
  };

  const addInquiry = (inquiry) => {
    ensureDbFile();
    const list = getInquiries();
    const newInquiry = {
      ...inquiry,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString()
    };
    list.push(newInquiry);
    fs.writeFileSync(dbFilePath, JSON.stringify(list, null, 2), 'utf-8');
    return newInquiry;
  };

  return {
    name: 'api-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
        
        if (req.method === 'POST' && url.pathname === '/api/contact') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const newInquiry = addInquiry(data);
              res.writeHead(201, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, inquiry: newInquiry }));
            } catch (e) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Failed to process inquiry' }));
            }
          });
          return;
        }

        if (req.method === 'GET' && url.pathname === '/api/admin/inquiries') {
          const authHeader = req.headers['x-admin-password'];
          if (authHeader !== 'ty-admin-2026') {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Unauthorized access.' }));
            return;
          }

          const list = getInquiries();
          const sorted = [...list].sort(
            (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          );
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ inquiries: sorted }));
          return;
        }

        if (req.method === 'DELETE' && url.pathname === '/api/admin/inquiries') {
          const authHeader = req.headers['x-admin-password'];
          if (authHeader !== 'ty-admin-2026') {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Unauthorized access.' }));
            return;
          }

          const id = url.searchParams.get('id');
          if (!id) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Inquiry ID is required.' }));
            return;
          }

          ensureDbFile();
          if (id === 'all') {
            fs.writeFileSync(dbFilePath, JSON.stringify([], null, 2), 'utf-8');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true }));
            return;
          }

          const list = getInquiries();
          const filtered = list.filter(item => item.id !== id);
          if (filtered.length === list.length) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Inquiry not found.' }));
            return;
          }

          fs.writeFileSync(dbFilePath, JSON.stringify(filtered, null, 2), 'utf-8');
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true }));
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), apiMiddleware()],
  publicDir: 'public',
  server: {
    port: 5173,
    open: '/',
    allowedHosts: true,
  },
  preview: {
    port: 5173,
    allowedHosts: true,
  },
});

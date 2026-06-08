import { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LegacyRedirect from './components/LegacyRedirect';
import HomePage from './pages/HomePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyPage from './pages/CaseStudyPage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import LeadershipPage from './pages/LeadershipPage';
import StaticPage from './pages/StaticPage';
import PrivacyPage from './pages/PrivacyPage';
import { staticRoutes } from './pages/routes';

const pageLoaders = import.meta.glob('./content/pages/*.js');

function LazyStaticRoute({ slug }) {
  const [page, setPage] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const key = `./content/pages/${slug}.js`;
    const load = pageLoaders[key];
    if (!load) {
      setError(true);
      setPage(null);
      return;
    }
    setError(false);
    setPage(null);
    load()
      .then((mod) => setPage({ meta: mod.meta, html: mod.html }))
      .catch((err) => {
        console.error('Error loading static page module:', err);
        setError(true);
      });
  }, [slug]);

  if (error) {
    return (
      <div className="wrap" style={{ padding: '80px var(--pad)' }}>
        <h1>Page not found</h1>
        <p><a href="/">Back to home</a></p>
      </div>
    );
  }
  if (!page) return <div className="wrap" style={{ padding: '80px var(--pad)', color: 'var(--muted)' }}>Loading…</div>;
  return <StaticPage meta={page.meta} html={page.html} />;
}

const NotFound = lazy(() => Promise.resolve({
  default: () => (
    <div className="wrap" style={{ padding: '80px var(--pad)' }}>
      <h1>Page not found</h1>
      <p><a href="/">Back to home</a></p>
    </div>
  ),
}));

export default function App() {
  console.log('Static Routes:', staticRoutes);
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          {/* Legacy static URLs → React routes */}
          <Route path="index.html" element={<Navigate to="/" replace />} />
          <Route path="case-study.html" element={<LegacyRedirect />} />
          <Route path=":slug.html" element={<LegacyRedirect />} />

          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="casestudies" element={<CaseStudiesPage />} />
            <Route path="case-studies/:id" element={<CaseStudyPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:slug" element={<ProductPage />} />
            <Route path="leadership" element={<LeadershipPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            {staticRoutes.map(({ path, slug }) => (
              <Route key={path} path={path.slice(1)} element={<LazyStaticRoute slug={slug} />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

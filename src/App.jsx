import { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyPage from './pages/CaseStudyPage';
import StaticPage from './pages/StaticPage';
import { staticRoutes } from './pages/routes';

function LazyStaticRoute({ slug }) {
  const [page, setPage] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    import(`./content/pages/${slug}.js`)
      .then((mod) => setPage({ meta: mod.meta, html: mod.html }))
      .catch(() => setError(true));
  }, [slug]);

  if (error) return <div className="wrap" style={{ padding: '80px var(--pad)' }}><h1>Page not found</h1></div>;
  if (!page) return null;
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
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="casestudies" element={<CaseStudiesPage />} />
            <Route path="case-studies/:id" element={<CaseStudyPage />} />
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

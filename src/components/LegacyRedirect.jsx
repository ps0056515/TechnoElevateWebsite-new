import { Navigate, useLocation } from 'react-router-dom';
import { legacyPathRedirect } from '../utils/paths';

/** Redirect /index.html, /about.html, /case-study.html?id=… to React routes */
export default function LegacyRedirect() {
  const { pathname, search } = useLocation();
  const to = legacyPathRedirect(pathname, search);
  if (!to) return <Navigate to="/" replace />;
  return <Navigate to={to} replace />;
}

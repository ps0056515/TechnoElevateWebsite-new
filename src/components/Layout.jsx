import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import { useReveal, usePageMeta } from '../hooks/useSiteEffects';

export default function Layout() {
  useReveal();
  const { pathname } = useLocation();

  usePageMeta(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <SiteNav />
      <Outlet />
      <SiteFooter />
    </>
  );
}

import { Outlet } from 'react-router-dom';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import { useReveal } from '../hooks/useSiteEffects';

export default function Layout() {
  useReveal();
  return (
    <>
      <SiteNav />
      <Outlet />
      <SiteFooter />
    </>
  );
}

/**
 * Normalize legacy .html hrefs and query URLs to React Router paths.
 */
export function normalizeHref(href) {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
    return null;
  }

  try {
    const url = new URL(href, 'http://local');
    const path = url.pathname;

    if (path.endsWith('/case-study.html') || path === '/case-study.html' || path.endsWith('case-study.html')) {
      const id = url.searchParams.get('id');
      if (id) return `/case-studies/${id}`;
    }

    let route = path.replace(/\.html$/, '');
    if (route === '/index' || route === 'index') route = '/';
    if (!route.startsWith('/')) route = `/${route}`;
    if (route === '') route = '/';

    return route;
  } catch {
    return null;
  }
}

export function legacyPathRedirect(pathname, search) {
  if (!pathname.endsWith('.html')) return null;

  if (pathname.includes('case-study')) {
    const id = new URLSearchParams(search).get('id');
    if (id) return `/case-studies/${id}`;
    return '/casestudies';
  }

  const route = pathname.replace(/\.html$/, '');
  if (route === '/index' || route === '/index.html') return '/';
  return route || '/';
}

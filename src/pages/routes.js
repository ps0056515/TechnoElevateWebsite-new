const pageModules = import.meta.glob('../content/pages/*.js');

// Forced Vite reload comment
export const staticRoutes = Object.keys(pageModules)
  .filter((path) => !path.endsWith('/index.js') && !path.endsWith('/casestudies.js') && !path.endsWith('/privacy.js')  && !path.endsWith('/leadership.js'))
  .map((path) => {
    const slug = path.replace('../content/pages/', '').replace('.js', '');
    return { path: `/${slug}`, slug };
  });


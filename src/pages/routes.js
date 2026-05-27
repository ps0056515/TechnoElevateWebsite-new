const pageModules = import.meta.glob('../content/pages/*.js');

export const staticRoutes = Object.keys(pageModules)
  .filter((path) => !path.endsWith('/index.js') && !path.endsWith('/casestudies.js'))
  .map((path) => {
    const slug = path.replace('../content/pages/', '').replace('.js', '');
    return { path: `/${slug}`, slug };
  });

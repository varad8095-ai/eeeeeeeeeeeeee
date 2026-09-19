import { useState, useEffect } from 'react';

export type Route = '/' | '/how-it-works' | '/reviews' | '/pricing';

function getPath(): Route {
  const path = window.location.pathname;
  if (path === '/how-it-works' || path === '/reviews' || path === '/pricing') return path;
  return '/';
}

export function useRoute(): [Route, (r: Route) => void] {
  const [route, setRoute] = useState<Route>(getPath());

  useEffect(() => {
    const onPop = () => setRoute(getPath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (r: Route) => {
    window.history.pushState({}, '', r);
    setRoute(r);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return [route, navigate];
}

export function navigateTo(r: Route) {
  window.history.pushState({}, '', r);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'instant' });
}

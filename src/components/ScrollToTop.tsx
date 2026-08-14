import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Restores scroll position on route change, and smoothly scrolls to
 * an #anchor target when a valid hash is present.
 * Also cleans stale hash on root page if element doesn't exist.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // If the element doesn't exist (e.g. old #how-it-works or broken anchor),
          // scroll to top and clear the stale hash from the URL history
          window.scrollTo({ top: 0 });
          if (window.location.hash) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        }
      });
      return () => cancelAnimationFrame(raf);
    }

    window.scrollTo({ top: 0 });
    return undefined;
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;


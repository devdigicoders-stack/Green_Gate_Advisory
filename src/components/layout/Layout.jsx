import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import RouteTransitionLoader from '../common/PageLoader';

export default function Layout() {
  const { pathname, hash } = useLocation();

  // Scroll to top on navigation or smooth scroll to hash
  useEffect(() => {
    if (hash || window.location.hash) {
      const targetId = (hash || window.location.hash).replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return (
    <div className="flex flex-col min-h-screen bg-sage text-charcoal">
      <RouteTransitionLoader />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

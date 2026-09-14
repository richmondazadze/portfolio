import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProject } from '../data/projects';
import { site } from '../data/site';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.getElementById('main-content')?.focus({ preventScroll: true });
    const project = pathname.startsWith('/work/') ? getProject(pathname.split('/')[2]) : null;
    const title = project?.title || ({ '/': 'Software & AI Engineer', '/work': 'Selected Work', '/about': 'About', '/contact': 'Contact' }[pathname] || 'Page Not Found');
    document.title = `${title} — ${site.name}`;
    const descriptions = { '/': site.tagline, '/work': 'Explore full-stack applications and AI tools by Richmond Azadze.', '/about': site.bio, '/contact': 'Get in touch with Richmond Azadze to discuss a project, role, or idea.' };
    document.querySelector('meta[name="description"]')?.setAttribute('content', project?.description || descriptions[pathname] || 'Find your way back to Richmond Azadze’s portfolio.');
  }, [pathname]);
  return null;
}

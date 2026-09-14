import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
export default function NotFound() {
  return <div className="site-container flex min-h-[75vh] flex-col items-start justify-center pb-16 pt-32"><p className="eyebrow">404 / Page not found</p><h1 className="section-title">A little off track.</h1><p className="page-description">This page doesn’t exist. Let’s get you back to the work.</p><Link to="/work" className="button-primary mt-8"><ArrowLeft size={17} /> Explore projects</Link></div>;
}

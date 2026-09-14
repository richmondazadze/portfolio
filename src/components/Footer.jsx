import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { site } from '../data/site';

export default function Footer() {
  const { pathname } = useLocation();
  return (
    <footer className="border-t border-white/15 bg-navy py-8 text-white">
      <div className="site-container">
        {pathname !== '/contact' && <div className="flex flex-col items-start justify-between gap-6 pb-12 pt-6 md:flex-row md:items-end md:pb-16"><div><p className="eyebrow">Have something in mind?</p><Link to="/contact" className="group mt-4 flex items-center gap-5 font-display text-4xl uppercase sm:text-6xl">Let’s build it. <ArrowUpRight className="h-8 w-8 shrink-0 transition-transform group-hover:translate-x-1 sm:h-12 sm:w-12" /></Link></div><a href={`mailto:${site.email}`} className="max-w-full break-all text-base text-sage underline underline-offset-4">{site.email}</a></div>}
        <div className="flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-xs text-taupe sm:flex-row sm:items-center"><p>© {new Date().getFullYear()} {site.name}</p><div className="flex gap-6"><a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm text-sage">LinkedIn</a><a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm text-sage">GitHub</a></div></div>
      </div>
    </footer>
  );
}

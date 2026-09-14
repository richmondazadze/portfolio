import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import AmbientOrbs from './AmbientOrbs';
import { site } from '../data/site';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pb-12 pt-36 sm:pt-40 lg:pb-16 lg:pt-44">
      <AmbientOrbs />
      <div className="site-container relative z-10">
        <p className="eyebrow">Software Engineer <span aria-hidden="true" className="mx-2">/</span> AI & full-stack</p>
        <h1 className="my-8 font-display uppercase leading-[0.98] tracking-tight" style={{ fontSize: 'clamp(3.5rem, 13.2vw, 12rem)' }}>Richmond<br /><span className="text-outline">Azadze</span><span className="text-sage">.</span></h1>
        <div className="flex flex-col items-start justify-between gap-7 border-t border-white/15 pt-7 md:flex-row md:items-end">
          <p className="max-w-lg text-base leading-relaxed text-taupe md:text-lg">{site.tagline}</p>
          <Link to="/work" className="button-primary shrink-0">View my work <ArrowUpRight size={18} /></Link>
        </div>
        <a href="#selected-work" className="mt-10 inline-flex min-h-11 items-center gap-2 text-xs text-sage">Explore selected projects <ArrowDown size={15} /></a>
      </div>
    </section>
  );
}

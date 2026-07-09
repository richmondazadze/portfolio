import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import AmbientOrbs from './AmbientOrbs';
import { site } from '../data/site';

/**
 * Full viewport hero. Navy background, floating orbs, massive Anton type
 * with an outlined second line.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-navy px-8 pt-32 md:px-12">
      <AmbientOrbs />

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <p className="mb-6 text-xs uppercase tracking-widest-xl text-sage md:mb-10">
          {site.roles.join(' · ')}
        </p>
        <h1 className="font-display uppercase leading-[0.85] tracking-tighter text-white text-[16vw]">
          <span className="block">Richmond</span>
          <span className="block text-outline">Azadze</span>
        </h1>
      </div>

      {/* Bottom row */}
      <div className="relative z-10 mx-auto mt-16 flex w-full max-w-[1600px] items-end justify-between gap-8">
        <p className="max-w-md text-xs uppercase leading-relaxed tracking-widest-xl text-taupe sm:text-sm">
          {site.tagline}
        </p>

        <Link
          to="/work"
          aria-label="View work"
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-sage/60 text-sage transition-colors duration-500 ease-fluid hover:bg-sage hover:text-navy"
        >
          <ArrowDown className="animate-bounceArrow" size={22} strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}

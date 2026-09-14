import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { yearsOfExperience } from '../data/site';
import { totalProjectsCount } from '../data/projects';

/**
 * Light intro band on the home page — a large editorial statement plus a
 * couple of headline stats.
 */
export default function Intro() {
  return (
    <section className="light-surface px-6 pt-16 md:px-12 md:pt-24">
      <div className="mx-auto max-w-[1344px]">
        <Reveal>
          <span className="text-xs uppercase tracking-widest-xl text-taupe">
            Introduction
          </span>
        </Reveal>
        <Reveal style={{ transitionDelay: '80ms' }}>
          <h2 className="mt-8 max-w-5xl font-sans text-3xl font-light leading-tight text-navy sm:text-4xl md:text-5xl lg:text-6xl">
            I build <em className="italic text-taupe">intelligent</em>,
            full-stack products — pairing clean engineering with{' '}
            <em className="italic text-taupe">AI</em> to turn ideas into
            software people actually use.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-navy/10 pt-12 md:grid-cols-4">
          <Reveal>
            <p className="font-display text-5xl text-navy md:text-6xl">
              {yearsOfExperience()}+
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest-xl text-taupe">
              Years Building
            </p>
          </Reveal>
          <Reveal style={{ transitionDelay: '80ms' }}>
            <p className="font-display text-5xl text-navy md:text-6xl">{totalProjectsCount}</p>
            <p className="mt-3 text-xs uppercase tracking-widest-xl text-taupe">
              Shipped Projects
            </p>
          </Reveal>
          <Reveal style={{ transitionDelay: '160ms' }}>
            <p className="font-display text-5xl text-navy md:text-6xl">AI</p>
            <p className="mt-3 text-xs uppercase tracking-widest-xl text-taupe">
              Focused Engineering
            </p>
          </Reveal>
          <Reveal style={{ transitionDelay: '240ms' }} className="flex items-end">
            <Link
              to="/about"
              className="text-link text-navy"
            >
              More about me
              <ArrowUpRight
                size={18}
                className="transition-transform duration-500 ease-fluid group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

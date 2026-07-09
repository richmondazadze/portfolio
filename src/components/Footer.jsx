import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { site } from '../data/site';

/**
 * Massive navy footer with 'Let's Create' heading and a sage email link.
 */
export default function Footer() {
  return (
    <footer className="bg-navy px-8 pb-10 pt-28 md:px-12 md:pt-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-widest-xl text-taupe">
            Have a project in mind?
          </p>
          <Link
            to="/contact"
            className="inline-block font-display text-6xl uppercase leading-none tracking-tighter text-white transition-opacity duration-300 hover:opacity-80 sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Let&apos;s Create
          </Link>
        </Reveal>

        <Reveal style={{ transitionDelay: '120ms' }}>
          <a
            href={`mailto:${site.email}`}
            className="mt-10 inline-block font-sans text-xl text-sage underline decoration-1 underline-offset-8 transition-opacity duration-300 hover:opacity-70 sm:text-2xl md:text-3xl"
          >
            {site.email}
          </a>
        </Reveal>

        <div className="mt-28 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs uppercase tracking-widest-xl text-taupe">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest-xl text-white transition-opacity duration-300 hover:opacity-60"
            >
              LinkedIn
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest-xl text-white transition-opacity duration-300 hover:opacity-60"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

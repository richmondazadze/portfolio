import { Link } from 'react-router-dom';
import { FileText, ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import AmbientOrbs from '../components/AmbientOrbs';
import { site, techStack, yearsOfExperience } from '../data/site';
import { totalProjectsCount } from '../data/projects';

const APPROACH = [
  {
    title: 'Engineer First',
    body: 'Clean, maintainable code and solid architecture underpin everything — performance and clarity over shortcuts.',
  },
  {
    title: 'AI With Intent',
    body: 'I integrate AI where it genuinely improves the product, from health insights to content generation — never as a gimmick.',
  },
  {
    title: 'Ship & Iterate',
    body: 'Real projects, deployed and used. I bias toward launching, learning from real usage, and refining fast.',
  },
];

export default function About() {
  return (
    <div className="bg-navy">
      {/* Header */}
      <section className="relative overflow-hidden px-8 pb-16 pt-40 md:px-12 md:pb-24 md:pt-48">
        <AmbientOrbs />
        <div className="relative z-10 mx-auto max-w-[1600px]">
          <Reveal>
            <span className="text-xs uppercase tracking-widest-xl text-sage">
              About
            </span>
          </Reveal>
          <Reveal style={{ transitionDelay: '80ms' }}>
            <h1 className="mt-6 font-display text-6xl uppercase leading-[0.9] tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-[9rem]">
              Hello, I&apos;m
              <br />
              <span className="text-outline">Richmond</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Bio + profile */}
      <section className="px-8 pb-28 md:px-12 md:pb-40">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal className="relative order-2 lg:order-1">
            <div className="absolute -left-6 -top-6 h-full w-full bg-cyan/20 md:-left-10 md:-top-10" />
            <img
              src={site.profileImage}
              alt={site.name}
              className="relative aspect-[4/5] w-full object-cover grayscale transition-all duration-700 ease-fluid hover:grayscale-0"
            />
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="text-lg font-light leading-relaxed text-taupe md:text-xl">
                {site.bio}
              </p>
            </Reveal>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <Reveal>
                <p className="font-display text-5xl text-white md:text-6xl">
                  {yearsOfExperience()}+
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest-xl text-taupe">
                  Years of Experience
                </p>
              </Reveal>
              <Reveal style={{ transitionDelay: '80ms' }}>
                <p className="font-display text-5xl text-white md:text-6xl">
                  {totalProjectsCount}
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest-xl text-taupe">
                  Projects Delivered
                </p>
              </Reveal>
            </div>

            <Reveal style={{ transitionDelay: '160ms' }} className="mt-12 flex flex-wrap gap-4">
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white px-7 py-4 text-xs uppercase tracking-widest-xl text-navy transition-colors duration-500 ease-fluid hover:bg-sage"
              >
                <FileText size={16} /> Download CV
              </a>
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-xs uppercase tracking-widest-xl text-white transition-colors duration-500 ease-fluid hover:bg-white hover:text-navy"
              >
                View Projects
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-500 ease-fluid group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="bg-[#fafafa] px-8 py-28 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <span className="text-xs uppercase tracking-widest-xl text-taupe">
              Toolbox
            </span>
          </Reveal>
          <Reveal style={{ transitionDelay: '80ms' }}>
            <h2 className="mt-6 font-display text-5xl uppercase leading-none tracking-tighter text-navy sm:text-6xl md:text-7xl">
              Tech Stack
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-3 gap-px overflow-hidden border border-navy/10 bg-navy/10 sm:grid-cols-4 lg:grid-cols-6">
            {techStack.map((tech, i) => (
              <Reveal
                key={tech.name}
                style={{ transitionDelay: `${(i % 6) * 60}ms` }}
                className="group flex aspect-square flex-col items-center justify-center gap-3 bg-[#fafafa] p-4 transition-colors duration-500 hover:bg-white"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-10 w-10 object-contain grayscale transition-all duration-500 ease-fluid group-hover:grayscale-0 sm:h-12 sm:w-12"
                />
                <span className="text-center text-[0.65rem] uppercase tracking-widest-xl text-taupe">
                  {tech.name}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-charcoal px-8 py-28 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <span className="text-xs uppercase tracking-widest-xl text-taupe">
              How I Work
            </span>
          </Reveal>
          <Reveal style={{ transitionDelay: '80ms' }}>
            <h2 className="mt-6 max-w-4xl font-sans text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl">
              A pragmatic approach to building{' '}
              <em className="italic text-sage">intelligent</em> software.
            </h2>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
            {APPROACH.map((item, i) => (
              <Reveal
                key={item.title}
                style={{ transitionDelay: `${i * 100}ms` }}
                className="border-t border-white/10 pt-8"
              >
                <span className="font-display text-sm text-taupe">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-2xl uppercase tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-4 font-light leading-relaxed text-taupe">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

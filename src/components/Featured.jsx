import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { EASE, inView } from '../lib/motion';
import { featuredProjects } from '../data/projects';

/**
 * Navy asymmetric spotlight for a single standout project. Grayscale image
 * with an offset cyan decorative square; label + heading + body on the right.
 */
export default function Featured() {
  const project = featuredProjects[0];
  if (!project) return null;

  return (
    <section className="bg-navy px-8 py-28 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left: offset image */}
        <Reveal className="relative">
          <div className="absolute -left-6 -top-6 h-full w-full bg-cyan/20 md:-left-12 md:-top-12" />
          <Link
            to={`/work/${project.slug}`}
            className="relative block aspect-[16/10] overflow-hidden bg-charcoal"
          >
            <motion.img
              src={project.image}
              alt={project.title}
              loading="lazy"
              initial={{ scale: 1.12, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={inView}
              transition={{ duration: 1.2, ease: EASE }}
              className="h-full w-full object-contain grayscale transition-[filter] duration-700 ease-fluid hover:grayscale-0"
            />
          </Link>
        </Reveal>

        {/* Right: content */}
        <Reveal style={{ transitionDelay: '120ms' }}>
          <span className="font-display text-sm uppercase tracking-widest-xl text-sage">
            Featured Project
          </span>
          <h2 className="mt-6 font-display text-4xl uppercase leading-none tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {project.title}
          </h2>
          <p className="mt-8 max-w-md text-base font-light leading-relaxed text-taupe">
            {project.description}
          </p>

          <Link
            to={`/work/${project.slug}`}
            className="group mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-widest-xl text-white"
          >
            View Case Study
            <ArrowUpRight
              size={20}
              className="transition-transform duration-500 ease-fluid group-hover:translate-x-2"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

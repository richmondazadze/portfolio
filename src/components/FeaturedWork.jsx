import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '../data/projects';

/**
 * White-background masonry grid of featured projects. Even items get a 4rem
 * top margin. Links out to the full Work page.
 */
export default function FeaturedWork() {
  return (
    <section className="bg-white px-8 py-28 text-navy md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-6xl uppercase leading-none tracking-tighter text-navy sm:text-7xl md:text-8xl lg:text-9xl">
            Selected Works
          </h2>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest-xl text-navy"
          >
            All Projects
            <ArrowUpRight
              size={18}
              className="transition-transform duration-500 ease-fluid group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal
              key={project.slug}
              className={i % 2 === 1 ? 'md:mt-16' : ''}
              style={{ transitionDelay: `${(i % 2) * 120}ms` }}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

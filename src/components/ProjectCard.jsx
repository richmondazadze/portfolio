import { Link } from 'react-router-dom';

/**
 * Portfolio card with hover-reveal viewport: image scales 1.1x and a navy/60
 * overlay fades in with a white circular 'VIEW' badge.
 */
export default function ProjectCard({ project }) {
  return (
    <Link to={`/work/${project.slug}`} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-700 ease-fluid group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-navy/60 opacity-0 transition-opacity duration-500 ease-fluid group-hover:opacity-100">
          <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white font-display text-sm tracking-widest-xl text-navy">
            VIEW
          </span>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="font-display text-2xl uppercase tracking-tight text-inherit">
          {project.title}
        </h3>
        <span className="text-xs uppercase tracking-widest-xl text-taupe sm:shrink-0">
          {project.category}
        </span>
      </div>
    </Link>
  );
}

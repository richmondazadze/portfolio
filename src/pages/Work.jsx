import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

/**
 * Full work index — masonry grid of every project on a white background.
 */
export default function Work() {
  return (
    <div className="bg-white text-navy">
      {/* Header */}
      <section className="px-8 pb-16 pt-40 md:px-12 md:pb-20 md:pt-48">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <span className="text-xs uppercase tracking-widest-xl text-taupe">
              Portfolio
            </span>
          </Reveal>
          <Reveal style={{ transitionDelay: '80ms' }}>
            <h1 className="mt-6 font-display text-6xl uppercase leading-none tracking-tighter text-navy sm:text-7xl md:text-8xl lg:text-9xl">
              Selected Works
            </h1>
          </Reveal>
          <Reveal style={{ transitionDelay: '160ms' }}>
            <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-taupe">
              A selection of full-stack and AI-driven products — each one a
              milestone in building software that bridges technology and
              real-world use.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="px-8 pb-32 md:px-12 md:pb-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
            {projects.map((project, i) => (
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
    </div>
  );
}

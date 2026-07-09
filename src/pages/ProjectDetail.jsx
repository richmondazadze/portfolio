import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import Reveal from '../components/Reveal';
import { getProject } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-navy px-8 text-center">
        <h1 className="font-display text-5xl uppercase tracking-tight text-white">
          Project not found
        </h1>
        <Link
          to="/work"
          className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest-xl text-sage"
        >
          <ArrowLeft size={16} /> Back to Work
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-navy">
      {/* Header */}
      <section className="px-8 pb-16 pt-36 md:px-12 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-[1600px]">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest-xl text-taupe transition-colors hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-500 ease-fluid group-hover:-translate-x-1"
            />
            Back to Work
          </Link>

          <Reveal>
            <p className="mt-12 text-xs uppercase tracking-widest-xl text-sage">
              {project.category} · {project.year}
            </p>
          </Reveal>
          <Reveal style={{ transitionDelay: '80ms' }}>
            <h1 className="mt-6 font-display text-6xl uppercase leading-none tracking-tighter text-white sm:text-7xl md:text-8xl">
              {project.title}
            </h1>
          </Reveal>
          <Reveal style={{ transitionDelay: '160ms' }}>
            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-taupe">
              {project.description}
            </p>
          </Reveal>

          <Reveal style={{ transitionDelay: '240ms' }} className="mt-10 flex flex-wrap gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white px-7 py-4 text-xs uppercase tracking-widest-xl text-navy transition-colors duration-500 ease-fluid hover:bg-sage"
            >
              Visit Live Site
              <ArrowUpRight
                size={16}
                className="transition-transform duration-500 ease-fluid group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-xs uppercase tracking-widest-xl text-white transition-colors duration-500 ease-fluid hover:bg-white hover:text-navy"
              >
                <Github size={16} /> Source Code
              </a>
            )}
          </Reveal>
        </div>
      </section>

      {/* Cover image */}
      <section className="px-8 md:px-12">
        <Reveal className="mx-auto aspect-[16/9] max-w-[1600px] overflow-hidden bg-charcoal">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-contain"
          />
        </Reveal>
      </section>

      {/* Details */}
      <section className="px-8 py-28 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Tech stack */}
          <div className="lg:col-span-4">
            <Reveal>
              <span className="text-xs uppercase tracking-widest-xl text-taupe">
                Tech Stack
              </span>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {project.tech.map((tech, i) => (
                <Reveal
                  as="li"
                  key={tech}
                  style={{ transitionDelay: `${i * 60}ms` }}
                  className="group flex items-center gap-4 text-lg text-sage"
                >
                  <span className="h-px w-10 bg-sage transition-all duration-500 ease-fluid group-hover:w-16" />
                  {tech}
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="lg:col-span-8">
            <Reveal>
              <span className="text-xs uppercase tracking-widest-xl text-taupe">
                Key Features
              </span>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
              {project.features.map((feature, i) => (
                <Reveal
                  key={feature}
                  style={{ transitionDelay: `${i * 60}ms` }}
                  className="flex items-start gap-4 border-t border-white/10 pt-6 text-white"
                >
                  <span className="font-display text-sm text-taupe">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-light leading-relaxed">{feature}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

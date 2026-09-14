import Reveal from '../components/Reveal';
import ProjectName from '../components/ProjectName';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Github, ArrowRight } from 'lucide-react';
import ProjectImage from '../components/ProjectImage';
import projects, { getProject } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <div className="site-container flex min-h-[70vh] flex-col items-start justify-center gap-6 pt-28"><h1 className="section-title">Project not found.</h1><Link to="/work" className="button-secondary"><ArrowLeft size={18} /> Back to work</Link></div>;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <article className="page-space">
      <div className="site-container">
        <Link to="/work" className="text-link text-sage"><ArrowLeft size={16} /> All projects</Link>
        <header className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div className="min-w-0"><p className="eyebrow">{project.category} <span className="mx-2">/</span> {project.year}</p><h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}><ProjectName name={project.title} /></h1></div>
          <div><p className="max-w-lg text-lg leading-relaxed text-taupe">{project.summary}</p><div className="mt-6 flex flex-wrap gap-3"><a href={project.link} target="_blank" rel="noopener noreferrer" className="button-primary">Live site <ArrowUpRight size={17} /></a>{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="button-secondary"><Github size={17} /> Source code</a>}</div></div>
        </header>
        <ProjectImage key={project.slug} project={project} />
        <Reveal as="section" className="grid gap-10 py-14 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:py-20" aria-label="Project overview">
          <div><h2 className="eyebrow">Built with</h2><ul className="mt-5 flex flex-wrap gap-2">{project.tech.map(tech => <li key={tech} className="rounded-full border border-white/20 px-4 py-2 text-sm text-sage">{tech}</li>)}</ul></div>
          <div><h2 className="font-display text-3xl uppercase">About the project</h2><p className="mt-5 max-w-3xl text-base leading-relaxed text-taupe md:text-lg">{project.description}</p><h3 className="eyebrow mt-10">What it does</h3><ul className="mt-5 grid gap-x-8 sm:grid-cols-2">{project.features.map((feature, i) => <li key={feature} className="flex gap-4 border-t border-white/15 py-5 text-base leading-relaxed"><span className="pt-1 text-xs text-sage">{String(i + 1).padStart(2, '0')}</span>{feature}</li>)}</ul></div>
        </Reveal>
        <Link to={`/work/${next.slug}`} className="group flex items-center justify-between gap-6 rounded-xl border border-white/20 p-6 transition-colors hover:bg-white/5 md:p-10"><div className="min-w-0"><p className="eyebrow">Next project</p><h2 className="mt-3 font-display text-3xl uppercase sm:text-5xl"><ProjectName name={next.title} /></h2></div><ArrowRight className="shrink-0 transition-transform group-hover:translate-x-1" size={28} /></Link>
      </div>
    </article>
  );
}

import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '../data/projects';

export default function FeaturedWork() {
  return (
    <section className="light-surface section-space" id="selected-work">
      <div className="site-container">
        <div className="section-heading"><div><p className="eyebrow">Selected projects / 2024–2025</p><h2 className="section-title">Ideas into<br className="sm:hidden" /> real products.</h2></div><Link to="/work" className="text-link">All projects <ArrowUpRight size={18} /></Link></div>
        <div className="project-grid">{featuredProjects.map((project, index) => <Reveal key={project.slug}><ProjectCard project={project} index={index} /></Reveal>)}</div>
      </div>
    </section>
  );
}

import ProjectName from './ProjectName';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const previewThemes = { 'sankpost-ai': 'project-preview--sankpost-ai', pennytrack: 'project-preview--pennytrack', 'ai-summarizer': 'project-preview--ai-summarizer', 'richverse-ecotech': 'project-preview--richverse-ecotech' };

export default function ProjectCard({ project, index = 0 }) {
  return (
    <Link to={`/work/${project.slug}`} className="project-card group" aria-label={`View ${project.title} project`}>
      <div className={`project-preview ${previewThemes[project.slug] || ""}`}>
        <div className="preview-toolbar" aria-hidden="true"><span className="preview-dots"><i /><i /><i /></span><span>{project.title}</span><ArrowUpRight size={14} /></div>
        <div className="preview-image"><img src={project.image} alt={`${project.title} application preview`} loading="lazy" /></div>
        <span className="preview-action">Explore project <ArrowUpRight size={16} /></span>
      </div>
      <div className="project-meta"><span>{String(index + 1).padStart(2, '0')} / {project.category}</span><span>{project.year}</span></div>
      <div className="project-title-row"><h3><ProjectName name={project.title} /></h3><span className="project-arrow"><ArrowUpRight size={22} /></span></div>
      <p className="project-summary">{project.summary}</p>
      <ul className="project-tags" aria-label="Built with">{project.tech.slice(0, 3).map(tech => <li key={tech}>{tech}</li>)}</ul>
    </Link>
  );
}

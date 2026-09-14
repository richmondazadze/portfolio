import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectName from './ProjectName';
import { useFineMotion } from '../lib/useFineMotion';

const previewThemes = { 'sankpost-ai': 'project-preview--sankpost-ai', pennytrack: 'project-preview--pennytrack', 'ai-summarizer': 'project-preview--ai-summarizer', 'richverse-ecotech': 'project-preview--richverse-ecotech' };
const spring = { stiffness: 180, damping: 24, mass: 0.6 };

export default function ProjectCard({ project, index = 0 }) {
  const fine = useFineMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, spring);
  const rotateY = useSpring(y, spring);
  const reset = () => { x.set(0); y.set(0); };
  useEffect(() => { if (!fine) { x.set(0); y.set(0); } }, [fine, x, y]);
  const followPointer = event => {
    if (!fine || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((0.5 - (event.clientY - bounds.top) / bounds.height) * 4);
    y.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 4);
  };
  return (
    <Link to={`/work/${project.slug}`} className="project-card group" aria-label={`View ${project.title} project`} onPointerMove={followPointer} onPointerLeave={reset} onPointerCancel={reset} onBlur={reset}>
      <motion.div
        className={`project-preview ${previewThemes[project.slug] || ''}`}
        style={fine ? { rotateX, rotateY, transformPerspective: 1100 } : undefined}
        whileHover={fine ? { y: -5 } : undefined}
        transition={{ type: 'spring', ...spring }}
      >
        <div className="preview-toolbar" aria-hidden="true"><span className="preview-dots"><i /><i /><i /></span><span>{project.title}</span><ArrowUpRight size={14} /></div>
        <div className="preview-image"><img src={project.image} alt={`${project.title} application preview`} loading="lazy" /></div>
        <span className="preview-sheen" aria-hidden="true" />
        <span className="preview-action">Explore project <ArrowUpRight size={16} /></span>
      </motion.div>
      <div className="project-meta"><span>{String(index + 1).padStart(2, '0')} / {project.category}</span><span>{project.year}</span></div>
      <div className="project-title-row"><h3><ProjectName name={project.title} /></h3><span className="project-arrow"><ArrowUpRight size={22} /></span></div>
      <p className="project-summary">{project.summary}</p>
      <ul className="project-tags" aria-label="Built with">{project.tech.slice(0, 3).map(tech => <li key={tech}>{tech}</li>)}</ul>
    </Link>
  );
}

import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import projects from '../data/projects';

export default function Work() {
  return (
    <div className="light-surface page-space">
      <div className="site-container">
        <Reveal as="header" className="work-header"><p className="eyebrow">Portfolio / {String(projects.length).padStart(2, '0')} projects</p><h1 className="page-title">Selected work.</h1><p className="page-description">Full-stack applications and AI tools, built to make everyday tasks simpler.</p></Reveal>
        <div className="project-grid">{projects.map((project, index) => <Reveal key={project.slug} delay={(index % 2) * 0.09}><ProjectCard project={project} index={index} /></Reveal>)}</div>
      </div>
    </div>
  );
}

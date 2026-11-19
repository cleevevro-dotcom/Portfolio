import React from 'react';
import { ArrowUpRight } from 'lucide-react';

function ProjectVisual({ visual, title, images, imageFit }) {
  if (images?.length) {
    const imageCount = Math.min(images.length, 4);
    return (
      <div className={`project-visual project-image-visual project-image-gallery gallery-${imageCount}${imageFit === 'contain' ? ' project-image-contain' : ''}`}>
        {images.slice(0, 4).map((item, index) => (
          <div className="gallery-item" key={`${item.src}-${index}`}>
            <img src={item.src} alt={item.alt || `${title} project image ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className={`project-visual visual-${visual || 'generic'}`} role="img" aria-label={`Abstract placeholder visual for ${title}`}>
      <span className="visual-grid" aria-hidden="true" />
      {visual === 'document' && <div className="doc-illustration" aria-hidden="true"><span className="doc-top" /><span className="doc-line wide" /><span className="doc-line" /><span className="doc-line short" /><span className="doc-scan" /><span className="doc-stamp">✓</span></div>}
      {visual === 'runner' && <div className="runner-illustration" aria-hidden="true"><span className="runner-sun" /><span className="runner-hill one" /><span className="runner-hill two" /><span className="runner-shape">✦</span></div>}
      {visual === 'snake' && <div className="snake-illustration" aria-hidden="true"><span className="snake-path" /><span className="snake-head" /><span className="snake-apple" /></div>}
      {!['document', 'runner', 'snake'].includes(visual) && <span className="generic-visual" aria-hidden="true">✳</span>}
    </div>
  );
}

export default function ProjectCard({ project, index }) {
  const images = project.images?.length
    ? project.images
    : project.image
      ? [{ src: project.image, alt: project.imageAlt }]
      : [];
  const hasDemo = Boolean(project.demoUrl);

  return (
    <a
      className="project-card"
      href={hasDemo ? project.demoUrl : `#project/${project.id}`}
      target={hasDemo ? '_blank' : undefined}
      rel={hasDemo ? 'noreferrer' : undefined}
      aria-label={`${hasDemo ? 'Open demo' : 'View details for'} ${project.title}`}
    >
      <ProjectVisual visual={project.visual} title={project.title} images={images} imageFit={project.imageFit} />
      <div className="project-body">
        <div className="project-meta"><span>{String(index + 1).padStart(2, '0')} / {project.category}</span><ArrowUpRight size={18} aria-hidden="true" /></div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.cardDescription || project.description}</p>
        <div className="tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
      </div>
    </a>
  );
}

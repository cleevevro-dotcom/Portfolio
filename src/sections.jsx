import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Copy, Download, ExternalLink, Github, Mail, MapPin, BadgeCheck, GraduationCap, Sparkles, Layers3, Gamepad2, X, ZoomIn } from 'lucide-react';
import SectionHeading from './components/SectionHeading.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import { projects } from './data/projects.js';
import { skillGroups } from './data/skills.js';
import { experiences } from './data/experience.js';
import { certifications, credlyProfile } from './data/certifications.js';

export function Hero() {
  return <section className="hero" id="home" aria-labelledby="hero-title">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="hero-kicker"> SOFTWARE BUILDER</p>
        <h1 id="hero-title">Hello, I'm 
          <span>Angelo.</span></h1>
          <p className="hero-lede">I create games and build software applications that simplify work, automate tasks, and help people with tech.</p>
          <p className="hero-description">I'm a fourth-year Information Technology student developing gameplay experiences with Unity and C#, while building practical web and mobile applications focused on solving real-world problems.</p>
          <div className="hero-buttons">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={18} /></a>
            <a className="button button-secondary" href="#contact">Get in touch <ArrowRight size={18} /></a>
          </div>
            <div className="hero-small">
              <span><MapPin size={15} /> Philippines</span>
              <span className="hero-small-rule" /><span>C# · .NET · Laravel · php · web · Blender · Unity</span>
           </div>
        </div>
        <div className="hero-art"><div className="portrait-frame">
          <img src="/assets/angelo-portrait.webp" alt="Portrait of Angelo Averion" width="600" height="600" fetchPriority="high" />
          <span className="portrait-corner top-left" />
          <span className="portrait-corner bottom-right" />
        </div>
        <div className="portrait-label">
          <span className="label-symbol"><Gamepad2 size={25} strokeWidth={1.8} /></span>
          <div><strong>ANGELO AVERION</strong>
          <small>GAME DEVELOPER / IT STUDENT</small>
        </div>
        <span className="label-index">01 / 01</span>
      </div>
      <span className="orbit orbit-one" />
      <span className="orbit orbit-two" />
      <span className="art-pixel pixel-one" />
      <span className="art-pixel pixel-two" />
      <span className="art-pixel pixel-three" />
    </div>
    <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <ArrowDown size={15} /></a>
  </div></section>;
}

export function About() {
  return <section className="section about-section" id="about">
    <div className="container">
      <SectionHeading eyebrow="01 / About me" title={<>Curious about systems.<br />
      <em>Driven by play.</em></>} /><div className="about-grid"><div className="about-main">
        <p>I care about <strong>how things work and how they feel to use. </strong> 
        Game development gives me room to explore both: mechanics, feedback, visuals, and the small decisions that shape an experience.</p>
        <p>I'm learning through Unity, C#, and Blender projects while studying Web and Mobile Application Development. That mix helps me approach games and everyday software with the same focus on clear, thoughtful interaction.</p>
        <a className="text-link" href="#contact">Let's build something together <ArrowUpRight size={18} />
        </a>
        </div>
        <div className="about-aside">
          <div className="aside-header">
            <div className="aside-icon">
              <GraduationCap size={24} strokeWidth={1.6} />
            </div>
            <h3>BS Information Technology</h3>
          </div>
          <p>Major in Web and Mobile Application Development</p>
          <div className="aside-rule" />
            <span>Laguna State Polytechnic University
              <br/>San Pablo City Campus
            </span>
          <div className="aside-bottom">
            <span><h1>4TH YEAR STUDENT  </h1></span>
            <span className="tiny-plus"> :)</span>
          </div>
        </div>
      </div>
    </div>
    </section>;
}

export function Projects() {
  return <section className="section projects-section" id="projects"><div className="container"><SectionHeading eyebrow="02 / Selected work" title={<>Project ideas.<br /><em>System builds.</em></>} intro="Games and interactive learning projects lead into the web systems I've built." action={<span className="section-count">{String(projects.length).padStart(2, '0')} PROJECTS</span>} /><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div><div className="project-bottom-note"><span>More work and source explorations on GitHub.</span><a className="text-link" href="https://github.com/cleevevro-dotcom" target="_blank" rel="noreferrer">View GitHub profile <ArrowUpRight size={18} /></a></div></div></section>;
}

export function ProjectDetail({ project }) {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const images = project.images?.length
    ? project.images
    : project.image
      ? [{ src: project.image, alt: project.imageAlt }]
      : [];

  useEffect(() => {
    if (activeImageIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (event.key === 'ArrowRight' && images.length > 1) {
        setActiveImageIndex(index => (index + 1) % images.length);
      } else if (event.key === 'ArrowLeft' && images.length > 1) {
        setActiveImageIndex(index => (index - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImageIndex, images.length]);

  const activeImage = activeImageIndex === null ? null : images[activeImageIndex];

  return (
    <section className="project-detail">
      <div className="container">
        <a className="project-back" href="#projects"><ArrowLeft size={18} /> Back to projects</a>
        <div className="project-detail-grid">
          <div className={`project-detail-visual${project.imageFit === 'contain' ? ' project-image-contain' : ''}${images.length ? ` project-detail-gallery gallery-${Math.min(images.length, 4)}` : ''}`}>
            {images.length
              ? images.slice(0, 4).map((item, index) => (
                  <button
                    className="gallery-item project-detail-image-trigger"
                    key={`${item.src}-${index}`}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`View image ${index + 1} of ${images.length}: ${item.alt || project.title}`}
                  >
                    <img src={item.src} alt={item.alt || `${project.title} project image ${index + 1}`} />
                    <span className="image-trigger-hint"><ZoomIn size={16} /> View image</span>
                  </button>
                ))
              : <div className={`project-visual visual-${project.visual || 'generic'}`} role="img" aria-label={`${project.title} visual`} />
            }
          </div>
          <div className="project-detail-content">
            <p className="project-detail-eyebrow">{project.category} / {project.role}</p>
            <h1>{project.title}</h1>
            <p className="project-detail-subtitle">{project.subtitle}</p>
            <p className="project-detail-description">{project.description}</p>
            <h2>Technologies used</h2>
            <div className="tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
            <div className="project-detail-actions">
              {project.demoUrl && <a className="button button-primary" href={project.demoUrl} target="_blank" rel="noreferrer">View live project <ExternalLink size={17} /></a>}
              {project.githubUrl && <a className="button button-secondary" href={project.githubUrl} target="_blank" rel="noreferrer">View GitHub <Github size={17} /></a>}
            </div>
          </div>
        </div>
        {activeImage && (
          <div className="image-viewer-backdrop" onClick={() => setActiveImageIndex(null)}>
            <div
              className="image-viewer-dialog"
              role="dialog"
              aria-modal="true"
              aria-label={`${project.title} images`}
              onClick={event => event.stopPropagation()}
            >
              <button
                className="image-viewer-close"
                type="button"
                onClick={() => setActiveImageIndex(null)}
                aria-label="Close image viewer"
              >
                <X size={22} />
              </button>
              {images.length > 1 && (
                <>
                  <button
                    className="image-viewer-nav image-viewer-previous"
                    type="button"
                    onClick={() => setActiveImageIndex(index => (index - 1 + images.length) % images.length)}
                    aria-label="Show previous image"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    className="image-viewer-nav image-viewer-next"
                    type="button"
                    onClick={() => setActiveImageIndex(index => (index + 1) % images.length)}
                    aria-label="Show next image"
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}
              <img
                className="image-viewer-image"
                src={activeImage.src}
                alt={activeImage.alt || `${project.title} project image ${activeImageIndex + 1}`}
              />
              <div className="image-viewer-caption">
                <span>{activeImage.alt || project.title}</span>
                <span aria-live="polite">{activeImageIndex + 1} / {images.length}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function Skills() {
  return <section className="section skills-section" id="skills"><div className="container"><SectionHeading eyebrow="03 / Toolkit" title={<>Tools for code <em>& creation.</em></>} intro="Game development is my creative focus, supported by programming, web development, design, and systems foundations." /><div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-card" key={group.title}><span className="skill-index">{String(index + 1).padStart(2, '0')}</span><h3>{group.title}</h3><div className="skill-list">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div><p className="learning-note"><Sparkles size={18} /> Currently exploring Unity shaders, software design patterns, Laravel MVC, and ASP.NET Core MVC.</p></div></section>;
}

export function Experience() {
  return <section className="section experience-section" id="experience"><div className="container experience-grid"><div className="experience-intro"><SectionHeading eyebrow="04 / Journey" title={<>Learning through <em>making.</em></>} intro="My current experience comes from academic work and personal practice. This section is ready for future internship and professional roles." /><div className="journey-mark"><Layers3 size={34} strokeWidth={1.3} /><span>ALWAYS BUILDING<br />ALWAYS LEARNING</span></div></div><div className="timeline">{experiences.map((item, index) => <article className="timeline-item" key={item.title}><span className="timeline-number">{String(index + 1).padStart(2, '0')}</span><div><div className="timeline-top"><span>{item.type}</span><span>{item.period}</span></div><h3>{item.title}</h3><p className="timeline-org">{item.organization}</p><p>{item.description}</p></div></article>)}</div></div></section>;
}

export function Credentials() {
  return <section className="section credentials-section" id="credentials"><div className="container"><SectionHeading eyebrow="05 / Credentials" title={<>Learning, <em>documented.</em></>} /><div className="credentials-card"><div className="credential-icon"><BadgeCheck size={32} strokeWidth={1.5} /></div><div><span className="aside-overline">DIGITAL BADGES & CREDENTIALS</span><h3>Explore my Credly profile</h3><p>Browse verified credentials and badges as they are added.</p></div><a className="round-link" href={credlyProfile} target="_blank" rel="noreferrer" aria-label="Open Angelo's Credly profile"><ArrowUpRight size={21} /></a></div>{certifications.length > 0 && <div className="credential-list">{certifications.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.issuer} · {item.date}</p>{item.credentialUrl && <a href={item.credentialUrl} target="_blank" rel="noreferrer">View credential <ArrowUpRight size={15} /></a>}</article>)}</div>}</div></section>;
}

export function Resume() {
  return <section className="resume-section" id="resume"><div className="container resume-inner"><div><p className="eyebrow">06 / Resume</p><h2>Want the full <em>picture?</em></h2><p>Download my CV for a closer look at my background, technical skills, and projects.</p></div><a className="button button-resume" href="/resume/Angelo_Averion_CV.pdf" download="Angelo_Averion_CV.pdf">Download CV <Download size={19} /></a><span className="resume-decoration" aria-hidden="true">A<span>.</span></span></div></section>;
}

export function Contact() {
  const email = 'gelovroo1263@gmail.com';
  const [copyMessage, setCopyMessage] = useState('');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyMessage('Email address copied.');
    } catch {
      setCopyMessage('Select the address above to copy it.');
    }
  }

  return <section className="section contact-section" id="contact"><div className="container"><SectionHeading eyebrow="07 / Contact" title={<>Let's build the <em>next level.</em></>} intro="I'm open to game development, IT internship, and creative collaboration opportunities." /><div className="contact-grid"><div className="contact-main"><span>START A CONVERSATION</span><strong>{email}</strong><ArrowUpRight className="contact-main-icon" size={30} aria-hidden="true" /><div className="contact-actions"><a href={`mailto:${email}`}>Open email app <Mail size={17} aria-hidden="true" /></a><button type="button" onClick={copyEmail}>Copy email <Copy size={17} aria-hidden="true" /></button></div><p className="contact-copy-status" role="status">{copyMessage}</p></div><div className="contact-links"><a href="https://github.com/cleevevro-dotcom" target="_blank" rel="noreferrer"><Github size={21} /> GitHub <ArrowUpRight size={18} /></a><a href={credlyProfile} target="_blank" rel="noreferrer"><BadgeCheck size={21} /> Credly <ArrowUpRight size={18} /></a></div></div></div></section>;
}

export function Footer() {
  return <footer className="footer"><div className="container footer-inner"><a className="footer-brand" href="#home">A<span>.</span></a><span>© {new Date().getFullYear()} Angelo Averion. Built with care.</span><a href="#home">Back to top <ArrowUpRight size={16} /></a></div></footer>;
}

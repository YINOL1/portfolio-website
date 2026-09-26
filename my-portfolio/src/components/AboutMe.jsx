import './AboutMe.css';
import fullBodyWhite from '../assets/full-body-white.jpg';
import fullBodyBlack from '../assets/full-body-black.jpg';
import githubBlack from '../assets/github-black-icon.png';
import githubWhite from '../assets/github-white-icon.png';
import linkedinBlack from '../assets/linkedin-black-icon.png';
import linkedinWhite from '../assets/linkedin-white-icon.png';
import mailBlack from '../assets/mail-black-icon.png';
import mailWhite from '../assets/mail-white-icon.png';

const focusAreas = [
  {
    title: 'Frontend engineering',
    text: 'I build responsive, accessible, and visually polished interfaces using modern JavaScript frameworks and a strong eye for usability.'
  },
  {
    title: 'Product-minded development',
    text: 'I translate business goals into clean, practical features that improve customer experience and create measurable product value.'
  },
  {
    title: 'Full-stack collaboration',
    text: 'I work comfortably across the stack, connecting user interfaces to APIs, data flows, and backend logic to deliver real business outcomes.'
  }
];

const projectHighlights = [
  {
    name: 'Portfolio & personal brand site',
    summary: 'Designed and developed a clean, modern front-end experience to showcase skills, experience, and projects with a polished presentation.',
    stack: 'React · Vite · CSS · Responsive UI'
  },
  {
    name: 'Client-facing web applications',
    summary: 'Built interactive experiences focused on usability, performance, and clear user journeys for real-world audiences.',
    stack: 'JavaScript · UI Architecture · UX Design'
  }
];

export default function About({ theme = 'light' }) {
  const isDark = theme === 'dark';

  const quickLinks = [
    {
      href: 'mailto:ianwu70109@gmail.com',
      label: 'Email',
      icon: isDark ? mailWhite : mailBlack,
      alt: 'Email logo'
    },
    {
      href: 'https://www.linkedin.com/in/iyjwu',
      label: 'LinkedIn',
      icon: isDark ? linkedinWhite : linkedinBlack,
      alt: 'LinkedIn logo'
    },
    {
      href: 'https://github.com/yinol1',
      label: 'GitHub',
      icon: isDark ? githubWhite : githubBlack,
      alt: 'GitHub logo'
    }
  ];

  return (
    <section className="about-page">
      <div className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Software engineer · frontend developer</p>
          <h1>Hi, I’m Ian</h1>
          <p className="about-subtitle">
            I design and build user-centered digital experiences with a focus on clean code, strong product thinking, and polished front-end execution.
          </p>

          <div className="hero-actions">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="social-icon-btn"
                aria-label={link.label}
                title={link.label}
              >
                <img src={link.icon} alt={link.alt} className="social-logo" />
              </a>
            ))}
            <a className="secondary-btn experience-link" href="/experience">
              <span>View experience</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ul className="hero-stats" aria-label="Highlights about Ian Wu">
            <li>
              <strong>3+</strong>
              <span>years in web development</span>
            </li>
            <li>
              <strong>10+</strong>
              <span>projects built</span>
            </li>
            <li>
              <strong>100%</strong>
              <span>user-focused mindset</span>
            </li>
          </ul>
        </div>

        <div className="hero-panel" aria-label="Profile summary card">
          <div className="hero-figure-wrap">
            <div className="hero-figure-panel">
              <img
                src={theme === 'dark' ? fullBodyBlack : fullBodyWhite}
                alt={theme === 'dark' ? 'Ian Wu full body in dark mode' : 'Ian Wu full body in light mode'}
                className="hero-figure-image"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="info-block">
        <div className="section-heading inside-section">
          <p className="eyebrow">Core strengths</p>
          <h2>Software engineering shaped by clarity and execution.</h2>
        </div>

        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article key={area.title} className="focus-card">
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="showcase-block">
        <div className="section-heading inside-section">
          <p className="eyebrow">Selected work</p>
          <h2>Projects grounded in usability, performance, and design quality.</h2>
        </div>

        <div className="project-grid">
          {projectHighlights.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-image-slot" aria-label={`${project.name} project image placeholder`} />
              <p className="project-name">{project.name}</p>
              <p>{project.summary}</p>
              <span>{project.stack}</span>
            </article>
          ))}

          <a className="project-card project-cta-card" href="/experience">
            <div className="project-image-slot project-cta-slot" aria-label="More project work" />
            <p className="project-name">More work</p>
            <p>See the full project archive and continued updates from the experience page.</p>
            <span>View all projects →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
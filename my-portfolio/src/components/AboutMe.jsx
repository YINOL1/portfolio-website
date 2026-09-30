import './AboutMe.css';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';
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
    title: 'Embedded Systems',
    text: 'Aspiring Embedded Software Engineer, currently exploring in the world of low-level programming and simple embedded projects.'
  },
  {
    title: 'Cloud Development',
    text: 'Experience in Azure cloud environments and creating automative pipelines in Azure. Built and deployed AI agents is AWS Bedrock AgentCore.'
  },
  {
    title: 'Full-Stack Development',
    text: 'Building responsive, modern user interfaces backed by scalable database architectures and reliable, high-performance backend logic.'
  }
];

const projectHighlights = [
  {
    name: 'Personal Portfolio Website',
    summary: 'Designed and developed a clean, modern front-end website with a touch of Python to showcase personal experience, skills, and projects with a polished presentation.',
    stack: 'React · JavaScript · Python · CSS'
  },
  {
    name: 'Quest Schedule Exporter',
    summary: 'Built an lightweight, front-end web application to simplify the class schedule exporting process for Univeristy of Waterloo students.',
    stack: 'JavaScript · HTML/CSS'
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
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Computer Engineering Student @ UWaterloo</p>
          <h1>Hi, I’m Ian</h1>
          <p className="about-subtitle">
            I have a passion of user-oriented software that simplifies everyday tasks and have a goal of making big bucks in the future. I am currently exploring embedded systems and low-latency system designs. Feel free to contact me for a quick chat or literally anything!
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
              <strong>2A</strong>
              <span>CE @ uwaterloo</span>
            </li>
            <li>
              <strong>2</strong>
              <span>Co-op experiences</span>
            </li>
            <li>
              <strong>4</strong>
              <span>software projects built</span>
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
      </section>

      <section className="info-block">
        <SectionHeader
          eyebrow="Areas of Growth"
          title="Areas I have experience in and would like to grow through my education and career."
        />

        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article key={area.title} className="focus-card">
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase-block">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects grounded in usability, performance, and design quality."
          className="inside-section"
        />

        <div className="project-grid">
          {projectHighlights.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              summary={project.summary}
              stack={project.stack}
              imageLabel={`${project.name} project image placeholder`}
            />
          ))}

          <ProjectCard
            name="More work"
            summary="See the full project archive and continued updates from the experience page."
            stack="View all projects →"
            variant="cta"
            href="/experience"
            imageLabel="More project work"
            isLink
          />
        </div>
      </section>
    </section>
  );
}
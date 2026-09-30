import './ExperiencePage.css';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

export default function ExperiencePage() {
  const highlights = [
    'Engineered and shipped real products to clients during internship experiences.',
    'Collaborated with teams to turn product requirements into clear, usable features.',
    'Strong desire to learn and quick adaptability to new technology and environment.'
  ];

  const roles = [
    {
      title: 'Software Engineering Consultant Intern',
      company: 'BrainRidge Consulting Inc.',
      period: 'Sep 2026 — Present',
      description: 'Developed polished web experiences with a strong focus on UI clarity, responsiveness, and product usability across personal and client-facing projects.'
    },
    {
      title: 'Embedded Software Team Member',
      company: 'Waterloo Aerial Robotics Group Design Team',
      period: 'May 2026 — Aug 2026',
      description: 'Built and improved digital tools and interfaces using JavaScript, Python, and front-end best practices to support business and user workflows.'
    },
    {
      title: 'AI Cloud Developer',
      company: 'WEAccelerate & Event Minds Matter',
      period: 'Jan 2026 — Apr 2026',
      description: 'Created custom websites and product interfaces for personal brands and small businesses with an emphasis on performance, presentation, and usability.'
    }
  ];

  const stacks = ['JavaScript', 'C++', 'C', 'Python', 'React', 'HTML/CSS', 'PostgreSQL', 'FastAPI', 'Prisma', 'Git', 'AWS', 'Azure', 'Docker'];

  const projects = [
    {
      name: 'Personal Portfolio Website',
      summary: 'Designed and developed a clean, modern front-end website with a touch of Python to showcase personal experience, skills, and projects with a polished presentation.',
      stack: 'React · JavaScript · Python · CSS'
    },
    {
      name: 'Quest Schedule Exporter',
      summary: 'Built an lightweight, front-end web application to simplify the class schedule exporting process for Univeristy of Waterloo students.',
      stack: 'JavaScript · HTML/CSS',
    },
    {
      name: 'Godot Pipe Puzzle Game',
      summary: 'Design and developed a pipe connector puzzle game in Godot under a time constraint for the University of Waterloo Fall Game Jam.',
      stack: 'Godot · GDScript'
    },
    // {
    //   name: 'Design system explorations',
    //   summary: 'Experimented with reusable patterns and visual systems that improve consistency and velocity across products.',
    //   stack: 'Design Systems · UI Patterns'
    // },
    {
      name: 'More to come',
      summary: 'New works and projects are being added as the portfolio grows.',
      stack: 'Ongoing updates'
    }
  ];

  return (
    <section className="experience-page">
      <section className="experience-section">
        <SectionHeader
          eyebrow="Experience"
          title="Experience gained through co-op education and mentorship."
        />

        <div className="experience-layout">
          <div className="experience-panel">
            <h3>Professional Experience</h3>
            {roles.map((role) => (
              <article key={role.title} className="role-card">
                <div className="role-header">
                  <div>
                    <h4>{role.title}</h4>
                    <p>{role.company}</p>
                  </div>
                  <span>{role.period}</span>
                </div>
                <p>{role.description}</p>
              </article>
            ))}
          </div>

          <aside className="experience-panel side-panel">
            <h3>Strengths</h3>
            <ul className="highlight-list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="stack-group">
              {stacks.map((stack) => (
                <span key={stack} className="stack-pill">{stack}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="experience-projects">
        <SectionHeader
          eyebrow="Project snapshots"
          title="Published and functional project built with a purpose."
          className="inside-section"
        />

        <div className="experience-project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              summary={project.summary}
              stack={project.stack}
              imageLabel={`${project.name} project image placeholder`}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

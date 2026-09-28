import './ExperiencePage.css';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

export default function ExperiencePage() {
  const highlights = [
    'Built responsive, accessible user interfaces for modern web experiences',
    'Collaborated with teams to turn product requirements into clear, usable features',
    'Focused on maintainable front-end architecture, performance, and design consistency'
  ];

  const roles = [
    {
      title: 'Frontend Developer',
      company: 'Independent / Product Work',
      period: '2023 — Present',
      description: 'Developed polished web experiences with a strong focus on UI clarity, responsiveness, and product usability across personal and client-facing projects.'
    },
    {
      title: 'Software Engineer',
      company: 'Project-Based Experience',
      period: '2021 — 2023',
      description: 'Built and improved digital tools and interfaces using JavaScript, Python, and front-end best practices to support business and user workflows.'
    },
    {
      title: 'Web Developer',
      company: 'Freelance / Personal Projects',
      period: '2019 — 2021',
      description: 'Created custom websites and product interfaces for personal brands and small businesses with an emphasis on performance, presentation, and usability.'
    }
  ];

  const stacks = ['JavaScript', 'React', 'HTML/CSS', 'Python', 'SQL', 'FastAPI', 'Git', 'Responsive Design'];

  const projects = [
    {
      name: 'Portfolio & personal brand site',
      summary: 'Designed and built a premium digital presence with clean information architecture, polished styling, and a strong editorial feel.',
      stack: 'React · Vite · CSS'
    },
    {
      name: 'User-facing product interfaces',
      summary: 'Created responsive, accessible interfaces that help users complete tasks quickly and confidently.',
      stack: 'JavaScript · UX UI'
    },
    {
      name: 'Workflow and internal tooling',
      summary: 'Built practical tools that streamline operations and make data-heavy workflows easier to navigate.',
      stack: 'Python · APIs · SQL'
    },
    {
      name: 'Design system explorations',
      summary: 'Experimented with reusable patterns and visual systems that improve consistency and velocity across products.',
      stack: 'Design Systems · UI Patterns'
    },
    {
      name: 'More to come',
      summary: 'New work and product case studies are being added as the portfolio grows.',
      stack: 'Ongoing updates'
    }
  ];

  return (
    <section className="experience-page">
      <section className="experience-section">
        <SectionHeader
          eyebrow="Experience"
          title="Product-minded engineering with a focus on clean, practical execution."
        />

        <div className="experience-layout">
          <div className="experience-panel">
            <h3>Professional background</h3>
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
          title="Selected work, ready for future visuals."
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

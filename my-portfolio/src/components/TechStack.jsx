import './TechStack.css';

const skills = [
  'Python',
  'JavaScript',
  'C/C++',
  'HTML/CSS',
  'React',
  'Git',
  'Azure',
  'Godot'
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="techstack-section">
      <div className="techstack-content">
        <h2 className="techstack-title">Tech Stack</h2>
        <p className="techstack-text">
          I enjoy building polished, user-friendly experiences with modern tools and thoughtful design.
        </p>
        <div className="techstack-text">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">{skill}</span>
          ))}
        </div>
      </div>

    </section>
  );
}

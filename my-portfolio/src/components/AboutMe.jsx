// src/components/AboutMe.jsx

export default function AboutMe() {
  const name = "Ian";
  const githubUrl = "https://github.com/YINOL1"; // Change to your actual link
  const linkedinUrl = "https://linkedin.com/in/iyjwu"; // Change to your actual link

  return (
    <section style={{ padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
      <h1>Hello, I'm {name}</h1>
      <h2>Computer Engineering @ University of Waterloo</h2>
      <p>
        Nothing to see here yet, but feel free to reach out on LinkedIn! Open to work.
      </p>

      {/* Your Hyperlinks */}
      <div style={{ marginTop: '15px' }}>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
          GitHub
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
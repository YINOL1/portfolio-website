// src/App.jsx
import AboutMe from './components/AboutMe'; // 1. Import your component

function App() {
  return (
    <main style={{ maxWidth: '800px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      
      {/* 2. Call your component like a custom HTML tag! */}
      <AboutMe />
      
    </main>
  );
}

export default App;
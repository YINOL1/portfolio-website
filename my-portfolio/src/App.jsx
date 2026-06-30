import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';

export default function App() {
  return (
    // BrowserRouter acts as the engine for all your links and routes
    <BrowserRouter>
      <NavBar /> 

      <main>
        <Routes>
            
          {/* HOME ROUTE ("/") */}
          <Route path="/" element={
            <div className="home-page-container">
              
              <AboutMe />
              
              {/* Temporary placeholder for Tech Stack */}
              <section id="tech-stack" style={{ padding: '5rem 2rem', minHeight: '50vh', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
                <h2>Tech Stack</h2>
                <p>Component coming soon...</p>
              </section>

              {/* Temporary placeholder for Contact */}
              <section id="contact" style={{ padding: '5rem 2rem', minHeight: '50vh', textAlign: 'center' }}>
                <h2>Contact</h2>
                <p>Component coming soon...</p>
              </section>

            </div>
          } />
          
          {/* MULTI-PAGE ROUTES */}
          <Route path="/projects" element={
            <div style={{ padding: '5rem 2rem', textAlign: 'center' }}>
              <h2>Projects Page</h2>
              <p>Coming soon...</p>
            </div>
          } />
          
          <Route path="/experience" element={
            <div style={{ padding: '5rem 2rem', textAlign: 'center' }}>
              <h2>Experience Page</h2>
              <p>Coming soon...</p>
            </div>
          } />

          {/* Fallback 404 Route just in case someone types a bad URL */}
          <Route path="*" element={
            <div style={{ padding: '5rem 2rem', textAlign: 'center' }}>
              <h2>404 - Page Not Found</h2>
            </div>
          } />

        </Routes>
      </main>

    </BrowserRouter>
  );
}
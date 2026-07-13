import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function PageLayout({ children }) {
  return (
    <div style={{ padding: '5rem 2rem', minHeight: '100vh' }}>
      {children}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    // BrowserRouter acts as the engine for all your links and routes
    <BrowserRouter>
      <NavBar /> 

      <main>
        <Routes>
            
          {/* HOME ROUTE ("/") */}
          <Route path="/" element={
            <PageLayout>
              <div className="home-page-container">
                <AboutMe />

                <section id="tech-stack" style={{ padding: '5rem 2rem', minHeight: '50vh', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
                  <h2>Tech Stack</h2>
                  <p>Component coming soon...</p>
                </section>
              </div>
            </PageLayout>
          } />
          
          {/* MULTI-PAGE ROUTES */}
          <Route path="/projects" element={
            <PageLayout>
              <div style={{ textAlign: 'center' }}>
                <h2>Projects Page</h2>
                <p>Coming soon...</p>
              </div>
            </PageLayout>
          } />
          
          <Route path="/experience" element={
            <PageLayout>
              <div style={{ textAlign: 'center' }}>
                <h2>Experience Page</h2>
                <p>Coming soon...</p>
              </div>
            </PageLayout>
          } />

          {/* Fallback 404 Route just in case someone types a bad URL */}
          <Route path="*" element={
            <PageLayout>
              <div style={{ textAlign: 'center' }}>
                <h2>404 - Page Not Found</h2>
              </div>
            </PageLayout>
          } />

        </Routes>
      </main>

    </BrowserRouter>
  );
}
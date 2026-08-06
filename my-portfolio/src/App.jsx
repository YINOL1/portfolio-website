import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

function PageLayout({ children }) {
  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <NavBar /> 
      <main>
        <Routes>
          
          {/* HOME ROUTE ("/") */}
          <Route path="/" element={
            <PageLayout>
              <div className="home-page-container">
                <AboutMe />

                <TechStack />
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

          {/* Fallback 404 Route Bad URL */}
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
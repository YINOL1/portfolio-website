import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import ExperiencePage from './components/ExperiencePage';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function PageLayout({ children, theme }) {
  return (
    <div className="page-shell">
      <div className="page-content">{children}</div>
      <Footer theme={theme} />
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-theme', theme);
    }
  }, [theme]);

  return (
    <div className="app-shell" data-theme={theme}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <NavBar theme={theme} onToggleTheme={() => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')} />
        <main>
          <Routes>
            <Route path="/" element={<PageLayout theme={theme}><AboutMe theme={theme} /></PageLayout>} />
            <Route path="/experience" element={<PageLayout theme={theme}><ExperiencePage /></PageLayout>} />
            <Route path="*" element={<PageLayout theme={theme}><section className="not-found"><h2>404 - Page Not Found</h2><p>The page you’re looking for doesn’t exist.</p></section></PageLayout>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
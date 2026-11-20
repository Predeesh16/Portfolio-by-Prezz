import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const handleNavClick = (page) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar" role="navigation">
        <div className="navbar-inner">
          {/* Brand Logo */}
          <button
            className="navbar-brand"
            onClick={() => handleNavClick('home')}
            aria-label="Go to homepage"
          >
            .prezz
          </button>

          {/* Actions Group */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a
              href="./Predeesh_Resume.pdf"
              download="Predeesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-resume-btn"
              title="Download Resume PDF"
            >
              <span>resume</span>
              <Download size={13} />
            </a>

            {/* Minimalist Framer-style Menu Toggle */}
            <button
              className="framer-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={menuOpen}
            >
              <span className="menu-text">{menuOpen ? 'close' : 'menu'}</span>
              {menuOpen ? (
                <X size={18} strokeWidth={1.8} className="menu-icon-close" />
              ) : (
                <span className="menu-hamburger-bars" aria-hidden="true">
                  <span className="bar" />
                  <span className="bar" />
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Blurred Framer Menu Overlay */}
      {menuOpen && (
        <div
          className="framer-menu-overlay"
          onClick={() => setMenuOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="framer-menu-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="framer-nav-list">
              <li>
                <button
                  className={`framer-nav-link ${currentPage === 'home' ? 'active' : ''}`}
                  onClick={() => handleNavClick('home')}
                >
                  home
                </button>
              </li>
              <li>
                <button
                  className={`framer-nav-link ${currentPage === 'projects' ? 'active' : ''}`}
                  onClick={() => handleNavClick('projects')}
                >
                  projects
                </button>
              </li>
              <li>
                <button
                  className={`framer-nav-link ${currentPage === 'about' ? 'active' : ''}`}
                  onClick={() => handleNavClick('about')}
                >
                  about
                </button>
              </li>
              <li>
                <button
                  className={`framer-nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                  onClick={() => handleNavClick('contact')}
                >
                  contact
                </button>
              </li>
              <li style={{ marginTop: '12px' }}>
                <a
                  href="./Predeesh_Resume.pdf"
                  download="Predeesh_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="framer-nav-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--text-dim)' }}
                >
                  <span>resume</span>
                  <Download size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

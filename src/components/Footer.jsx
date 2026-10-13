import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-inner">
          <div className="footer-brand">
            Prezz.design
          </div>

          <div className="footer-links">
            <button
              className="footer-link"
              onClick={() => {
                onNavigate('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              projects
            </button>
            <button
              className="footer-link"
              onClick={() => {
                onNavigate('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              about
            </button>
            <button
              className="footer-link"
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              contact
            </button>
            <a
              href="https://www.instagram.com/prezz.dt"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              instagram
            </a>
            <a
              href="https://www.linkedin.com/in/predeesh-s-053ba4355"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              linkedin
            </a>
            <a
              href="https://github.com/Predeesh16"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

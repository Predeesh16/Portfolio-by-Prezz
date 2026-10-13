import React from 'react';
import StatusRow from '../components/StatusRow';
import FloatingCard from '../components/FloatingCard';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';

export default function Home({ onNavigate, onSelectProject }) {
  return (
    <div className="home-page">
      <div className="page-container">
        {/* Subheader Status Row */}
        <StatusRow />

        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-heading">
            a product design<br />
            partner with focus on<br />
            interactive experiences
          </h1>

          {/* Crosshair Target Icon */}
          <svg
            className="crosshair-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <line x1="12" y1="3" x2="12" y2="7" />
            <line x1="12" y1="17" x2="12" y2="21" />
            <line x1="3" y1="12" x2="7" y2="12" />
            <line x1="17" y1="12" x2="21" y2="12" />
          </svg>
        </section>

        {/* The Stacking / Floating Cards Deck */}
        <section className="stacking-section" aria-label="Selected Projects">
          <div className="stacking-cards-container">
            {PROJECTS_DATA.map((project, index) => (
              <FloatingCard
                key={project.id}
                project={project}
                index={index}
                onSelect={(p) => {
                  onSelectProject(p);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </section>

        {/* About Preview Section */}
        <section className="about-preview-section">
          <div className="section-label">.about</div>
          
          <div className="about-preview-grid">
            <div className="about-preview-text-col">
              <p className="about-manifesto-text">
                I’m a creative UI/UX designer and developer passionate about creating modern, simple, and user-friendly digital experiences with a focus on creativity, usability, and innovation.
              </p>
              
              <button
                className="btn-outline"
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>about me</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="about-preview-media-col">
              <div className="about-portrait-card">
                <img
                  src="./assets/predeesh.jpeg"
                  alt="Predeesh portrait"
                  onError={(e) => {
                    e.target.src = 'https://framerusercontent.com/images/G5BlESrjVenOqX6zSN60EJAA.jpeg';
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Say Hello / Contact CTA Section */}
        <section className="say-hello-section">
          <div className="section-label">.say hello</div>
          
          <h2 className="say-hello-heading">
            i'm open for freelance projects, feel free to email me to see how can we collaborate
          </h2>

          <button
            className="btn-outline"
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span>contact me</span>
            <ArrowUpRight size={16} />
          </button>
        </section>
      </div>
    </div>
  );
}

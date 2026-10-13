import React from 'react';
import StatusRow from '../components/StatusRow';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';

export default function Projects({ onNavigate, onSelectProject }) {
  return (
    <div className="projects-page">
      <div className="page-container">
        <StatusRow />

        <div className="projects-header">
          <div className="section-label">.projects</div>
          <h1 className="hero-heading" style={{ marginBottom: '40px' }}>
            selected works & experiments
          </h1>
        </div>

        <div className="projects-list">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="project-item-card"
              onClick={() => {
                onSelectProject(project);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-item-info">
                <div>
                  <div className="project-meta-row">
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.category}</span>
                  </div>
                  <h2 className="project-item-title">{project.title}</h2>
                  <p className="project-item-desc">{project.shortDescription}</p>
                </div>

                <div>
                  <button className="btn-outline">
                    <span>view case study</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>

              <div
                className="project-item-preview"
                style={{ backgroundColor: project.bgColor }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = project.fallbackImage;
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Say Hello CTA */}
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

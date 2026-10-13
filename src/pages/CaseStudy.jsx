import React, { useState, useEffect } from 'react';
import StatusRow from '../components/StatusRow';
import { ArrowLeft, ArrowUpRight, ExternalLink, X, ZoomIn } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';

export default function CaseStudy({ project, onBack, onSelectProject, onNavigate }) {
  const [lightboxImg, setLightboxImg] = useState(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxImg(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Always bind to the freshest project dataset
  const targetId = typeof project === 'string' ? project : (project?.id || project?.slug);
  const activeProject = PROJECTS_DATA.find((p) => p.id === targetId || p.slug === targetId) || project || PROJECTS_DATA[0];

  // Find other projects for "see also"
  const otherProjects = PROJECTS_DATA.filter((p) => p.id !== activeProject.id);

  return (
    <div className="case-study-page page-enter">
      <div className="page-container">
        <StatusRow />

        {/* Back button */}
        <div style={{ paddingTop: '32px' }}>
          <button
            className="btn-outline"
            style={{ padding: '10px 20px', fontSize: '13px' }}
            onClick={onBack}
          >
            <ArrowLeft size={15} />
            <span>back to projects</span>
          </button>
        </div>

        {/* Case Study Hero */}
        <div className="case-study-hero">
          <h1 className="case-study-title">{activeProject.title}</h1>
          <p className="case-study-subtitle">{activeProject.shortDescription}</p>

          {/* Project Metadata Table */}
          <div className="case-metadata-grid">
            <div>
              <div className="meta-field-label">year</div>
              <div className="meta-field-value">{activeProject.year}</div>
            </div>
            <div>
              <div className="meta-field-label">timeframe</div>
              <div className="meta-field-value">{activeProject.timeframe || '16 days'}</div>
            </div>
            <div>
              <div className="meta-field-label">tools</div>
              <div className="meta-field-value">{activeProject.tools || 'Figma, Framer'}</div>
            </div>
            <div>
              <div className="meta-field-label">category</div>
              <div className="meta-field-value">{activeProject.category}</div>
            </div>
          </div>
        </div>

        {/* Hero Cover Mockup */}
        <div className="case-hero-image-wrap">
          <img
            src={activeProject.image}
            onError={(e) => {
              if (activeProject.fallbackImage && e.target.src !== activeProject.fallbackImage) {
                e.target.src = activeProject.fallbackImage;
              }
            }}
            alt={activeProject.title}
            className="case-hero-image"
          />
        </div>

        {/* Problem Section */}
        {activeProject.problem && (
          <div className="case-content-section">
            <div className="case-section-tag">problem</div>
            <div className="case-section-body">
              {activeProject.problem.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        {/* Solution Section */}
        {activeProject.solution && (
          <div className="case-content-section">
            <div className="case-section-tag">solution</div>
            <div className="case-section-body">
              {activeProject.solution.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        {/* Story Section */}
        {(activeProject.storyTitle || (activeProject.story && activeProject.story.length > 0)) && (
          <div className="case-content-section case-story-section">
            {activeProject.storyTitle && (
              <h3 className="case-story-title">{activeProject.storyTitle}</h3>
            )}
            {activeProject.story && (
              <div className="case-section-body">
                {activeProject.story.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            )}
            {activeProject.storyImage && (
              <div
                className="case-story-image-wrap"
                onClick={() => setLightboxImg({ 
                  src: activeProject.storyImage, 
                  fallback: activeProject.fallbackStoryImage,
                  title: `${activeProject.title} Story Prototype` 
                })}
              >
                <img
                  src={activeProject.storyImage}
                  onError={(e) => {
                    if (activeProject.fallbackStoryImage && e.target.src !== activeProject.fallbackStoryImage) {
                      e.target.src = activeProject.fallbackStoryImage;
                    }
                  }}
                  alt={`${activeProject.title} prototype`}
                  loading="lazy"
                />
              </div>
            )}
          </div>
        )}

        {/* Overview Section */}
        {activeProject.details && activeProject.details.length > 0 && (
          <div className="case-content-section">
            <div className="case-section-tag">overview</div>
            <div className="case-section-body">
              {activeProject.details.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              {activeProject.liveUrl && (
                <div style={{ marginTop: '36px' }}>
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <span>visit live website</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* High-Fidelity Gallery Screenshots with Number Tags & Captions */}
        {activeProject.gallery && activeProject.gallery.length > 0 && (
          <div className="case-gallery-container">
            {activeProject.gallery.map((item, idx) => {
              const src = typeof item === 'string' ? item : item.src;
              const fallback = typeof item === 'object' ? item.fallback : '';
              const caption = typeof item === 'object' ? item.caption : '';
              const numStr = String(idx + 1).padStart(2, '0');

              return (
                <div key={idx} className="case-gallery-block">
                  <div className="case-gallery-header">
                    <span className="case-gallery-num">{numStr}</span>
                    <div className="case-gallery-divider" />
                  </div>

                  <div
                    className="case-gallery-item"
                    onClick={() => setLightboxImg({ src, fallback, caption, title: `${activeProject.title} — Screen ${numStr}` })}
                  >
                    <img
                      src={src}
                      onError={(e) => {
                        if (fallback && e.target.src !== fallback) {
                          e.target.src = fallback;
                        }
                      }}
                      alt={caption || `${activeProject.title} preview ${idx + 1}`}
                      loading="lazy"
                    />
                    <div className="gallery-zoom-badge">
                      <ZoomIn size={16} />
                    </div>
                  </div>

                  {caption && (
                    <p className="case-gallery-caption">{caption}</p>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* See Also Section */}
        <section className="see-also-section">
          <div className="section-label">see also</div>
          <div className="see-also-grid">
            {otherProjects.map((op) => (
              <div
                key={op.id}
                className={`see-also-card ${op.theme}`}
                onClick={() => {
                  onSelectProject(op);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="see-also-card-content">
                  <div className="see-also-meta">
                    <span>{op.year}</span>
                    <span>•</span>
                    <span>{op.category}</span>
                  </div>
                  <h3 className="see-also-title">{op.title}</h3>
                  <button className="see-also-btn">
                    <span>explore project</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

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

      {/* Fullscreen Interactive Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setLightboxImg(null)}>
              <X size={20} />
            </button>
            <img 
              src={lightboxImg.src} 
              onError={(e) => {
                if (lightboxImg.fallback && e.target.src !== lightboxImg.fallback) {
                  e.target.src = lightboxImg.fallback;
                }
              }}
              alt={lightboxImg.title || 'Preview'} 
            />
            {lightboxImg.caption && (
              <div className="lightbox-caption">{lightboxImg.caption}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import StatusRow from '../components/StatusRow';
import { ArrowUpRight, Award, CheckCircle2, ExternalLink, X, Eye, Download, Maximize2 } from 'lucide-react';
import { CERTIFICATES_DATA } from '../data/certificates';

export default function About({ onNavigate }) {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="about-page page-enter">
      <div className="page-container">
        <StatusRow />

        <div className="about-hero">
          <div className="section-label">.about</div>
          <h1 className="about-headline">
            i'm a designer, maker, nomad, and coffee lover obsessed with the world of digital
          </h1>

          {/* Key Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-label">.experience</span>
              <span className="stat-value">02 years</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">.location</span>
              <span className="stat-value">Tiruppur</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">.freelance</span>
              <span className="stat-value">
                <span className="status-pulse-dot" style={{ display: 'inline-block' }} />
                <span>Available</span>
              </span>
            </div>
          </div>
        </div>

        {/* Hello & Bio Section */}
        <section className="about-preview-section" style={{ borderTop: 'none', paddingTop: 0 }}>
          <div className="section-label">.hello</div>
          <div className="about-preview-grid">
            <div className="about-preview-text-col">
              <p className="about-manifesto-text">
                I’m a creative UI/UX designer and developer passionate about creating modern, simple, and user-friendly digital experiences with a focus on creativity, usability, and innovation.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: '1.7', marginBottom: '32px' }}>
                Specializing in bridging the boundary between high-impact aesthetic design and robust frontend engineering. From initial product strategy and interactive prototypes to pixel-perfect deployment with smooth transitions and spring physics.
              </p>
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

        {/* Tech Stack Section */}
        <section className="stack-section">
          <div className="section-label">.stack</div>
          
          <div className="stack-grid">
            <div className="stack-card-item">
              <div className="stack-icon">
                <img
                  src="./assets/framer.png"
                  alt="Framer"
                  onError={(e) => {
                    e.target.src = 'https://framerusercontent.com/images/QAtzzP7NvyjnEy2SMOGhzaj8u0.png';
                  }}
                />
              </div>
              <div>
                <div className="stack-info-title">Framer</div>
                <div className="stack-info-role">web design & interactions</div>
              </div>
            </div>

            <div className="stack-card-item">
              <div className="stack-icon">
                <img
                  src="./assets/figma.png"
                  alt="Figma"
                  onError={(e) => {
                    e.target.src = 'https://framerusercontent.com/images/nLogQeUaBhk64fJVUBj5LsliOg.png';
                  }}
                />
              </div>
              <div>
                <div className="stack-info-title">Figma</div>
                <div className="stack-info-role">product design & prototyping</div>
              </div>
            </div>

            <div className="stack-card-item">
              <div className="stack-icon">
                <img
                  src="./assets/canva.svg"
                  alt="Canva"
                />
              </div>
              <div>
                <div className="stack-info-title">Canva</div>
                <div className="stack-info-role">visual design & branding</div>
              </div>
            </div>

            <div className="stack-card-item">
              <div className="stack-icon">
                <img
                  src="./assets/html.svg"
                  alt="HTML"
                />
              </div>
              <div>
                <div className="stack-info-title">HTML</div>
                <div className="stack-info-role">web structure & semantics</div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="certificates-section">
          <div className="section-label">.certificates</div>
          <div className="certificates-header">
            <h2 className="certificates-headline">
              verified certifications & specialized credentials
            </h2>
            <p className="certificates-subheadline">
              Accredited qualifications across Artificial Intelligence, Data Science, Front-End Development, modern CSS layouts, and C programming fundamentals.
            </p>
          </div>

          <div className="certificates-grid">
            {CERTIFICATES_DATA.map((cert) => (
              <div
                key={cert.id}
                className="cert-card"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="cert-card-top">
                  <div className="cert-issuer-badge">
                    <span className="cert-issuer-dot" style={{ backgroundColor: cert.badgeColor }} />
                    <span className="cert-issuer-name">{cert.issuer}</span>
                  </div>
                  <span className="cert-year-tag">{cert.year}</span>
                </div>

                {/* Certificate Visual Thumbnail */}
                <div className="cert-card-thumb-container">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="cert-card-thumb-img"
                    loading="lazy"
                  />
                  <div className="cert-card-thumb-overlay">
                    <div className="cert-thumb-view-badge">
                      <Eye size={13} />
                      <span>Click to view certificate</span>
                    </div>
                  </div>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-desc">{cert.description}</p>

                <div className="cert-skills-wrap">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="cert-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="cert-footer-row">
                  <div className="cert-id-tag">
                    <CheckCircle2 size={13} color="#22c55e" />
                    <span>ID: {cert.credentialId}</span>
                  </div>
                  <button
                    className="cert-view-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert);
                    }}
                  >
                    <span>view certificate</span>
                    <ArrowUpRight size={14} />
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

      {/* Interactive Certificate Verification Modal */}
      {selectedCert && (
        <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="cert-modal-close"
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate modal"
            >
              <X size={20} />
            </button>

            <div className="cert-modal-header">
              <div className="cert-modal-badge-group">
                <div className="cert-seal-icon">
                  <Award size={28} color={selectedCert.badgeColor} />
                </div>
                <div>
                  <div className="cert-verified-status">
                    <span className="verified-pulse-dot" />
                    <span>Verified Credential</span>
                  </div>
                  <div className="cert-modal-org-label">{selectedCert.issuer}</div>
                </div>
              </div>

              <div className="cert-modal-header-actions">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-action-link"
                  title="Open full image in new tab"
                >
                  <Maximize2 size={14} />
                  <span>Full Size</span>
                </a>
                <a
                  href={selectedCert.image}
                  download={`Certificate_${selectedCert.id}`}
                  className="cert-modal-action-link"
                  title="Download Certificate"
                >
                  <Download size={14} />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Prominent High-Resolution Certificate Document Preview */}
            <div className="cert-modal-preview-stage">
              <div className="cert-image-frame">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="cert-modal-full-img"
                  onClick={() => window.open(selectedCert.image, '_blank')}
                  title="Click to view full image in a new tab"
                />
                <div className="cert-frame-hover-hint">
                  <Maximize2 size={14} />
                  <span>Click image to expand in new tab</span>
                </div>
              </div>
            </div>

            <div className="cert-modal-body">
              <span className="cert-modal-recipient">Awarded to: {selectedCert.recipient}</span>
              <h2 className="cert-modal-title">{selectedCert.title}</h2>
              <div className="cert-modal-issuer-row">
                <span>Issued by <strong>{selectedCert.issuer}</strong></span>
                <span>•</span>
                <span>Date: <strong>{selectedCert.date || selectedCert.year}</strong></span>
              </div>

              <p className="cert-modal-desc">{selectedCert.description}</p>

              <div className="cert-modal-meta-box">
                <div>
                  <div className="meta-box-label">credential id / code</div>
                  <div className="meta-box-val">{selectedCert.credentialId}</div>
                </div>
                <div>
                  <div className="meta-box-label">verification status</div>
                  <div className="meta-box-val" style={{ color: '#22c55e' }}>Active & Authenticated</div>
                </div>
              </div>

              <div className="cert-modal-skills">
                <div className="meta-box-label" style={{ marginBottom: '8px' }}>skills & competencies validated</div>
                <div className="cert-skills-wrap">
                  {selectedCert.skills.map((sk, idx) => (
                    <span key={idx} className="cert-skill-pill">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="cert-modal-footer">
              <a
                href={selectedCert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ width: '100%', justifyContent: 'center', gap: '8px' }}
              >
                <span>view full certificate document</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

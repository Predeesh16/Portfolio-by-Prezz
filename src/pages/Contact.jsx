import React, { useState } from 'react';
import StatusRow from '../components/StatusRow';
import { ArrowUpRight, CheckCircle2, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Design & Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="page-container">
        <StatusRow />

        <div className="contact-hero">
          <div className="section-label">.contact</div>
          <h1 className="hero-heading" style={{ marginBottom: '24px' }}>
            say hello
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '20px', maxWidth: '720px', lineHeight: '1.5' }}>
            let's collaborate. feel free to drop me a line about your project or follow me on social networks
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct channels */}
          <div className="contact-info-col">
            <div className="contact-card-box">
              <span className="form-label">.email</span>
              <a
                href="mailto:predeesh16a@gmail.com"
                style={{ fontSize: '20px', color: '#fff', fontWeight: '500' }}
              >
                predeesh16a@gmail.com
              </a>
              <span style={{ fontSize: '14px', color: 'var(--text-dim)' }}>
                Usually responds within 24 hours
              </span>
            </div>

            <div className="contact-card-box">
              <span className="form-label">.instagram</span>
              <a
                href="https://www.instagram.com/prezz.dt"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '20px', color: '#fff', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <span>@prezz.dt</span>
                <ArrowUpRight size={18} />
              </a>
              <span style={{ fontSize: '14px', color: 'var(--text-dim)' }}>
                Follow design process & WIP drops
              </span>
            </div>

            <div className="contact-card-box">
              <span className="form-label">.linkedin</span>
              <a
                href="https://www.linkedin.com/in/predeesh-s-053ba4355"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '20px', color: '#fff', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <span>Predeesh S</span>
                <ArrowUpRight size={18} />
              </a>
              <span style={{ fontSize: '14px', color: 'var(--text-dim)' }}>
                Connect on professional network
              </span>
            </div>

            <div className="contact-card-box">
              <span className="form-label">.location</span>
              <span style={{ fontSize: '20px', color: '#fff', fontWeight: '500' }}>
                Tiruppur, India (UTC +5:30)
              </span>
              <span style={{ fontSize: '14px', color: 'var(--text-dim)' }}>
                Available worldwide for remote collaborations
              </span>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="contact-form-col">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '48px 20px' }}>
                <CheckCircle2 size={48} color="#00ff77" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '12px', color: '#fff' }}>
                  Message Received!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.6' }}>
                  Thank you for reaching out, {formData.name}. I'll review your project requirements and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">your name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">your email</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">service interest</label>
                  <select
                    className="form-input"
                    style={{ background: '#141414', color: '#fff' }}
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Web Design & Development">Web Design & Framer / Code Development</option>
                    <option value="UI/UX Product Design">UI/UX Product Design & Mobile Apps</option>
                    <option value="Design Systems & Prototyping">Design Systems & Prototyping</option>
                    <option value="Brand Identity & Web Strategy">Brand Identity & Web Strategy</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">project message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your product, timeline, and goals..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>send message</span>
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

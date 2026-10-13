import React, { useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function FloatingCard({ project, index, onSelect }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, glareX: 50, glareY: 50, isHovered: false });

  // Calculate sticky offset
  const stickyTop = 96 + index * 36;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt angles
    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = -((y - centerY) / centerY) * 5;

    setTilt({
      rx: rotateX,
      ry: rotateY,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({
      rx: 0,
      ry: 0,
      glareX: 50,
      glareY: 50,
      isHovered: false,
    });
  };

  const transformStyle = tilt.isHovered
    ? `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale3d(1.015, 1.015, 1.015)`
    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

  return (
    <div
      className="stack-card-wrapper"
      style={{
        top: `${stickyTop}px`,
        zIndex: 10 + index,
      }}
    >
      <div
        ref={cardRef}
        className={`stack-card ${project.theme}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelect(project)}
        style={{
          transform: transformStyle,
        }}
      >
        {/* Subtle Dynamic Glare Overlay */}
        {tilt.isHovered && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '20px',
              pointerEvents: 'none',
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 65%)`,
              zIndex: 3,
            }}
          />
        )}

        {/* Top Header Row */}
        <div className="stack-card-header">
          <span className="card-year">{project.year}</span>
          <span className="card-category">{project.category}</span>
        </div>

        {/* Title & Arrow Row */}
        <div className="stack-card-title-row">
          <h2 className="card-title">{project.title}</h2>
          <div className="card-arrow-btn">
            {project.arrowSymbol === '↗' ? (
              <ArrowUpRight size={38} strokeWidth={2.2} />
            ) : (
              <ArrowRight size={38} strokeWidth={2.2} />
            )}
          </div>
        </div>

        {/* Card Media Preview */}
        <div className="stack-card-media">
          <div className="media-inner-frame">
            <img
              src={project.image}
              alt={project.title}
              onError={(e) => {
                if (e.target.src !== project.fallbackImage) {
                  e.target.src = project.fallbackImage;
                }
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

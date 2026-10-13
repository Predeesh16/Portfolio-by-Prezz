import React, { useEffect, useState } from 'react';

export default function GridBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Ambient cursor follower */}
      <div
        className="cursor-ambient-glow"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          opacity: mousePos.x < 0 ? 0 : 1,
        }}
      />

      {/* 8-Column Architecture Grid Lines */}
      <div className="grid-overlay" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="grid-col-line" />
        ))}
      </div>
    </>
  );
}

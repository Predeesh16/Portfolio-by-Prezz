import React from 'react';

export default function FramerBadge() {
  return (
    <a
      href="https://www.framer.com"
      target="_blank"
      rel="noopener noreferrer"
      className="framer-badge"
      aria-label="Made in Framer"
    >
      <svg
        className="framer-badge-icon"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.5 2.5H13.5V7H8V11.5L2.5 6V2.5Z" fill="black" />
        <path d="M8 7H13.5L8 11.5V7Z" fill="black" />
      </svg>
      <span>Made in Framer</span>
    </a>
  );
}

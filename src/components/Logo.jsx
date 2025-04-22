// src/components/Logo.jsx
import React from 'react';

export default function Logo({ width = '100px' }) {
  return (
    <div
      className="text-2xl font-extrabold text-accent flex items-center space-x-1 select-none"
      style={{ width }}
    >
      <span>My</span>
      <span className="text-secondary">Blog</span>
    </div>
  );
}
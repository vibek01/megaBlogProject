// src/components/Button.jsx
import React from 'react';

export default function Button({ children, className = '', ...rest }) {
  return (
    <button
      className={`
        bg-secondary text-white font-medium rounded-lg px-5 py-2
        transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-accent
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
}
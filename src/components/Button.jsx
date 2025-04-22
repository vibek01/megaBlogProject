import React from 'react';

export default function Button({ children, className = '', ...rest }) {
  return (
    <button
      className={`
        bg-secondary text-white font-medium rounded-md px-4 py-2
        hover:bg-secondary-dark transition
        focus:outline-none focus:ring-2 focus:ring-accent
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
}
// src/components/Input.jsx
import React, { forwardRef } from 'react';

const Input = forwardRef(function Input(
  { label, type = 'text', className = '', error, ...props },
  ref
) {
  return (
    <div className="form-control w-full mb-4">
      {label && (
        <label className="label">
          <span className="label-text font-medium">{label}</span>
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={`
          w-full bg-white text-black border border-gray-300 rounded-md px-3 py-2
          transition-all duration-300 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <label className="label">
          <span className="label-text-alt text-red-500">{error}</span>
        </label>
      )}
    </div>
  );
});

export default Input;
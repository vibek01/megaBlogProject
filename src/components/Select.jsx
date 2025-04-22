// src/components/Select.jsx
import React, { forwardRef } from "react";

const Select = forwardRef(function Select(
  { label, options = [], error, className = "", ...props },
  ref
) {
  return (
    <div className="form-control w-full mb-4">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}

      <select
        ref={ref}
        className={`
          select select-bordered w-full
          focus:outline-none focus:ring-2 focus:ring-secondary
          ${error ? "select-error" : ""}
          ${className}
        `}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {error && (
        <label className="label">
          <span className="label-text-alt text-red-500">{error}</span>
        </label>
      )}
    </div>
  );
});

export default Select;
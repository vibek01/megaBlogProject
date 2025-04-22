import React, { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", error, ...props },
  ref
) {
  return (
    <div className="form-control w-full mb-4">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}

      <input
        ref={ref}
        type={type}
        className={`
          input input-bordered w-full
          focus:outline-none focus:ring-2 focus:ring-secondary
          ${error ? "input-error" : ""}
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
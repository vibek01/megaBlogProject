import React from "react";
import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", error, ...props },
  ref
) {
  return (
    <div className="form-control w-full max-w-md">
      {label && (
        <label className="label">
          <span className="label-text text-base-content">{label}</span>
        </label>
      )}

      <input
        ref={ref}
        type={type}
        className={`input input-bordered w-full 
          bg-base-100 
          text-base-content 
          placeholder:text-neutral-content 
          focus:outline-none focus:ring-2 focus:ring-secondary 
          ${error ? "input-error border-red-500" : ""} 
          ${className}`}
        {...props}
      />

      {error && (
        <label className="label">
          <span className="label-text-alt text-red-500">{error.message}</span>
        </label>
      )}
    </div>
  );
});

export default Input;
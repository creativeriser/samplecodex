import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-1.5 block text-sm font-semibold text-neutral-700">
          {label}
        </label>
      )}
      <input
        className={`w-full rounded-[var(--radius-md)] border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-800 transition-colors duration-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 ${
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30' : ''
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

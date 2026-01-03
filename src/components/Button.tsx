import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-semibold tracking-tight transition-colors duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none disabled:focus-visible:ring-0';

  const variants = {
    primary: 'bg-primary-700 text-white hover:bg-primary-750 active:bg-primary-800 focus-visible:ring-primary-500/30 disabled:bg-primary-400 disabled:text-white/90 disabled:hover:bg-primary-400 disabled:active:bg-primary-400',
    secondary: 'bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 hover:border-primary-300 active:bg-primary-100 focus-visible:ring-primary-500/20 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-neutral-200 disabled:hover:bg-neutral-100 disabled:active:bg-neutral-100',
    ghost: 'text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 focus-visible:ring-neutral-400/30 disabled:text-neutral-400 disabled:hover:bg-transparent disabled:active:bg-transparent',
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-10 px-5 text-sm',
    lg: 'h-11 px-6 text-base',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

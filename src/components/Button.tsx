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
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] border font-semibold tracking-tight leading-tight transition-colors duration-150 ease-out shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none disabled:shadow-none disabled:focus-visible:ring-0';

  const variants = {
    primary: 'bg-primary-700 text-white border-primary-700 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700 focus-visible:ring-primary-500/35 disabled:bg-primary-400 disabled:border-primary-400 disabled:text-white/85 disabled:hover:bg-primary-400 disabled:active:bg-primary-400',
    secondary: 'bg-white text-primary-700 border-neutral-300 hover:bg-neutral-100 hover:border-neutral-400 active:bg-neutral-100 active:border-neutral-400 focus-visible:ring-primary-500/20 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-neutral-200 disabled:hover:bg-neutral-100 disabled:active:bg-neutral-100',
    ghost: 'text-neutral-700 border-transparent shadow-none hover:bg-neutral-100 active:bg-neutral-200 focus-visible:ring-neutral-400/30 disabled:text-neutral-400 disabled:hover:bg-transparent disabled:active:bg-transparent',
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

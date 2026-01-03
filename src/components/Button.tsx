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
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-[10px] border font-semibold tracking-tight leading-snug transition-colors duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none disabled:shadow-none disabled:focus-visible:ring-0';

  const variants = {
    primary: 'bg-primary-600 text-white border-primary-600 shadow-md hover:bg-primary-500 hover:border-primary-500 hover:shadow-lg active:bg-primary-700 active:border-primary-700 active:shadow-md focus-visible:ring-primary-500/35 disabled:bg-primary-400 disabled:border-primary-400 disabled:text-white/85 disabled:hover:bg-primary-400 disabled:active:bg-primary-400 disabled:shadow-none',
    secondary: 'bg-white text-primary-700 border-primary-200 shadow-sm hover:bg-primary-50 hover:border-primary-300 hover:text-primary-800 hover:shadow-md active:bg-primary-100 active:border-primary-300 active:text-primary-800 active:shadow-sm focus-visible:ring-primary-500/15 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-neutral-200 disabled:shadow-none',
    ghost: 'text-neutral-700 border-transparent shadow-none hover:bg-neutral-100 active:bg-neutral-200 focus-visible:ring-neutral-400/30 disabled:text-neutral-400 disabled:hover:bg-transparent disabled:active:bg-transparent',
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-sm',
    lg: 'h-12 px-7 text-base',
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

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'success' | 'neutral';
  className?: string;
}

export function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const variants = {
    primary: 'bg-primary-50 text-primary-700 border-primary-200/70',
    accent: 'bg-accent-50 text-accent-700 border-accent-200/70',
    success: 'bg-green-50 text-green-700 border-green-200/70',
    neutral: 'bg-neutral-100 text-neutral-700 border-neutral-200',
  };
  
  return (
    <span 
      className={`inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border px-2.5 py-1 text-sm font-medium leading-tight transition-all duration-150 ease-out hover:shadow-sm hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-primary-500/40 ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

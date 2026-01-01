import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'success' | 'neutral';
  className?: string;
}

export function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const variants = {
    primary: 'bg-primary-100 text-primary-800 border-primary-200',
    accent: 'bg-accent-100 text-accent-800 border-accent-200',
    success: 'bg-green-100 text-green-800 border-green-200',
    neutral: 'bg-neutral-100 text-neutral-800 border-neutral-200',
  };
  
  return (
    <span 
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-sm border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

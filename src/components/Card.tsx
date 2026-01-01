import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div 
      className={`bg-white rounded-lg border border-neutral-200 card-shadow ${
        hover ? 'transition-all duration-200 hover:card-shadow-md hover:border-primary-200' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

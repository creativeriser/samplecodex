import React from 'react';

type CardProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & {
    hover?: boolean;
  }
>;

export function Card({ children, className = '', hover: _hover = false, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={`bg-white border border-neutral-200 rounded-[var(--radius-lg)] card-shadow transition-colors duration-150 ease-out flex flex-col focus-within:border-primary-200 focus-within:shadow ${className}`}
    >
      {children}
    </div>
  );
}

type CardSectionProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

export function CardHeader({ children, className = '', ...rest }: CardSectionProps) {
  return (
    <div
      {...rest}
      className={`px-5 pt-5 pb-3 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = '', ...rest }: CardSectionProps) {
  return (
    <div
      {...rest}
      className={`px-5 pt-2 pb-5 flex-1 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', ...rest }: CardSectionProps) {
  return (
    <div
      {...rest}
      className={`px-5 py-4 mt-auto border-t border-neutral-100 flex items-center justify-end gap-3 ${className}`}
    >
      {children}
    </div>
  );
}

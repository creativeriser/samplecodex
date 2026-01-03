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
      className={`bg-white border border-neutral-100 rounded-[var(--radius-lg)] shadow-sm transition-colors duration-150 ease-out flex flex-col focus-within:border-primary-200 focus-within:shadow-md ${className}`}
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
      className={`px-6 pt-6 pb-3 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = '', ...rest }: CardSectionProps) {
  return (
    <div
      {...rest}
      className={`px-6 pt-2 pb-6 flex-1 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', ...rest }: CardSectionProps) {
  return (
    <div
      {...rest}
      className={`px-6 py-5 mt-auto border-t border-neutral-100 bg-neutral-50 flex items-center justify-end gap-4 ${className}`}
    >
      {children}
    </div>
  );
}

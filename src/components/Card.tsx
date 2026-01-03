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
      className={`bg-white border border-neutral-150 rounded-[var(--radius-lg)] shadow-md transition-colors duration-150 ease-out flex flex-col focus-within:border-primary-200 focus-within:shadow-lg ${className}`}
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
      className={`px-7 pt-7 pb-3 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = '', ...rest }: CardSectionProps) {
  return (
    <div
      {...rest}
      className={`px-7 pt-3 pb-7 flex-1 space-y-4 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', ...rest }: CardSectionProps) {
  return (
    <div
      {...rest}
      className={`px-7 py-5 mt-auto border-t border-neutral-200 bg-neutral-50/80 flex flex-wrap items-center justify-end gap-4 ${className}`}
    >
      {children}
    </div>
  );
}

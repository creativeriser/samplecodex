import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="bg-white border-b border-neutral-200 px-8 py-6">
      <h1 className="text-neutral-900">{title}</h1>
      {subtitle && (
        <p className="text-neutral-600 mt-1">{subtitle}</p>
      )}
    </header>
  );
}

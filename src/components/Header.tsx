import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="bg-white border-b border-neutral-200 shadow-sm">
      <div className="px-8 py-6">
        <div className="flex items-start justify-between gap-6">
          <div className="space-y-1.5">
            <h1 className="text-neutral-900 text-3xl font-semibold tracking-tight leading-snug">{title}</h1>
            {subtitle && (
              <p className="text-neutral-500 text-base leading-relaxed">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

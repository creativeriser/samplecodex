import React from 'react';
import { Card, CardContent, CardHeader } from './Card';
import { Button } from './Button';

interface EmptyStateAction extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actions?: EmptyStateAction[];
  className?: string;
}

export function EmptyState({ title, description, icon, actions = [], className }: EmptyStateProps) {
  const cardClassName = ['text-center border-dashed border-neutral-200 bg-neutral-50/70', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Card className={cardClassName}>
      <CardHeader className="flex flex-col items-center gap-3 pb-2">
        {icon && <div className="text-primary-600">{icon}</div>}
        <h4 className="text-lg font-semibold text-neutral-900 tracking-tight">{title}</h4>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-5 pt-0 pb-10 text-neutral-600" role="status">
        <p className="max-w-xl leading-relaxed text-sm sm:text-base">{description}</p>
        {actions.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            {actions.map((action) => {
              const { label, variant, className: actionClassName, ...buttonProps } = action;
              const buttonClassName = ['min-w-[8rem] justify-center', actionClassName]
                .filter(Boolean)
                .join(' ');

              return (
                <div key={label}>
                  <Button variant={variant ?? 'secondary'} className={buttonClassName} {...buttonProps}>
                    {label}
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

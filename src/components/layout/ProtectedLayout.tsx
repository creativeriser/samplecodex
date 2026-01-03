import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AppLayout } from './AppLayout';

interface ProtectedLayoutProps {
  isLoggedIn: boolean;
  onLogout: () => void;
  onNavigate: (page: string) => void;
  title: string;
  subtitle?: string;
  currentPage: string;
}

export function ProtectedLayout({
  isLoggedIn,
  onLogout,
  onNavigate,
  title,
  subtitle,
  currentPage,
}: ProtectedLayoutProps) {
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <AppLayout
      currentPage={currentPage}
      onNavigate={onNavigate}
      onLogout={onLogout}
      title={title}
      subtitle={subtitle}
    >
      <Outlet />
    </AppLayout>
  );
}

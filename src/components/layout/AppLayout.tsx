import React from 'react';
import { Sidebar, SIDEBAR_WIDTH } from '../Sidebar';
import { Header } from '../Header';

interface AppLayoutProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function AppLayout({
  currentPage,
  onNavigate,
  onLogout,
  title,
  subtitle,
  children,
}: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-neutral-50">
      <Sidebar
        currentPage={currentPage}
        onNavigate={onNavigate}
        onLogout={onLogout}
      />

      <div
        className="flex min-h-screen flex-1 flex-col"
        style={{ marginLeft: SIDEBAR_WIDTH, width: `calc(100% - ${SIDEBAR_WIDTH})` }}
      >
        <Header title={title} subtitle={subtitle} />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}

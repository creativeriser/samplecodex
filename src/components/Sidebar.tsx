import React from 'react';
import { LayoutDashboard, Compass, BookOpen, User, LogOut } from 'lucide-react';
import { matchPath, useLocation } from 'react-router-dom';

interface SidebarProps {
  currentPage?: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  style?: React.CSSProperties;
}

export const SIDEBAR_WIDTH = '16rem';

export function Sidebar({ currentPage, onNavigate, onLogout, style }: SidebarProps) {
  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      matchPaths: ['/dashboard'],
    },
    {
      id: 'recommendations',
      label: 'Recommendations',
      icon: Compass,
      matchPaths: ['/recommendations'],
    },
    {
      id: 'browse',
      label: 'Browse Visits',
      icon: BookOpen,
      matchPaths: ['/browse'],
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      matchPaths: ['/profile'],
    },
  ];

  const location = useLocation();

  const resolvedActiveId = navItems.find((item) =>
    item.matchPaths.some((pattern) => matchPath({ path: pattern, end: false }, location.pathname)),
  )?.id;

  const activeId = resolvedActiveId ?? currentPage;

  return (
    <aside
      className="w-64 bg-white border-r border-neutral-200 h-screen fixed left-0 top-0 flex flex-col"
      style={{ width: SIDEBAR_WIDTH, ...style }}
    >
      {/* Logo Section */}
      <div className="px-6 py-5 border-b border-neutral-200">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary-700 rounded-[var(--radius-md)] flex items-center justify-center shadow-xs">
            <span className="text-white font-semibold text-lg tracking-tight">V</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900 tracking-tight">VisiTrack</p>
            <p className="text-xs text-neutral-500">Industry visit intelligence</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-5 overflow-y-auto">
        <ul className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full group flex items-center gap-3 rounded-[var(--radius-md)] px-3.5 py-2.5 text-sm font-medium text-left transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                    isActive
                      ? 'bg-primary-50 text-primary-700 shadow-xs'
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 hover:translate-x-1'
                  }`}
                >
                  <Icon size={20} className="shrink-0" />
                  <span className="flex-1 truncate">{item.label}</span>
                  {isActive && <span className="inline-flex h-2 w-2 rounded-full bg-primary-500" aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="px-4 py-5 border-t border-neutral-200">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 rounded-[var(--radius-md)] px-3.5 py-2.5 text-sm font-medium text-neutral-600 transition-all duration-200 ease-out hover:bg-red-50 hover:text-red-600 hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

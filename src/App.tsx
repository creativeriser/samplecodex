import React, { useState } from 'react';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { RecommendationsPage } from './pages/RecommendationsPage';
import { VisitDetailsPage } from './pages/VisitDetailsPage';
import { ProfilePage } from './pages/ProfilePage';
import { BrowsePage } from './pages/BrowsePage';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import './styles/globals.css';

type Page = 'login' | 'dashboard' | 'recommendations' | 'browse' | 'profile' | 'visit-details';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [selectedVisitId, setSelectedVisitId] = useState<string>('');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  const handleNavigate = (page: string, visitId?: string) => {
    setCurrentPage(page as Page);
    if (visitId) {
      setSelectedVisitId(visitId);
    }
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Page titles for header
  const pageTitles: Record<Exclude<Page, 'login'>, { title: string; subtitle?: string }> = {
    dashboard: { title: 'Dashboard', subtitle: 'Student Dashboard' },
    recommendations: { title: 'Recommendations', subtitle: 'Personalized for You' },
    browse: { title: 'Browse Visits', subtitle: 'All Available Opportunities' },
    profile: { title: 'Profile', subtitle: 'Your Academic Information' },
    'visit-details': { title: 'Visit Details', subtitle: 'Industry Visit Information' },
  };

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Main application layout with sidebar
  return (
    <div className="flex min-h-screen bg-neutral-50">
      {/* Sidebar */}
      <Sidebar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <Header
          title={pageTitles[currentPage].title}
          subtitle={pageTitles[currentPage].subtitle}
        />

        {/* Page Content */}
        <main className="p-8">
          {currentPage === 'dashboard' && (
            <DashboardPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'recommendations' && (
            <RecommendationsPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'browse' && (
            <BrowsePage onNavigate={handleNavigate} />
          )}
          {currentPage === 'profile' && (
            <ProfilePage onNavigate={handleNavigate} />
          )}
          {currentPage === 'visit-details' && (
            <VisitDetailsPage
              visitId={selectedVisitId}
              onNavigate={handleNavigate}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;

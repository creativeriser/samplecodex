import React, { useCallback, useMemo, useState } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { RecommendationsPage } from './pages/RecommendationsPage';
import { VisitDetailsPage } from './pages/VisitDetailsPage';
import { ProfilePage } from './pages/ProfilePage';
import { BrowsePage } from './pages/BrowsePage';
import { ProtectedLayout } from './components/layout/ProtectedLayout';
import './styles/globals.css';

type LayoutPage = 'dashboard' | 'recommendations' | 'browse' | 'profile' | 'visit-details';

const pageTitles: Record<LayoutPage, { title: string; subtitle?: string }> = {
  dashboard: { title: 'Dashboard', subtitle: 'Student Dashboard' },
  recommendations: { title: 'Recommendations', subtitle: 'Personalized for You' },
  browse: { title: 'Browse Visits', subtitle: 'All Available Opportunities' },
  profile: { title: 'Profile', subtitle: 'Your Academic Information' },
  'visit-details': { title: 'Visit Details', subtitle: 'Industry Visit Information' },
};

const pageToPath = (page: string, visitId?: string) => {
  switch (page) {
    case 'dashboard':
      return '/dashboard';
    case 'recommendations':
      return '/recommendations';
    case 'browse':
      return '/browse';
    case 'profile':
      return '/profile';
    case 'visit-details':
      return visitId ? `/visit-details/${visitId}` : '/visit-details';
    case 'login':
      return '/login';
    default:
      return `/${page}`;
  }
};

const getPageFromPath = (pathname: string): LayoutPage => {
  if (pathname.startsWith('/recommendations')) return 'recommendations';
  if (pathname.startsWith('/browse')) return 'browse';
  if (pathname.startsWith('/profile')) return 'profile';
  if (pathname.startsWith('/visit-details')) return 'visit-details';
  return 'dashboard';
};

function VisitDetailsRoute({
  onNavigate,
}: {
  onNavigate: (page: string, visitId?: string) => void;
}) {
  const { visitId = '' } = useParams<{ visitId: string }>();
  return <VisitDetailsPage visitId={visitId} onNavigate={onNavigate} />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentPage = useMemo(
    () => getPageFromPath(location.pathname),
    [location.pathname],
  );
  const { title, subtitle } = pageTitles[currentPage];

  const handleNavigate = useCallback(
    (page: string, visitId?: string) => {
      const path = pageToPath(page, visitId);
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [navigate],
  );

  const handleLayoutNavigate = useCallback(
    (page: string) => {
      handleNavigate(page);
    },
    [handleNavigate],
  );

  const handleLogin = useCallback(() => {
    setIsLoggedIn(true);
    const state = location.state as { from?: { pathname: string } } | null;
    const destination =
      state?.from?.pathname && state.from.pathname !== '/login'
        ? state.from.pathname
        : '/dashboard';
    navigate(destination, { replace: true });
  }, [location.state, navigate]);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    navigate('/login', { replace: true });
  }, [navigate]);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <LoginPage onLogin={handleLogin} />
          )
        }
      />
      <Route
        path="/"
        element={
          <ProtectedLayout
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
            onNavigate={handleLayoutNavigate}
            title={title}
            subtitle={subtitle}
            currentPage={currentPage}
          />
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage onNavigate={handleNavigate} />} />
        <Route
          path="recommendations"
          element={<RecommendationsPage onNavigate={handleNavigate} />}
        />
        <Route path="browse" element={<BrowsePage onNavigate={handleNavigate} />} />
        <Route path="profile" element={<ProfilePage onNavigate={handleNavigate} />} />
        <Route path="visit-details" element={<VisitDetailsRoute onNavigate={handleNavigate} />} />
        <Route
          path="visit-details/:visitId"
          element={<VisitDetailsRoute onNavigate={handleNavigate} />}
        />
      </Route>
      <Route
        path="*"
        element={<Navigate to={isLoggedIn ? '/dashboard' : '/login'} replace />}
      />
    </Routes>
  );
}

export default App;

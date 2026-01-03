import React, { useEffect, useMemo, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { EmptyState } from '../components/EmptyState';
import { ArrowRight, Compass } from 'lucide-react';
import { mockVisits, type Visit } from '../data/visits';

interface BrowsePageProps {
  onNavigate: (page: string, visitId?: string) => void;
}

export function BrowsePage({ onNavigate }: BrowsePageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [visits, setVisits] = useState<Visit[]>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisits(mockVisits);
      setIsLoading(false);
    }, 200);

    return () => window.clearTimeout(timer);
  }, []);

  const totalVisits = visits.length;
  const hasVisits = !isLoading && totalVisits > 0;

  const skeletonCards = useMemo<number[]>(
    () => Array.from({ length: 6 }, (_, index) => index),
    [],
  );

  return (
    <div className="space-y-8">
      {/* Page Description */}
      <Card>
        <CardHeader>
          <h3 className="text-neutral-900 text-xl font-semibold tracking-tight">Browse All Visits</h3>
        </CardHeader>
        <CardContent className="pt-3 text-neutral-600">
          <p className="leading-relaxed line-clamp-3">
            Explore our complete catalog of industry visit opportunities across all disciplines and industries.
          </p>
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-neutral-600">
        <p aria-live="polite">
          {isLoading ? (
            'Loading available visits…'
          ) : (
            <>
              Showing <span className="text-neutral-900">{totalVisits}</span> industry visits
            </>
          )}
        </p>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr" aria-busy="true">
          {skeletonCards.map((key) => (
            <Card key={key} className="border-neutral-100 h-full">
              <CardHeader className="pt-6 pb-2 space-y-2">
                <div className="h-5 w-24 bg-neutral-200 rounded-md" aria-hidden="true" />
                <div className="h-4 w-32 bg-neutral-100 rounded-md" aria-hidden="true" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-4 w-3/4 bg-neutral-100 rounded-md" aria-hidden="true" />
                <div className="h-4 w-1/2 bg-neutral-100 rounded-md" aria-hidden="true" />
                <div className="h-20 w-full bg-neutral-50 rounded-md" aria-hidden="true" />
              </CardContent>
              <CardFooter className="justify-between sm:justify-end">
                <div className="h-10 w-32 bg-neutral-100 rounded-md" aria-hidden="true" />
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Visits List */}
      {!isLoading && hasVisits && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {visits.map((visit) => (
            <Card key={visit.id} className="h-full">
              <CardHeader className="pt-6 pb-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <Badge variant="primary">{visit.discipline}</Badge>
                  <Badge variant={visit.matchScore === 'High' ? 'success' : 'accent'}>
                    {visit.matchScore} Match
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-5 pt-2">
                <div className="space-y-1.5">
                  <h4 className="text-neutral-900 text-lg font-semibold tracking-tight leading-snug">
                    {visit.organizationName}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {visit.industryType} • {visit.location}
                  </p>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed tracking-[0.01em] line-clamp-3">
                  {visit.description}
                </p>
              </CardContent>
              <CardFooter className="gap-3 sm:gap-4 sm:justify-end">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate('visit-details', visit.id)}
                  className="w-full sm:w-auto min-w-[10rem] justify-center"
                >
                  View Details
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !hasVisits && (
        <EmptyState
          icon={<Compass size={36} strokeWidth={1.75} />}
          title="No visits available yet"
          description="We’re still populating industry visits for your programme. Until new options arrive, explore tailored recommendations or head back to your dashboard for other planning tasks."
          actions={[
            {
              label: 'Go to Recommendations',
              variant: 'primary',
              onClick: () => onNavigate('recommendations'),
            },
            {
              label: 'Return to Dashboard',
              variant: 'secondary',
              onClick: () => onNavigate('dashboard'),
            },
          ]}
        />
      )}
    </div>
  );
}

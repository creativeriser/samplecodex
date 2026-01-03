import React, { useEffect, useMemo, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { EmptyState } from '../components/EmptyState';
import { ArrowRight, Filter } from 'lucide-react';
import { mockVisits } from '../data/visits';

interface RecommendationsPageProps {
  onNavigate: (page: string, visitId?: string) => void;
}

export function RecommendationsPage({ onNavigate }: RecommendationsPageProps) {
  const [filterDiscipline, setFilterDiscipline] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [visits, setVisits] = useState<typeof mockVisits>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisits(mockVisits);
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const disciplines = useMemo(
    () => ['all', ...Array.from(new Set(mockVisits.map((v) => v.discipline)))],
    [],
  );

  const filteredVisits = useMemo(() => {
    if (filterDiscipline === 'all') {
      return visits;
    }
    return visits.filter((v) => v.discipline === filterDiscipline);
  }, [filterDiscipline, visits]);

  const hasResults = !isLoading && filteredVisits.length > 0;
  const hasAnyVisits = !isLoading && visits.length > 0;
  const skeletonCards = useMemo<number[]>(() => Array.from({ length: 6 }, (_, index) => index), []);

  return (
    <div className="space-y-8">
      {/* Page Description */}
      <Card>
        <CardHeader>
          <h3 className="text-neutral-900 text-xl font-semibold tracking-tight">Personalized Recommendations</h3>
        </CardHeader>
        <CardContent className="pt-3 text-neutral-600">
          <p className="leading-relaxed line-clamp-3">
            Industry visits curated for your academic discipline with high learning value and relevance to your program.
          </p>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardContent className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-neutral-700">
            <Filter size={20} />
            <span>Filter by Discipline:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {disciplines.map((discipline) => (
              <button
                key={discipline}
                type="button"
                onClick={() => setFilterDiscipline(discipline)}
                aria-pressed={filterDiscipline === discipline}
                className={`px-3 py-1.5 rounded-[var(--radius-sm)] text-sm transition-colors duration-200 ${
                  filterDiscipline === discipline
                    ? 'bg-primary-700 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {discipline === 'all' ? 'All Disciplines' : discipline}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-neutral-600">
        <p aria-live="polite">
          {isLoading ? (
            'Loading tailored recommendations…'
          ) : (
            <>
              Showing <span className="text-neutral-900">{filteredVisits.length}</span> recommendations
            </>
          )}
        </p>
      </div>

      {/* Recommendations Grid */}
      {isLoading && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr" aria-busy="true">
          {skeletonCards.map((key) => (
            <Card key={key} className="border-neutral-100 h-full">
              <CardHeader className="pb-2 space-y-2">
                <div className="h-5 w-20 bg-neutral-200 rounded-md" aria-hidden="true" />
                <div className="h-4 w-16 bg-neutral-100 rounded-md" aria-hidden="true" />
              </CardHeader>
              <CardContent className="space-y-4 pt-2">
                <div className="h-4 w-3/4 bg-neutral-100 rounded-md" aria-hidden="true" />
                <div className="h-4 w-2/3 bg-neutral-100 rounded-md" aria-hidden="true" />
                <div className="h-20 w-full bg-neutral-50 rounded-md" aria-hidden="true" />
              </CardContent>
              <CardFooter>
                <div className="h-10 w-28 bg-neutral-100 rounded-md" aria-hidden="true" />
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {hasResults && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {filteredVisits.map((visit) => (
            <Card key={visit.id} className="h-full">
              <CardHeader className="pb-2 flex items-start justify-between">
                <Badge variant="primary">{visit.discipline}</Badge>
                <Badge variant={visit.matchScore === 'High' ? 'success' : 'accent'}>
                  {visit.matchScore} Match
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <h4 className="text-neutral-900 text-lg font-semibold tracking-tight leading-snug">
                    {visit.organizationName}
                  </h4>
                  <div className="text-sm text-neutral-600 leading-relaxed space-y-0.5">
                    <p>{visit.industryType}</p>
                    <p>{visit.location}</p>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed tracking-[0.01em] line-clamp-3">
                  {visit.description}
                </p>
              </CardContent>
              <CardFooter className="gap-4">
                <Button
                  variant="primary"
                  size="sm"
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

      {/* No Results Message */}
      {!isLoading && !hasResults && hasAnyVisits && (
        <EmptyState
          title="No recommendations match"
          description="No recommendations fit that selection. Use the discipline filter above to try another match or clear filters to review the full list."
          actions={[
            {
              label: 'Clear filters',
              variant: 'secondary',
              onClick: () => setFilterDiscipline('all'),
            },
          ]}
        />
      )}

      {!isLoading && !hasAnyVisits && (
        <EmptyState
          title="Recommendations are on their way"
          description="We’re still curating tailored visits for your programme. Check back soon, or browse the full catalogue to keep planning in the meantime."
          actions={[
            {
              label: 'Browse all visits',
              variant: 'primary',
              onClick: () => onNavigate('browse'),
            },
          ]}
        />
      )}
    </div>
  );
}

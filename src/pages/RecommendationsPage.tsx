import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { ArrowRight, Filter } from 'lucide-react';
import { mockVisits } from '../data/visits';

interface RecommendationsPageProps {
  onNavigate: (page: string, visitId?: string) => void;
}

export function RecommendationsPage({ onNavigate }: RecommendationsPageProps) {
  const [filterDiscipline, setFilterDiscipline] = useState<string>('all');

  const disciplines = ['all', ...Array.from(new Set(mockVisits.map(v => v.discipline)))];
  
  const filteredVisits = filterDiscipline === 'all'
    ? mockVisits
    : mockVisits.filter(v => v.discipline === filterDiscipline);

  return (
    <div className="space-y-6">
      {/* Page Description */}
      <Card className="p-6">
        <h3 className="text-neutral-900 mb-2">Personalized Recommendations</h3>
        <p className="text-neutral-600">
          Industry visits curated for your academic discipline with high learning value and relevance to your program.
        </p>
      </Card>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-neutral-700">
            <Filter size={20} />
            <span>Filter by Discipline:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {disciplines.map((discipline) => (
              <button
                key={discipline}
                onClick={() => setFilterDiscipline(discipline)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors duration-200 ${
                  filterDiscipline === discipline
                    ? 'bg-primary-700 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {discipline === 'all' ? 'All Disciplines' : discipline}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-neutral-600">
          Showing <span className="text-neutral-900">{filteredVisits.length}</span> recommendations
        </p>
      </div>

      {/* Recommendations Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVisits.map((visit) => (
          <Card key={visit.id} hover className="p-6 flex flex-col">
            {/* Header with Badges */}
            <div className="flex items-start justify-between mb-4">
              <Badge variant="primary">{visit.discipline}</Badge>
              <Badge variant={visit.matchScore === 'High' ? 'success' : 'accent'}>
                {visit.matchScore} Match
              </Badge>
            </div>

            {/* Organization Name */}
            <h4 className="text-neutral-900 mb-2">
              {visit.organizationName}
            </h4>

            {/* Industry Type & Location */}
            <div className="flex flex-col gap-1 mb-3 text-sm text-neutral-600">
              <p>{visit.industryType}</p>
              <p>{visit.location}</p>
            </div>

            {/* Description */}
            <p className="text-neutral-600 text-sm mb-4 flex-1 line-clamp-4">
              {visit.description}
            </p>

            {/* Action Button */}
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onNavigate('visit-details', visit.id)}
              className="w-full justify-center"
            >
              View Details
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Card>
        ))}
      </div>

      {/* No Results Message */}
      {filteredVisits.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-neutral-600">
            No recommendations found for the selected discipline.
          </p>
          <Button
            variant="secondary"
            onClick={() => setFilterDiscipline('all')}
            className="mt-4"
          >
            Clear Filters
          </Button>
        </Card>
      )}
    </div>
  );
}

import React from 'react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';
import { mockVisits } from '../data/visits';

interface BrowsePageProps {
  onNavigate: (page: string, visitId?: string) => void;
}

export function BrowsePage({ onNavigate }: BrowsePageProps) {
  return (
    <div className="space-y-6">
      {/* Page Description */}
      <Card className="p-6">
        <h3 className="text-neutral-900 mb-2">Browse All Visits</h3>
        <p className="text-neutral-600">
          Explore our complete catalog of industry visit opportunities across all disciplines and industries.
        </p>
      </Card>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-neutral-600">
          Showing <span className="text-neutral-900">{mockVisits.length}</span> industry visits
        </p>
      </div>

      {/* Visits List */}
      <div className="space-y-4">
        {mockVisits.map((visit) => (
          <Card key={visit.id} hover className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Section */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="primary">{visit.discipline}</Badge>
                  <Badge variant={visit.matchScore === 'High' ? 'success' : 'accent'}>
                    {visit.matchScore} Match
                  </Badge>
                </div>
                
                <h4 className="text-neutral-900 mb-2">
                  {visit.organizationName}
                </h4>
                
                <div className="flex flex-col gap-1 mb-3 text-sm text-neutral-600">
                  <p>{visit.industryType} • {visit.location}</p>
                </div>
                
                <p className="text-neutral-600">
                  {visit.description}
                </p>
              </div>

              {/* Right Section - Action */}
              <div className="flex items-center">
                <Button
                  variant="secondary"
                  onClick={() => onNavigate('visit-details', visit.id)}
                >
                  View Details
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

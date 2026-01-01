import React from 'react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { ArrowLeft, MapPin, Building2, TrendingUp, CheckCircle2 } from 'lucide-react';
import { mockVisits, Visit } from '../data/visits';

interface VisitDetailsPageProps {
  visitId: string;
  onNavigate: (page: string) => void;
}

export function VisitDetailsPage({ visitId, onNavigate }: VisitDetailsPageProps) {
  const visit = mockVisits.find(v => v.id === visitId);

  if (!visit) {
    return (
      <Card className="p-12 text-center">
        <p className="text-neutral-600 mb-4">Visit not found</p>
        <Button onClick={() => onNavigate('recommendations')}>
          Back to Recommendations
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onNavigate('recommendations')}
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Recommendations
      </Button>

      {/* Header Section */}
      <Card className="p-8">
        <div className="flex flex-wrap gap-3 mb-4">
          <Badge variant="primary">{visit.discipline}</Badge>
          <Badge variant={visit.matchScore === 'High' ? 'success' : 'accent'}>
            {visit.matchScore} Match
          </Badge>
        </div>
        
        <h1 className="text-neutral-900 mb-3">
          {visit.organizationName}
        </h1>
        
        <p className="text-lg text-neutral-600 mb-6">
          {visit.description}
        </p>

        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2 text-neutral-600">
            <Building2 size={18} className="text-neutral-400" />
            <span>{visit.industryType}</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-600">
            <MapPin size={18} className="text-neutral-400" />
            <span>{visit.location}</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-600">
            <TrendingUp size={18} className="text-neutral-400" />
            <span>{visit.matchScore} Recommendation Strength</span>
          </div>
        </div>
      </Card>

      {/* Two-Column Layout */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content - Left Column (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          {/* About Section */}
          <Card className="p-6">
            <h3 className="text-neutral-900 mb-3">About the Organization</h3>
            <p className="text-neutral-600 leading-relaxed">
              {visit.about}
            </p>
          </Card>

          {/* Learning Outcomes */}
          <Card className="p-6">
            <h3 className="text-neutral-900 mb-4">Learning Outcomes</h3>
            <p className="text-neutral-600 mb-4">
              Students participating in this visit will gain the following competencies and insights:
            </p>
            <ul className="space-y-3">
              {visit.learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Sidebar - Right Column (1/3 width) */}
        <div className="space-y-6">
          {/* Meta Information */}
          <Card className="p-6">
            <h4 className="text-neutral-900 mb-4">Visit Information</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-neutral-500 mb-1">Discipline</p>
                <Badge variant="primary">{visit.discipline}</Badge>
              </div>
              
              <div>
                <p className="text-sm text-neutral-500 mb-1">Industry Type</p>
                <p className="text-neutral-900">{visit.industryType}</p>
              </div>
              
              <div>
                <p className="text-sm text-neutral-500 mb-1">Location</p>
                <p className="text-neutral-900">{visit.location}</p>
              </div>
              
              <div>
                <p className="text-sm text-neutral-500 mb-1">Match Score</p>
                <Badge variant={visit.matchScore === 'High' ? 'success' : 'accent'}>
                  {visit.matchScore}
                </Badge>
              </div>
            </div>
          </Card>

          {/* Action Card */}
          <Card className="p-6 bg-primary-50 border-primary-200">
            <h4 className="text-neutral-900 mb-2">Interested in this visit?</h4>
            <p className="text-sm text-neutral-600 mb-4">
              Express your interest and your faculty coordinator will be notified.
            </p>
            <Button className="w-full" size="lg">
              Express Interest
            </Button>
          </Card>

          {/* Additional Info */}
          <Card className="p-6">
            <h5 className="text-neutral-900 mb-2">Academic Value</h5>
            <p className="text-sm text-neutral-600">
              This visit has been carefully selected based on its alignment with your program's curriculum and learning objectives.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

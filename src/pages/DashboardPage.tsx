import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { ArrowRight, TrendingUp, Target, BookOpen } from 'lucide-react';
import { mockVisits } from '../data/visits';

interface DashboardPageProps {
  onNavigate: (page: string, visitId?: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const topRecommendations = mockVisits.slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <Card className="p-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="accent">Student Dashboard</Badge>
          </div>
          <h2 className="text-neutral-900 mb-3">Welcome to VisiTrack</h2>
          <p className="text-lg text-neutral-600 mb-4">
            Your personalized platform for discovering and exploring industry visit opportunities aligned with your academic discipline and learning goals.
          </p>
        </div>
      </Card>

      {/* Platform Purpose */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <Target className="text-primary-700" size={24} />
          </div>
          <h4 className="text-neutral-900 mb-2">Smart Recommendations</h4>
          <p className="text-neutral-600">
            Get personalized industry visit suggestions based on your academic discipline and learning objectives.
          </p>
        </Card>

        <Card className="p-6">
          <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
            <BookOpen className="text-accent-700" size={24} />
          </div>
          <h4 className="text-neutral-900 mb-2">Academic Alignment</h4>
          <p className="text-neutral-600">
            Every visit is curated with clear learning outcomes and academic justification for your program.
          </p>
        </Card>

        <Card className="p-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="text-green-700" size={24} />
          </div>
          <h4 className="text-neutral-900 mb-2">Industry Insights</h4>
          <p className="text-neutral-600">
            Connect your classroom learning with real-world industry practices and professional environments.
          </p>
        </Card>
      </div>

      {/* Recommended Visits Preview */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-neutral-900">Your Top Recommendations</h3>
            <p className="text-neutral-600 mt-1">
              Curated industry visits matching your profile
            </p>
          </div>
          <Button
            variant="secondary"
            onClick={() => onNavigate('recommendations')}
          >
            View All
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {topRecommendations.map((visit) => (
            <Card key={visit.id} hover className="p-6">
              <div className="flex items-start justify-between mb-3">
                <Badge variant="primary">{visit.discipline}</Badge>
                <Badge variant={visit.matchScore === 'High' ? 'success' : 'accent'}>
                  {visit.matchScore} Match
                </Badge>
              </div>
              
              <h4 className="text-neutral-900 mb-2">
                {visit.organizationName}
              </h4>
              
              <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                {visit.description}
              </p>
              
              <Button
                variant="ghost"
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
      </div>

      {/* Call to Action */}
      <Card className="p-8 bg-gradient-to-br from-primary-50 to-accent-50 border-primary-200">
        <div className="max-w-2xl">
          <h3 className="text-neutral-900 mb-2">
            Ready to explore more opportunities?
          </h3>
          <p className="text-neutral-600 mb-4">
            Browse our complete catalog of industry visits or get personalized recommendations based on your academic interests.
          </p>
          <div className="flex gap-3">
            <Button onClick={() => onNavigate('recommendations')}>
              View Recommendations
            </Button>
            <Button variant="secondary" onClick={() => onNavigate('browse')}>
              Browse All Visits
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

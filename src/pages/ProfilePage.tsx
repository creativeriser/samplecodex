import React from 'react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { User, Mail, GraduationCap, Building2 } from 'lucide-react';

interface ProfilePageProps {
  onNavigate: (page: string) => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* Profile Header */}
      <Card className="p-8">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center">
            <User size={40} className="text-primary-700" />
          </div>
          <div className="flex-1">
            <h2 className="text-neutral-900 mb-1">Student Profile</h2>
            <p className="text-neutral-600 mb-3">Manage your academic information and preferences</p>
            <div className="flex gap-2">
              <Badge variant="primary">Active Student</Badge>
              <Badge variant="accent">Verified</Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Personal Information */}
      <Card className="p-6">
        <h3 className="text-neutral-900 mb-4">Personal Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            defaultValue="John Doe"
            disabled
          />
          <Input
            label="Student ID"
            defaultValue="CS2021-0123"
            disabled
          />
          <Input
            label="Email Address"
            type="email"
            defaultValue="john.doe@university.edu"
            disabled
          />
          <Input
            label="Phone Number"
            defaultValue="+91 98765 43210"
          />
        </div>
      </Card>

      {/* Academic Information */}
      <Card className="p-6">
        <h3 className="text-neutral-900 mb-4">Academic Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1.5 text-neutral-700">
              Program
            </label>
            <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 rounded-lg border border-neutral-200">
              <GraduationCap size={18} className="text-neutral-500" />
              <span className="text-neutral-900">B.Tech Computer Science</span>
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1.5 text-neutral-700">
              Current Year
            </label>
            <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 rounded-lg border border-neutral-200">
              <span className="text-neutral-900">3rd Year</span>
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1.5 text-neutral-700">
              Department
            </label>
            <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 rounded-lg border border-neutral-200">
              <Building2 size={18} className="text-neutral-500" />
              <span className="text-neutral-900">Computer Science & Engineering</span>
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1.5 text-neutral-700">
              Roll Number
            </label>
            <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 rounded-lg border border-neutral-200">
              <span className="text-neutral-900">2021CS0123</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Interests */}
      <Card className="p-6">
        <h3 className="text-neutral-900 mb-3">Academic Interests</h3>
        <p className="text-sm text-neutral-600 mb-4">
          Your interests help us recommend relevant industry visits
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary">Software Development</Badge>
          <Badge variant="primary">Machine Learning</Badge>
          <Badge variant="primary">Cloud Computing</Badge>
          <Badge variant="neutral">Data Science</Badge>
          <Badge variant="neutral">Cybersecurity</Badge>
        </div>
        <Button variant="secondary" size="sm" className="mt-4">
          Edit Interests
        </Button>
      </Card>

      {/* Visit History */}
      <Card className="p-6">
        <h3 className="text-neutral-900 mb-3">Visit History</h3>
        <p className="text-neutral-600 mb-4">Your past and upcoming industry visits</p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
            <div>
              <p className="text-neutral-900">TechCorp Innovation Labs</p>
              <p className="text-sm text-neutral-600">Completed - October 2024</p>
            </div>
            <Badge variant="success">Completed</Badge>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-accent-50 border border-accent-200 rounded-lg">
            <div>
              <p className="text-neutral-900">DataViz Analytics</p>
              <p className="text-sm text-neutral-600">Scheduled - January 2025</p>
            </div>
            <Badge variant="accent">Upcoming</Badge>
          </div>
        </div>
      </Card>

      {/* Actions */}
      <div className="flex gap-3">
        <Button>Save Changes</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    </div>
  );
}

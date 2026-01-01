import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-700 rounded-xl mb-4 card-shadow-md">
            <span className="text-white text-2xl">V</span>
          </div>
          <h1 className="text-neutral-900 mb-2">VisiTrack</h1>
          <p className="text-neutral-600">Industry Visit Discovery & Recommendation Platform</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-xl border border-neutral-200 card-shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-neutral-900 mb-1">Welcome Back</h2>
            <p className="text-neutral-600">Sign in to access your academic dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              label="University Email"
              placeholder="student@university.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-neutral-600">
                <input type="checkbox" className="rounded border-neutral-300" />
                Remember me
              </label>
              <button type="button" className="text-primary-700 hover:text-primary-800">
                Forgot password?
              </button>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Sign In
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-neutral-200 text-center">
            <p className="text-sm text-neutral-600">
              New to VisiTrack?{' '}
              <button className="text-primary-700 hover:text-primary-800">
                Request Access
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-neutral-500">
          <p>For students, faculty, and academic administrators</p>
          <p className="mt-1">© 2025 VisiTrack. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

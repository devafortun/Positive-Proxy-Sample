import React from 'react';
import { ArrowRight, Users, FileText, Vote } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Democracy Reimagined
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A new approach to democratic representation through appointed proxies and
          open-source legislation.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <FeatureCard
          icon={<Users className="h-8 w-8 text-emerald-600" />}
          title="Proxy Voting"
          description="Appoint trusted representatives to vote on your behalf for matters outside your expertise."
        />
        <FeatureCard
          icon={<FileText className="h-8 w-8 text-emerald-600" />}
          title="Open Legislation"
          description="Create, suggest, and fork proposals GitHub-style. Anyone can contribute to better governance."
        />
        <FeatureCard
          icon={<Vote className="h-8 w-8 text-emerald-600" />}
          title="Dynamic Thresholds"
          description="Laws and policies remain active based on continuous community support and engagement."
        />
      </div>

      <div className="text-center">
        <Link
          to="/issues"
          className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <span>Explore Active Issues</span>
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="space-y-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
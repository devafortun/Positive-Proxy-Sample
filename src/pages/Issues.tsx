import React from 'react';
import { Plus } from 'lucide-react';

export function Issues() {
  const issues = [
    {
      id: 1,
      title: "Portland's Own Tall Ship Initiative",
      description: "A proposal to build Portland's first community-owned tall ship as a symbol of maritime heritage and community pride.",
      category: "Aspirational",
      votes: 1250,
      status: "Active",
    },
    {
      id: 2,
      title: "Sustainable Housing Development",
      description: "Addressing housing affordability through eco-friendly community development projects.",
      category: "Infrastructure",
      votes: 3200,
      status: "Active",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Community Issues</h1>
        <button className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
          <Plus className="h-5 w-5" />
          <span>Declare New Issue</span>
        </button>
      </div>

      <div className="grid gap-6">
        {issues.map((issue) => (
          <div key={issue.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{issue.title}</h3>
                <p className="text-gray-600">{issue.description}</p>
                <div className="flex space-x-4">
                  <span className="text-sm text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                    {issue.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {issue.votes} votes
                  </span>
                </div>
              </div>
              <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                {issue.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { Shield, UserPlus } from 'lucide-react';

export function Proxies() {
  const proxies = [
    {
      id: 1,
      name: "Dr. Emily Watson",
      expertise: ["Environmental Policy", "Urban Planning"],
      activeVotes: 1850,
      trustScore: 98,
      status: "Active"
    },
    {
      id: 2,
      name: "Prof. James Martinez",
      expertise: ["Public Transportation", "Infrastructure"],
      activeVotes: 2200,
      trustScore: 95,
      status: "Active"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Proxy Network</h1>
        <button className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
          <UserPlus className="h-5 w-5" />
          <span>Assign Proxy</span>
        </button>
      </div>

      <div className="grid gap-6">
        {proxies.map((proxy) => (
          <div key={proxy.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <h3 className="text-xl font-semibold text-gray-900">{proxy.name}</h3>
                  <Shield className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {proxy.expertise.map((skill) => (
                    <span key={skill} className="text-sm text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-6 text-sm text-gray-500">
                  <span>{proxy.activeVotes} active votes</span>
                  <span>Trust Score: {proxy.trustScore}%</span>
                </div>
              </div>
              <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full h-fit">
                {proxy.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
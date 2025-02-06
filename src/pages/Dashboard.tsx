import React from 'react';
import { BarChart3, PieChart, Activity, Vote } from 'lucide-react';

export function Dashboard() {
  const stats = [
    {
      label: "Active Votes",
      value: "3,521",
      icon: <Vote className="h-6 w-6 text-emerald-600" />,
      change: "+12%"
    },
    {
      label: "Participation Rate",
      value: "78%",
      icon: <Activity className="h-6 w-6 text-emerald-600" />,
      change: "+5%"
    },
    {
      label: "Active Proposals",
      value: "42",
      icon: <BarChart3 className="h-6 w-6 text-emerald-600" />,
      change: "+3"
    },
    {
      label: "Proxy Network",
      value: "156",
      icon: <PieChart className="h-6 w-6 text-emerald-600" />,
      change: "+8"
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-start">
              {stat.icon}
              <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <span className="text-gray-600">Voted on Urban Forest Initiative</span>
              <span className="text-sm text-gray-500">2h ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <span className="text-gray-600">Proxy assigned for Transportation</span>
              <span className="text-sm text-gray-500">5h ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600">Commented on Housing Proposal</span>
              <span className="text-sm text-gray-500">1d ago</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Proxies</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <span className="text-gray-600">Dr. Emily Watson</span>
              <span className="text-sm text-emerald-600">Environmental Policy</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <span className="text-gray-600">Prof. James Martinez</span>
              <span className="text-sm text-emerald-600">Infrastructure</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600">Dr. Sarah Chen</span>
              <span className="text-sm text-emerald-600">Urban Planning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { GitFork, MessageSquare, ThumbsUp, Plus } from 'lucide-react';

export function Proposals() {
  const proposals = [
    {
      id: 1,
      title: "Community Garden Network Expansion",
      description: "Establish a network of community gardens in every neighborhood to promote food security and community engagement.",
      author: "Sarah Chen",
      votes: 2800,
      forks: 3,
      comments: 24,
      status: "Active",
      threshold: 85
    },
    {
      id: 2,
      title: "Urban Forest Initiative",
      description: "Plant 10,000 native trees across Portland to enhance urban canopy and combat climate change.",
      author: "Michael Rodriguez",
      votes: 3500,
      forks: 5,
      comments: 42,
      status: "Active",
      threshold: 92
    },
    {
      id: 2,
      title: "Urban Forest Initiative",
      description: "Plant 10,000 native trees across Portland to enhance urban canopy and combat climate change.",
      author: "Michael Rodriguez",
      votes: 3500,
      forks: 5,
      comments: 42,
      status: "Active",
      threshold: 92
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Open Proposals</h1>
        <button className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
          <Plus className="h-5 w-5" />
          <span>Create Proposal</span>
        </button>
      </div>

      <div className="grid gap-6">
        {proposals.map((proposal) => (
          <div key={proposal.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-900">{proposal.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {proposal.status}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600">{proposal.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{proposal.votes} votes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GitFork className="h-4 w-4" />
                    <span>{proposal.forks} forks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>{proposal.comments} comments</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Support Threshold:</span>
                  <span className="font-medium text-emerald-600">{proposal.threshold}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
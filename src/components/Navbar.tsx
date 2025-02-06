import React from 'react';
import { Link } from 'react-router-dom';
import { Vote, FileText, Users, LayoutDashboard, Leaf } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-800">Positive Proxy</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/issues" icon={<FileText className="h-5 w-5" />} text="Issues" />
            <NavLink to="/proposals" icon={<Vote className="h-5 w-5" />} text="Proposals" />
            <NavLink to="/proxies" icon={<Users className="h-5 w-5" />} text="Proxies" />
            <NavLink to="/dashboard" icon={<LayoutDashboard className="h-5 w-5" />} text="Dashboard" />
          </div>

          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}
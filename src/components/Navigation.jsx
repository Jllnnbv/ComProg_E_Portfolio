import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, BookOpen, Layers, Award, MessageSquare, FileText } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { path: '/', label: 'Welcome', icon: <Home size={20} /> },
    { path: '/profile', label: 'About Me', icon: <User size={20} /> },
    { path: '/overview', label: 'Course Overview', icon: <BookOpen size={20} /> },
    { path: '/portfolio', label: 'Laboratory & Activities', icon: <Layers size={20} /> },
    { path: '/reflections', label: 'Narrative Reflections', icon: <MessageSquare size={20} /> },
    { path: '/hobbies-trainings', label: 'Hobbies & Trainings', icon: <Award size={20} /> },
    { path: '/resume', label: 'Resume', icon: <FileText size={20} /> },
  ];

  return (
    <nav className="sticky top-4 md:top-6 z-50 mb-8 md:mb-10 flex justify-center w-full px-2 md:px-4 pointer-events-none">
      <div className="clay-nav-pill py-2.5 md:py-3 px-4 md:px-7 flex items-center justify-center overflow-visible pointer-events-auto">
        <ul className="flex items-center gap-2 sm:gap-4 md:gap-5">
          {navItems.map((item) => (
            <li key={item.path} className="relative group">
              <NavLink 
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'clay-pill-active scale-110' 
                      : 'text-clay-muted hover:text-clay-charcoal hover:clay-tile hover:scale-105'
                  }`
                }
              >
                <div className="scale-90 md:scale-100 flex items-center justify-center">
                  {item.icon}
                </div>
              </NavLink>
              
              {/* Tactile 3D Clay Tooltip */}
              <div className="absolute -bottom-11 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-50">
                <div className="clay-badge-sage text-clay-charcoal text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import { Link } from 'react-router-dom';
import { List, Home, User, BookOpen, Layers, Award, MessageSquare, FileText } from 'lucide-react';

const TableOfContents = () => {
  const sections = [
    { id: '/', label: 'Welcome Page', icon: <Home size={20} /> },
    { id: '/profile', label: 'About Me & Profile', icon: <User size={20} /> },
    { id: '/overview', label: 'Course Overview', icon: <BookOpen size={20} /> },
    { id: '/portfolio', label: 'Laboratory & Activities', icon: <Layers size={20} /> },
    { id: '/reflections', label: 'Narrative Reflections', icon: <MessageSquare size={20} /> },
    { id: '/hobbies-trainings', label: 'Hobbies & Trainings', icon: <Award size={20} /> },
    { id: '/resume', label: 'Resume', icon: <FileText size={20} /> },
  ];

  return (
    <section id="toc" className="space-y-6 mt-12 pb-4">
      <div className="clay-card p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl clay-badge-sage flex items-center justify-center text-clay-charcoal">
            <List size={22} />
          </div>
          <h2 className="font-serif text-2xl font-bold text-clay-charcoal">Table of Contents & Legend</h2>
        </div>
        
        <div className="clay-inset p-4 mb-6">
          <p className="text-xs sm:text-sm text-clay-charcoal font-medium">
            Use the icons in the floating navigation bar above to explore the portfolio. Click on any section below to navigate directly to it.
          </p>
        </div>

        <nav>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((section, index) => (
              <li key={section.id} className="group">
                <Link 
                  to={section.id}
                  className="clay-tile flex items-center gap-4 p-3.5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className={`flex items-center justify-center w-11 h-11 rounded-2xl transition-all duration-300 shrink-0 ${
                    index % 2 === 0 ? 'clay-badge-sage' : 'clay-badge-blue'
                  } group-hover:scale-105`}>
                    {section.icon}
                  </div>
                  <div>
                    <div className="text-[11px] text-clay-muted font-bold mb-0.5">0{index + 1}</div>
                    <div className="text-xs sm:text-sm font-bold text-clay-charcoal uppercase tracking-wider">
                      {section.label}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default TableOfContents;

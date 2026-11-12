import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';       
import StudentProfile from './components/StudentProfile';
import CourseOverview from './components/CourseOverview';
import Portfolio from './components/Portfolio';
import Reflections from './components/Reflections';
import HobbiesAndTrainings from './components/HobbiesAndTrainings';
import Resume from './components/Resume';
import Navigation from './components/Navigation';
import TableOfContents from './components/TableOfContents';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const Divider = () => (
    <div className="flex items-center gap-4 my-12">
      <div className="h-1 rounded-full clay-inset flex-1"></div>
      <div className="w-9 h-9 rounded-full clay-badge-sage flex items-center justify-center text-clay-charcoal text-base shadow-sm">
        ❦
      </div>
      <div className="h-1 rounded-full clay-inset flex-1"></div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-clay-cream text-clay-charcoal font-sans selection:bg-clay-sage selection:text-clay-charcoal overflow-x-hidden">
      
      {/* =========================================
          SCULPTED 3D CLAY CURVED WAVE BACKGROUND
         ========================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#F4EFEA]">
        {/* Top-Left & Upper Sculpted 3D Clay Waves */}
        <svg
          className="absolute -top-12 -left-16 w-[130%] h-[55vh] min-w-[900px]"
          viewBox="0 0 1440 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="clayWaveShadowTop" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="6" dy="14" stdDeviation="16" floodColor="#C7BEB4" floodOpacity="0.55" />
              <feDropShadow dx="-4" dy="-6" stdDeviation="10" floodColor="#FFFFFF" floodOpacity="0.9" />
            </filter>
            <linearGradient id="sageClayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CBE0DA" />
              <stop offset="55%" stopColor="#B5C9C3" />
              <stop offset="100%" stopColor="#9FB8B1" />
            </linearGradient>
            <linearGradient id="blueClayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BCD7EB" />
              <stop offset="60%" stopColor="#A3C4DC" />
              <stop offset="100%" stopColor="#8FB4CF" />
            </linearGradient>
            <linearGradient id="creamClayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAF7F3" />
              <stop offset="100%" stopColor="#EAE2D8" />
            </linearGradient>
          </defs>

          {/* Back Baby Blue 3D Wave */}
          <path
            d="M-80 0 H1520 V290 C1260 390 1010 170 720 260 C430 350 180 420 -80 280 Z"
            fill="url(#blueClayGrad)"
            opacity="0.72"
            filter="url(#clayWaveShadowTop)"
          />
          {/* Middle Pastel Sage 3D Wave */}
          <path
            d="M-80 0 H1520 V210 C1220 310 920 110 610 215 C320 310 110 330 -80 210 Z"
            fill="url(#sageClayGrad)"
            opacity="0.82"
            filter="url(#clayWaveShadowTop)"
          />
          {/* Front Cream 3D Wave Ridge */}
          <path
            d="M-80 0 H1520 V125 C1180 215 880 65 540 145 C260 210 70 225 -80 130 Z"
            fill="url(#creamClayGrad)"
            opacity="0.92"
            filter="url(#clayWaveShadowTop)"
          />
        </svg>

        {/* Bottom-Right & Lower Sculpted 3D Clay Waves */}
        <svg
          className="absolute -bottom-16 -right-16 w-[130%] h-[55vh] min-w-[900px]"
          viewBox="0 0 1440 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="clayWaveShadowBottom" x="-10%" y="-20%" width="120%" height="130%">
              <feDropShadow dx="-6" dy="-12" stdDeviation="16" floodColor="#C7BEB4" floodOpacity="0.5" />
              <feDropShadow dx="4" dy="6" stdDeviation="10" floodColor="#FFFFFF" floodOpacity="0.85" />
            </filter>
          </defs>

          {/* Back Pastel Sage 3D Wave */}
          <path
            d="M-80 560 H1520 V250 C1240 150 960 360 660 260 C360 160 140 210 -80 310 Z"
            fill="url(#sageClayGrad)"
            opacity="0.75"
            filter="url(#clayWaveShadowBottom)"
          />
          {/* Middle Baby Blue 3D Wave */}
          <path
            d="M-80 560 H1520 V330 C1180 240 890 420 570 335 C290 260 100 310 -80 395 Z"
            fill="url(#blueClayGrad)"
            opacity="0.8"
            filter="url(#clayWaveShadowBottom)"
          />
          {/* Front Cream 3D Wave Ridge */}
          <path
            d="M-80 560 H1520 V420 C1150 350 840 485 510 415 C250 360 80 410 -80 470 Z"
            fill="url(#creamClayGrad)"
            opacity="0.92"
            filter="url(#clayWaveShadowBottom)"
          />
        </svg>
      </div>

      {/* =========================================
          MAIN CONTENT CARD (3D CLAY SHELL)
         ========================================= */}
      <main className="relative z-10 max-w-2xl mx-auto my-6 md:my-12 px-3 md:px-0">
        
        <Navigation />

        <div className="clay-shell p-6 md:p-12 min-h-[60vh]">
          
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Divider />
                <TableOfContents />
              </>
            } />
            <Route path="/profile" element={<StudentProfile />} />
            <Route path="/overview" element={<CourseOverview />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/reflections" element={<Reflections />} />
            <Route path="/hobbies-trainings" element={<HobbiesAndTrainings />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>

        </div>

        {/* Footer */}
        <footer className="mt-10 text-center relative z-10 pb-8">
          <div className="inline-block clay-tile px-6 py-2.5">
            <p className="text-clay-charcoal text-xs uppercase tracking-[0.3em] font-bold">
              © 2026 Jullianna Villaluna
            </p>
          </div>
        </footer>

      </main>
      <Analytics />
    </div>
  );
};

export default App;

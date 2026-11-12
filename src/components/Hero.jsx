import React from 'react';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => {
  const roles = [
    "Student Leader",
    "Business Analyst", 
    "Data Specialist",
    "Cloud Enthusiast",
  ];

  return (
    <header id="cover" className="space-y-7 animate-fade-in text-center md:text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2.5">
          <div className="inline-block clay-badge-blue px-3.5 py-1 rounded-full">
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] text-clay-charcoal">
              Welcome to My Computer Programming 1 E-Portfolio
            </p>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-extrabold text-clay-charcoal tracking-tight mb-1">
            Jullianna <br className="hidden md:block" /> Villaluna
          </h1>

          <p className="text-xs font-semibold text-clay-muted tracking-wider">
            Yana | Course: ITC C105-101BA — Computer Programming 1 | José Rizal University (JRU)
          </p>
          
          {/* THE TYPEWRITER EFFECT */}
          <div className="text-clay-muted font-bold text-sm md:text-base tracking-[0.2em] uppercase pt-1 h-7 md:h-6">
            <TypewriterEffect words={roles} />
          </div>
          
        </div>
        
        {/* --- PROFILE PICTURE IN CUSHIONED 3D CLAY RING --- */}
        <div className="mx-auto md:mx-0 clay-avatar-ring shrink-0 relative z-10">
          <div className="w-32 h-32 md:w-40 md:h-40 clay-avatar-inner overflow-hidden">
            <img 
              src="/profile.jpg" 
              alt="Jullianna Villaluna" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      {/* Welcome Message Card — Tactile 3D Clay Pillow */}
      <div className="clay-card-sage p-6 md:p-7 text-left">
        <h2 className="font-serif text-lg md:text-xl font-bold text-clay-charcoal mb-2">
          Welcome to My Computer Programming 1 E-Portfolio
        </h2>
        <p className="text-xs sm:text-sm text-clay-charcoal/90 leading-relaxed font-medium">
          Welcome to my official E-Portfolio for <strong>ITC C105-101BA (Computer Programming 1)</strong>. This digital space documents my academic journey, hands-on coding exercises, project milestones, and key reflections throughout the semester at José Rizal University. Feel free to explore my compiled works, technical documentation, and term-by-term growth as an aspiring developer.
        </p>
      </div>

      {/* Bottom Metadata Grid — 4 Individual Raised 24px 3D Clay Tiles */}
      <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="clay-tile p-4 space-y-1 text-left">
          <p className="text-[10px] text-clay-muted uppercase tracking-widest font-bold">Subject</p>
          <p className="text-clay-charcoal font-bold text-xs uppercase">ITC C105-101BA — Computer Programming 1</p>
        </div>
        <div className="clay-tile p-4 space-y-1 text-left">
          <p className="text-[10px] text-clay-muted uppercase tracking-widest font-bold">Course & Year</p>
          <p className="text-clay-charcoal font-bold text-xs uppercase">BSIT - Business Analytics - 1st Year</p>
        </div>
        <div className="clay-tile p-4 space-y-1 text-left">
          <p className="text-[10px] text-clay-muted uppercase tracking-widest font-bold">Institution & Instructor</p>
          <p className="text-clay-charcoal font-bold text-xs uppercase">José Rizal University (JRU) • Dr. Richard Monreal</p>
        </div>
        <div className="clay-tile p-4 space-y-1 text-left">
          <p className="text-[10px] text-clay-muted uppercase tracking-widest font-bold">Term & Semester</p>
          <p className="text-clay-charcoal font-bold text-xs uppercase">SY 2026-2027 | 1st Semester</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;

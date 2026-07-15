import React from 'react';
import { Target, Heart, Zap, User, MapPin, GraduationCap } from 'lucide-react';

const StudentProfile = () => {
  return (
    <section id="profile" className="space-y-8 mt-16">
      <div className="text-center space-y-2">
        <h2 className="font-serif text-3xl text-crimson-depth tracking-wide drop-shadow-md">Student Profile</h2>
        <p className="text-xs text-warm-sand uppercase tracking-widest font-bold opacity-80">Biography & Career Aspirations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Biography / Transition Story */}
        <div className="md:col-span-2 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 p-6 md:p-8 rounded-2xl shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-gray-200/50 pb-4">
            <div className="flex items-center gap-3">
              <User className="text-crimson-depth" size={22} />
              <h3 className="font-serif text-2xl font-bold text-gray-900">My Transition Story</h3>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-depth/10 border border-crimson-depth/25 text-crimson-depth text-xs font-bold uppercase tracking-wider self-start sm:self-auto">
              <MapPin size={14} className="text-crimson-depth" />
              Mandaluyong City
            </div>
          </div>
          <div className="text-sm text-gray-700 leading-relaxed font-medium">
            <p>
              My transition from BS Medical Technology at National University to a BS in Information Technology, specializing in Business Analytics at José Rizal University, was a strategic step toward finding my true professional alignment. While my foundational studies in the sciences honed my analytical mindset, I realized my ambitions align much closer with the dynamic corporate world. My ultimate goal is still to earn the title of "Doctor," not in a clinical setting, but by pursuing a doctorate in Data Science. I have always envisioned myself driving decisions in a modern business environment, and the BSIT Business Analytics program seamlessly blends technological innovation with corporate strategy to help me reach that goal. Today, I am excited to apply my analytical skills where they thrive most: at the intersection of business intelligence, logic, and strategic growth.
            </p>
          </div>
        </div>

        {/* Academic Background */}
        <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-crimson-depth" size={20} />
            <h3 className="font-serif text-xl font-bold text-gray-900">Academic Background</h3>
          </div>
          
          <div className="relative border-l-2 border-crimson-depth/20 ml-2.5 space-y-6">
            {/* José Rizal University */}
            <div className="relative pl-6">
              <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-crimson-depth ring-4 ring-white/50"></div>
              <div className="space-y-1">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <h4 className="font-bold text-sm text-gray-900 leading-tight">José Rizal University</h4>
                  <span className="text-[9px] bg-crimson-depth/10 text-crimson-depth font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    2026 - Present
                  </span>
                </div>
                <p className="text-xs text-gray-700 font-semibold mt-0.5">
                  BS in Information Technology (Business Analytics specialization)
                </p>
              </div>
            </div>

            {/* National University MOA */}
            <div className="relative pl-6">
              <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-warm-sand ring-4 ring-white/50"></div>
              <div className="space-y-1">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <h4 className="font-bold text-sm text-gray-900 leading-tight">National University MOA</h4>
                  <span className="text-[9px] bg-warm-sand/15 text-warm-sand font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    2023 - 2025
                  </span>
                </div>
                <p className="text-xs text-gray-700 font-semibold mt-0.5">
                  BS in Medical Technology
                </p>
              </div>
            </div>

            {/* Higher School ng UMak */}
            <div className="relative pl-6">
              <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-400 ring-4 ring-white/50"></div>
              <div className="space-y-1">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <h4 className="font-bold text-sm text-gray-900 leading-tight">Higher School ng UMak</h4>
                  <span className="text-[9px] bg-gray-200 text-gray-600 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    2021 - 2023
                  </span>
                </div>
                <p className="text-xs text-gray-700 font-semibold mt-0.5">
                  STEM Strand | Senior High School Graduate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Goals */}
        <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-crimson-depth" size={20} />
            <h3 className="font-serif text-xl font-bold text-gray-900">Career Goals</h3>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed font-medium">
            My goal is to become a Data Scientist who can translate complex mathematical models into actionable business strategies. I aim to bridge the gap between technical rigor and creative problem-solving.
          </p>
        </div>

        {/* Interests */}
        <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-crimson-depth" size={20} />
            <h3 className="font-serif text-xl font-bold text-gray-900">Interests in Tech</h3>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed font-medium">
            I am deeply interested in Cloud Computing (AWS), Data Engineering, and the mathematical structures that power modern algorithms. I enjoy exploring how discrete math underpins everyday technology.
          </p>
        </div>

        {/* Skills & Strengths */}
        <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-crimson-depth" size={20} />
            <h3 className="font-serif text-xl font-bold text-gray-900">Skills & Strengths</h3>
          </div>
          <ul className="text-sm text-gray-700 leading-relaxed font-medium list-disc list-inside space-y-1">
            <li>Logical Reasoning & Problem Solving</li>
            <li>Basic Blender 3D Modeling</li>
            <li>2D Digital Art & Design</li>
            <li>Critical Thinking</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StudentProfile;
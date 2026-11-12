import React from 'react';
import { Target, Heart, Zap, User, MapPin, GraduationCap, Sparkles } from 'lucide-react';

const StudentProfile = () => {
  return (
    <section id="profile" className="space-y-8 mt-6">
      <div className="text-center space-y-2">
        <h2 className="font-serif text-3xl font-extrabold text-clay-charcoal tracking-wide">About Me & Student Profile</h2>
        <p className="text-xs text-clay-muted uppercase tracking-widest font-bold">Biography & Career Aspirations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* About Me */}
        <div className="md:col-span-2 clay-card-sage p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-white/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl clay-tile flex items-center justify-center text-clay-charcoal">
                <Sparkles size={20} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-clay-charcoal">About Me</h3>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full clay-tile text-clay-charcoal text-xs font-bold uppercase tracking-wider self-start sm:self-auto">
              <MapPin size={14} className="text-clay-charcoal" />
              Mandaluyong City • JRU
            </div>
          </div>
          <div className="text-sm text-clay-charcoal leading-relaxed font-medium space-y-4">
            <p>
              Hello! I am <strong>Jullianna</strong>, a dedicated student at <strong>José Rizal University (JRU)</strong> currently taking <strong>Bachelor of Science in Information Technology Major in Business Analytics</strong>.
            </p>
            <p>
              As someone passionate about technology and logical problem-solving, this course serves as my foundational stepping stone into software development. Through structured coding exercises, algorithm design, and Python programming, I am continuously building my ability to turn real-world problems into clean, working code. Outside of coding, I actively seek opportunities to learn from tech seminars, collaborate with peers, and grow both academically and professionally within the JRU community.
            </p>
          </div>
        </div>

        {/* Biography / Transition Story */}
        <div className="md:col-span-2 clay-card p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-clay-muted/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl clay-badge-blue flex items-center justify-center text-clay-charcoal">
                <User size={20} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-clay-charcoal">My Transition Story</h3>
            </div>
          </div>
          <div className="text-sm text-clay-charcoal leading-relaxed font-medium">
            <p>
              My transition from BS Medical Technology at National University to a BS in Information Technology, specializing in Business Analytics at José Rizal University, was a strategic step toward finding my true professional alignment. While my foundational studies in the sciences honed my analytical mindset, I realized my ambitions align much closer with the dynamic corporate world. My ultimate goal is still to earn the title of "Doctor," not in a clinical setting, but by pursuing a doctorate in Data Science. I have always envisioned myself driving decisions in a modern business environment, and the BSIT Business Analytics program seamlessly blends technological innovation with corporate strategy to help me reach that goal. Today, I am excited to apply my analytical skills where they thrive most: at the intersection of business intelligence, logic, and strategic growth.
            </p>
          </div>
        </div>

        {/* Academic Background */}
        <div className="clay-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-2xl clay-badge-sage flex items-center justify-center text-clay-charcoal">
              <GraduationCap size={19} />
            </div>
            <h3 className="font-serif text-xl font-bold text-clay-charcoal">Academic Background</h3>
          </div>
          
          <div className="relative border-l-2 border-clay-sage ml-3 space-y-6">
            {/* José Rizal University */}
            <div className="relative pl-6">
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full clay-badge-sage"></div>
              <div className="space-y-1">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <h4 className="font-bold text-sm text-clay-charcoal leading-tight">José Rizal University</h4>
                  <span className="text-[9px] clay-badge-sage text-clay-charcoal font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    2026 - Present
                  </span>
                </div>
                <p className="text-xs text-clay-muted font-semibold mt-0.5">
                  BS in Information Technology (Business Analytics specialization)
                </p>
              </div>
            </div>

            {/* National University MOA */}
            <div className="relative pl-6">
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full clay-badge-blue"></div>
              <div className="space-y-1">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <h4 className="font-bold text-sm text-clay-charcoal leading-tight">National University MOA</h4>
                  <span className="text-[9px] clay-badge-blue text-clay-charcoal font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    2023 - 2025
                  </span>
                </div>
                <p className="text-xs text-clay-muted font-semibold mt-0.5">
                  BS in Medical Technology
                </p>
              </div>
            </div>

            {/* Higher School ng UMak */}
            <div className="relative pl-6">
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full clay-tile"></div>
              <div className="space-y-1">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <h4 className="font-bold text-sm text-clay-charcoal leading-tight">Higher School ng UMak</h4>
                  <span className="text-[9px] clay-tile text-clay-muted font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    2021 - 2023
                  </span>
                </div>
                <p className="text-xs text-clay-muted font-semibold mt-0.5">
                  STEM Strand | Senior High School Graduate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Goals */}
        <div className="clay-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-2xl clay-badge-blue flex items-center justify-center text-clay-charcoal">
              <Target size={19} />
            </div>
            <h3 className="font-serif text-xl font-bold text-clay-charcoal">Career Goals</h3>
          </div>
          <p className="text-sm text-clay-charcoal leading-relaxed font-medium">
            My goal is to become a Data Scientist who can translate complex mathematical models into actionable business strategies. I aim to bridge the gap between technical rigor and creative problem-solving.
          </p>
        </div>

        {/* Interests */}
        <div className="clay-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-2xl clay-badge-sage flex items-center justify-center text-clay-charcoal">
              <Heart size={19} />
            </div>
            <h3 className="font-serif text-xl font-bold text-clay-charcoal">Interests in Tech</h3>
          </div>
          <p className="text-sm text-clay-charcoal leading-relaxed font-medium">
            I am deeply interested in Cloud Computing (AWS), Data Engineering, and the mathematical structures that power modern algorithms. I enjoy exploring how Python and logic underpin everyday technology.
          </p>
        </div>

        {/* Skills & Strengths */}
        <div className="clay-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-2xl clay-badge-blue flex items-center justify-center text-clay-charcoal">
              <Zap size={19} />
            </div>
            <h3 className="font-serif text-xl font-bold text-clay-charcoal">Skills & Strengths</h3>
          </div>
          <ul className="text-sm text-clay-charcoal leading-relaxed font-medium list-disc list-inside space-y-1.5">
            <li>Logical Reasoning & Problem Solving</li>
            <li>Python Programming & Algorithm Design</li>
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

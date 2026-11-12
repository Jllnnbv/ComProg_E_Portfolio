import React from 'react';
import { FileText, Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="space-y-8 mt-6 pb-8">
      <div className="text-center space-y-2">
        <h2 className="font-serif text-3xl font-extrabold text-clay-charcoal tracking-wide">Resume</h2>
        <p className="text-xs text-clay-muted uppercase tracking-widest font-bold">Curriculum Vitae Overview</p>
      </div>

      <div className="clay-card p-6 md:p-8 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-clay-muted/15 pb-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-clay-charcoal">Jullianna Villaluna</h3>
            <p className="text-xs text-clay-muted font-bold uppercase tracking-widest">BSIT - Business Analytics Student • Data Specialist</p>
          </div>
          <a 
            href="/assets/resume/JulliannaVillalunaResume.pdf" 
            download="JulliannaVillalunaResume.pdf"
            className="flex items-center gap-2 clay-pill-active text-clay-charcoal px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all cursor-pointer"
          >
            <Download size={14} /> Download CV
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="clay-tile p-5 space-y-3">
            <h4 className="font-serif text-lg font-bold text-clay-charcoal">Education & Leadership</h4>
            <div className="space-y-1.5">
              <p className="text-sm font-bold text-clay-charcoal">José Rizal University</p>
              <p className="text-xs text-clay-muted italic">BS in Information Technology, Major in Business Analytics</p>
              <p className="text-xs text-clay-charcoal font-semibold pt-1">
                Secretary / Data Analyst — AWS Student Builder Group (JRU Chapter)
              </p>
            </div>
          </div>

          <div className="clay-tile p-5 space-y-3">
            <h4 className="font-serif text-lg font-bold text-clay-charcoal">Professional Summary</h4>
            <p className="text-xs text-clay-charcoal leading-relaxed font-medium">
              Dynamic IT and Business Analytics student and Data Engineering Pilipinas Scholar skilled in Python, SQL, AWS, and data visualization. Proven track record leading technical workshops, analyzing operational data, and streamlining organizational workflows.
            </p>
          </div>
        </div>

        {/* Visual Resume Image */}
        <div className="mt-6 pt-6 border-t border-clay-muted/15">
          <div className="relative group cursor-zoom-in">
            <div className="relative clay-tile p-3 overflow-hidden transition-all duration-700 ease-out transform scale-95 opacity-75 blur-[1px] group-hover:scale-100 group-hover:opacity-100 group-hover:blur-0">
              <img 
                src="/assets/resume/resume.jpg" 
                alt="Jullianna Villaluna Resume" 
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
            
            {/* Hover Indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              <div className="clay-badge-sage px-5 py-2.5 rounded-full flex items-center gap-2">
                <FileText size={16} className="text-clay-charcoal" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-clay-charcoal">Hover to View Full Resume</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

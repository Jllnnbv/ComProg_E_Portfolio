import React, { useState } from 'react';
import { BookOpen, FileText, ClipboardList, ChevronRight, PenTool, Code } from 'lucide-react';

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const portfolioData = [
    // PRELIMS
    {
      term: "Prelims",
      type: "Performance Task",
      title: "PPT1 - Concept of Flowcharting Symbols",
      institution: "ITC C105 (BA) - Computer Programming 1",
      description: "Introduced core flowcharting symbols and conventions used to visually represent program logic, inputs, processes, decisions, and outputs.",
      tags: ["Flowcharting", "Symbols", "Logic"],
      icon: <PenTool size={16} />,
      theme: "sage",
      image: "/assets/portfolio/PPT1.png"
    },
    {
      term: "Prelims",
      type: "Performance Task",
      title: "PPT2 - Program Logic Formulation - Algorithm",
      institution: "ITC C105 (BA) - Computer Programming 1",
      description: "Formulated step-by-step algorithms and structured problem-solving procedures as a foundation for program development.",
      tags: ["Algorithms", "Logic Formulation", "Pseudocode"],
      icon: <PenTool size={16} />,
      theme: "blue",
      image: "/assets/portfolio/PPT2.png"
    },
    {
      term: "Prelims",
      type: "Performance Task",
      title: "PPT3 - Sequential Control Structure",
      institution: "ITC C105 (BA) - Computer Programming 1",
      description: "Designed sequential control structures and flowcharts executing linear step-by-step computations from input to output.",
      tags: ["Sequential Flow", "Control Structures"],
      icon: <PenTool size={16} />,
      theme: "sage",
      image: "/assets/portfolio/PPT3.png"
    },
    {
      term: "Prelims",
      type: "Performance Task",
      title: "PPT4 - Variables, Statements, Types, Input and Comments",
      institution: "ITC C105 (BA) - Computer Programming 1",
      description: "Explored fundamental programming constructs including variable declarations, data types, user input handling, statements, and code documentation.",
      tags: ["Variables", "Data Types", "Input/Output"],
      icon: <Code size={16} />,
      theme: "blue",
      image: "/assets/portfolio/PPT4.png"
    },
    {
      term: "Prelims",
      type: "Practice Task",
      title: "PP1 - Sequential and Decision Control Structure",
      institution: "ITC C105 (BA) - Computer Programming 1",
      description: "Applied sequential and decision branching logic (if/else conditional structures) to evaluate conditions and direct program flow.",
      tags: ["Decision Control", "Conditionals", "Flowchart"],
      icon: <PenTool size={16} />,
      theme: "sage",
      image: "/assets/portfolio/PP1.png"
    },
    {
      term: "Prelims",
      type: "Seatwork",
      title: "PP2 - Seatwork Exercises - Flowchart - Loop",
      institution: "ITC C105 (BA) - Computer Programming 1",
      description: "Constructed iterative loop flowcharts utilizing counters and accumulators to automate repetitive problem-solving tasks.",
      tags: ["Loops", "Iteration", "Seatwork"],
      icon: <PenTool size={16} />,
      theme: "blue",
      image: "/assets/portfolio/PP2.png"
    },
    {
      term: "Prelims",
      type: "Quiz",
      title: "PWW1 - Logic Formulation & Flowcharting - Prelim Quiz 1",
      institution: "ITC C105 (BA) - Computer Programming 1",
      description: "Written assessment evaluating proficiency in algorithm design, flowchart symbols, and fundamental control structures.",
      tags: ["Prelim Quiz", "Logic Formulation", "Flowcharting"],
      icon: <ClipboardList size={16} />,
      theme: "sage",
      image: "/assets/portfolio/PWW1.png"
    },
    {
      term: "Prelims",
      type: "Exam",
      title: "Prelim Examination 2026 (ITC C105BA)",
      institution: "ITC C105 (BA) - Computer Programming 1",
      description: "Comprehensive preliminary term examination covering program logic formulation, algorithms, and sequential, decision, and repetition flowcharts.",
      tags: ["Prelim Exam", "Assessment", "ITC C105BA"],
      icon: <FileText size={16} />,
      theme: "blue",
      image: "/assets/portfolio/PrelimExam2026.png"
    },

    // MIDTERMS
    {
      term: "Midterms",
      type: "Activity",
      title: "Week 7 Activity Task - Process and Output Documentation",
      institution: "ITC C105 (BA) - Computer Programming 1",
      description: "Documented Python processes and outputs demonstrating exponentiation operators, integer addition, dynamic typing, and variable reassignment.",
      tags: ["Python Basics", "Operators", "Dynamic Typing"],
      icon: <Code size={16} />,
      theme: "sage",
      image: "/assets/portfolio/Week7_Activity.png"
    },
    {
      term: "Midterms",
      type: "Lab Activity",
      title: "Week 8 Lab Activity - Student Management System",
      institution: "ITC C105 (BA) - Computer Programming 1",
      description: "Implemented a modular Student Management System in Python combining nested dictionaries, dynamic lists, reusable functions, and custom modules.",
      tags: ["Dictionaries", "Lists", "Modular Python"],
      icon: <Code size={16} />,
      theme: "blue",
      image: "/assets/portfolio/Week8_Lab.png"
    },
    {
      term: "Midterms",
      type: "Performance Task",
      title: "Week 9 PT Lab Activity - Functions",
      institution: "ITC C105 (BA) - Computer Programming 1",
      description: "Developed modular Python programs utilizing user-defined functions, parameters, arguments, and return values.",
      tags: ["Functions", "Parameters", "Modularity"],
      icon: <PenTool size={16} />,
      theme: "sage",
      image: "/assets/portfolio/Week9_PT_Functions.png"
    },
    {
      term: "Midterms",
      type: "Performance Task",
      title: "Week 10 PT - Loops and Iteration",
      institution: "ITC C105 (BA) - Computer Programming 1",
      description: "Applied Python for and while loops, range sequences, and iterative control statements to process data collections.",
      tags: ["Loops", "Iteration", "Python"],
      icon: <PenTool size={16} />,
      theme: "blue",
      image: "/assets/portfolio/Week10_PT_Loops.png"
    },
    {
      term: "Midterms",
      type: "Lab Activity",
      title: "Week 10 Lab Activity - Control Structures in Python",
      institution: "ITC C105 (BA) - Computer Programming 1",
      description: "Analyzed loop control statements (break vs. continue), even-number sequence generation, while loop trace outputs, and conditional branching.",
      tags: ["Control Structures", "Break & Continue", "Branching"],
      icon: <ClipboardList size={16} />,
      theme: "sage",
      image: "/assets/portfolio/Week10_Lab.png"
    },
    {
      term: "Midterms",
      type: "Activity",
      title: "Week 11 Activity - Programming Language Fundamentals II (Lists)",
      institution: "ITC C105 (BA) - Computer Programming 1",
      description: "Explored Python list creation, indexing, slicing, mutability methods (.append, .insert, .remove, .pop), aggregation functions, and list comprehensions.",
      tags: ["Lists", "List Comprehensions", "Data Structures"],
      icon: <Code size={16} />,
      theme: "blue",
      image: "/assets/portfolio/Week11_Activity.png"
    },

    // FINALS
    {
      term: "Finals",
      type: "Lab Activity",
      title: "Week 14 Activity 1.1 - Functions in Python (functions_lab.py)",
      institution: "ITC C105 (BA) - Computer Programming 1",
      description: "Completed basic, practice, advanced, and challenge exercises covering Python function creation, formatted string returns, area calculation, and variable scope.",
      tags: ["Functions Lab", "Return Values", "Scope"],
      icon: <Code size={16} />,
      theme: "sage",
      image: "/assets/portfolio/Week14_Activity.png"
    },
    {
      term: "Finals",
      type: "Project",
      title: "Week 15 PT - Case Study & SDG Project Updates",
      institution: "ITC C105 (BA) - Computer Programming 1",
      description: "Developed SDG-aligned project proposals and progress updates, featuring Agri-Route (supply optimization for smallholder farmers) and Ambagan (blockchain-powered cooperative infrastructure targeting SDG 8, 9, and 17).",
      tags: ["SDG Project", "Ambagan", "Case Study"],
      icon: <BookOpen size={16} />,
      theme: "blue",
      image: "/assets/portfolio/Week15_PT_Updates.png"
    },
    {
      term: "Finals",
      type: "Project",
      title: "Week 16 PT - Final Project Documentation (Ambagan)",
      institution: "ITC C105 (BA) - Computer Programming 1",
      description: "Compiled comprehensive final product documentation, research paper, marketing presentation, and visual UI user manual for Tranche (Ambagan): Blockchain-Powered Infrastructure for Shared Value.",
      tags: ["Final Documentation", "User Manual", "Ambagan"],
      icon: <FileText size={16} />,
      theme: "sage",
      image: "/assets/portfolio/Week16_PT_Docs.png"
    }
  ];

  return (
    <section id="portfolio" className="space-y-8 my-6">
      <div className="text-center space-y-2 mb-10">
        <h2 className="font-serif text-3xl font-extrabold text-clay-charcoal tracking-wide">Computer Programming Portfolio</h2>
        <p className="text-xs text-clay-muted uppercase tracking-widest font-bold">Laboratory Activities, Quizzes, Exams & Projects per Term</p>
        <div className="inline-block clay-badge-sage px-3.5 py-1 rounded-full mt-1">
          <p className="text-[10px] text-clay-charcoal uppercase tracking-widest font-bold">
            Hover or tap to view details
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-24 top-2 bottom-2 w-1 rounded-full clay-inset"></div>

        <div className="space-y-7">
          {portfolioData.map((item, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className="relative flex flex-col md:flex-row gap-4 md:gap-10 items-start group cursor-pointer"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                
                <div className="md:w-24 shrink-0 flex flex-row md:flex-col items-center md:items-end justify-start pt-2 pl-1.5 md:pl-0 gap-4">
                  <div className={`absolute left-[12px] md:left-[92px] w-3.5 h-3.5 rounded-full z-10 transition-all duration-300 ${
                    isActive ? 'clay-pill-active scale-125' : 'clay-tile'
                  }`}></div>
                  
                  <span className={`font-serif font-bold text-base ml-8 md:ml-0 transition-colors duration-300 ${
                    isActive ? 'text-clay-charcoal' : 'text-clay-muted'
                  }`}>
                    {item.term}
                  </span>
                </div>

                <div className="flex-1 w-full pl-8 md:pl-0">
                  <div className={`p-6 transition-all duration-500 ease-out relative overflow-hidden ${
                    isActive 
                      ? (item.theme === 'sage' ? 'clay-card-sage scale-[1.01]' : 'clay-card-blue scale-[1.01]')
                      : 'clay-card hover:-translate-y-0.5'
                  }`}>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 self-start ${
                        isActive ? 'clay-tile text-clay-charcoal' : (item.theme === 'sage' ? 'clay-badge-sage' : 'clay-badge-blue')
                      }`}>
                        {item.icon}
                        {item.type}
                      </div>
                      
                      <ChevronRight size={16} className={`text-clay-charcoal transition-transform duration-300 ${isActive ? 'rotate-90 opacity-100' : 'opacity-50'}`} />
                    </div>

                    <h3 className="font-serif text-lg md:text-xl font-bold mb-1 text-clay-charcoal">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold mb-3 text-clay-muted">
                      {item.institution}
                    </p>
                    
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isActive ? 'max-h-[900px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      <div className="clay-tile p-4 mb-4">
                        <p className="text-clay-charcoal text-xs sm:text-sm leading-relaxed font-medium">
                          {item.description}
                        </p>
                      </div>

                      {item.image && (
                        <div className="mb-4 rounded-2xl overflow-hidden clay-tile p-2">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-auto object-contain max-h-[450px] rounded-xl"
                          />
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase tracking-wide px-3 py-1 clay-tile text-clay-charcoal rounded-full font-bold">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

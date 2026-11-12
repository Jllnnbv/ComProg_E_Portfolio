import React, { useState } from 'react';
import { Book, GraduationCap, Clock, Code, Calendar, ListChecks } from 'lucide-react';

const CourseOverview = () => {
  const [activeTab, setActiveTab] = useState('prelims');

  const courseDetails = [
    { label: "Course Title", value: "Computer Programming 1", icon: <Code className="text-clay-charcoal" size={20} /> },
    { label: "Course Code", value: "ITC C105 (BA)", icon: <Book className="text-clay-charcoal" size={20} /> },
    { label: "Credit Units", value: "3 Unit Lecture", icon: <GraduationCap className="text-clay-charcoal" size={20} /> },
    { label: "Contact Hours", value: "5 Hours/Week (2h online lecture, 3h lab)", icon: <Clock className="text-clay-charcoal" size={20} /> },
    { label: "Pre-Requisite", value: "None", icon: <ListChecks className="text-clay-charcoal" size={20} /> },
    { label: "Placement", value: "1st Semester, 1st Year Level", icon: <Calendar className="text-clay-charcoal" size={20} /> },
  ];

  const syllabusData = {
    prelims: {
      title: "Prelim Term",
      weeks: [
        {
          week: "Weeks 1 - 2",
          title: "Logic Formulation & Flowcharting",
          details: "Introduction to program logic formulation, program development cycle, and basic elements of programming. Learn flowchart symbols and program design tools including algorithms, pseudocode, and flowcharts."
        },
        {
          week: "Weeks 3 - 4",
          title: "Sequential & Decision Control Structures",
          details: "Develop problem-solving skills using sequential control flowcharts. Transition to decision control structures including simple if, nested if, and complex conditional statements."
        },
        {
          week: "Week 5",
          title: "Repetition Structures & SDG Alignment",
          details: "Implement loops and repetition control flowcharts using counters and accumulators. Design a project proposal aligning with United Nations Sustainable Development Goals (SDG 3, 4, 8, and 10)."
        },
        {
          week: "Week 6",
          title: "Prelim Assessment",
          details: "Preliminary Term Summative Assessment and examination to evaluate proficiency in logic formulation, flowcharting, and control flows."
        }
      ]
    },
    midterms: {
      title: "Midterm Term",
      weeks: [
        {
          week: "Weeks 7 - 8",
          title: "Python Programming Fundamentals",
          details: "Transition to Python syntax. Study literals, operators, variables, characters, strings, and iterative control statements. Deep dive into lists, functions, tuples, dictionaries, modules, and packages."
        },
        {
          week: "Weeks 9 - 10",
          title: "OOP Concepts & Core Components",
          details: "Introduction to Object-Oriented Programming (OOP) using Python. Explore classes, objects, constructors, properties, and methods. Study single, multiple, and multilevel inheritance, abstraction, and encapsulation."
        },
        {
          week: "Week 11",
          title: "Advanced OOP & Python Concepts",
          details: "Master polymorphism, method overloading, and method overriding. Study advanced Python constructs: generators (yield statement), closures, and anonymous functions (lambdas)."
        },
        {
          week: "Week 12",
          title: "Midterm Assessment",
          details: "Midterm Summative Assessment and examination focusing on core Python programming syntax and intermediate OOP implementation."
        }
      ]
    },
    finals: {
      title: "Final Term",
      weeks: [
        {
          week: "Week 13",
          title: "Object-Oriented Design & File Handling",
          details: "Study cohesion, coupling, and design class diagrams using UML. Implement file handling in Python (reading, writing, appending) and robust exception handling using try/except/finally blocks."
        },
        {
          week: "Week 14",
          title: "GUI Programming & Project Cycle",
          details: "Create Graphical User Interfaces using Python forms, widgets, and layout managers. Learn event handling and the software development project cycle (information gathering, design, coding, testing, maintenance)."
        },
        {
          week: "Weeks 15 - 16",
          title: "Case Study Development",
          details: "Design and implement a Python program solving a real-world problem using best practices. The project aligns with UN Sustainable Development Goals (SDG 1, 3, 4, and 7)."
        },
        {
          week: "Week 17",
          title: "Case Study Presentation",
          details: "Finalize, simulate, debug, and present the completed case study project and e-portfolio documentation."
        },
        {
          week: "Week 18",
          title: "Final Assessment",
          details: "Final Term Summative Assessment and comprehensive examination covering all course competencies."
        }
      ]
    }
  };

  return (
    <section id="overview" className="space-y-8 mt-6">
      <div className="text-center space-y-2">
        <h2 className="font-serif text-3xl font-extrabold text-clay-charcoal tracking-wide">Course Overview</h2>
        <p className="text-xs text-clay-muted uppercase tracking-widest font-bold">Subject Details & Syllabus Summary</p>
      </div>

      <div className="space-y-6">
        {/* Course Description */}
        <div className="clay-card-sage p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl clay-tile flex items-center justify-center text-clay-charcoal">
              <Book size={22} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-clay-charcoal">Course Description</h3>
          </div>
          <p className="text-sm text-clay-charcoal leading-relaxed font-medium">
            This course provides problem solving and computer programming skills for students with no prior experience in the area of programming. Students will use Python, a high-level, object-oriented computer programming language, to learn the fundamentals of computer programming, including how to write, compile, and execute programs. Basic programming-in-the-small abilities and concepts including procedural programming (methods, parameters, return values), basic control structures (sequence, if/else, for loop, while loop), file processing, arrays, and an introduction to defining objects will be covered.
          </p>
        </div>

        {/* Key Details Grid */}
        <div className="clay-card p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl clay-badge-blue flex items-center justify-center text-clay-charcoal">
              <ListChecks size={22} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-clay-charcoal">Course Specifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courseDetails.map((detail, index) => (
              <div key={index} className="clay-tile flex items-center gap-4 p-4">
                <div className={`p-2.5 rounded-2xl shrink-0 ${index % 2 === 0 ? 'clay-badge-sage' : 'clay-badge-blue'}`}>
                  {detail.icon}
                </div>
                <div>
                  <p className="text-[10px] text-clay-muted uppercase tracking-widest font-bold">{detail.label}</p>
                  <p className="text-xs sm:text-sm font-bold text-clay-charcoal mt-0.5">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Syllabus Timeline */}
        <div className="clay-card p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-clay-muted/15 pb-4 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl clay-badge-sage flex items-center justify-center text-clay-charcoal">
                <Calendar size={22} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-clay-charcoal">Syllabus Outline</h3>
            </div>
            
            {/* Term Selectors — Puffed 3D Clay Pills */}
            <div className="flex gap-2 clay-inset p-1.5 rounded-full">
              {Object.keys(syllabusData).map((termKey) => (
                <button
                  key={termKey}
                  onClick={() => setActiveTab(termKey)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === termKey
                      ? 'clay-pill-active'
                      : 'text-clay-muted hover:text-clay-charcoal'
                  }`}
                >
                  {syllabusData[termKey].title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Term Timeline */}
          <div className="relative border-l-2 border-clay-sage ml-3 space-y-6 py-2">
            {syllabusData[activeTab].weeks.map((item, index) => (
              <div key={index} className="relative pl-7 group">
                <div className="absolute -left-[7px] top-4 w-3 h-3 rounded-full clay-badge-sage group-hover:scale-125 transition-transform duration-300"></div>
                <div className="clay-tile p-4 space-y-1.5">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-[10px] clay-badge-blue text-clay-charcoal font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                      {item.week}
                    </span>
                    <h4 className="font-serif text-base font-bold text-clay-charcoal">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-clay-charcoal/90 leading-relaxed font-medium pt-1">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;

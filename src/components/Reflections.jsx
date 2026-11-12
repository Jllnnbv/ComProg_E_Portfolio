import React from 'react';
import { BrainCircuit, Code2, TrendingUp } from 'lucide-react';

const Reflections = () => {
  const reflections = [
    {
      title: "Prelim Term Reflection",
      icon: <BrainCircuit className="text-clay-charcoal" size={24} />,
      content:
        "During the Prelim term of Computer Programming 1, I was introduced to the core building blocks of programming—understanding how computers process logic, designing flowcharts and pseudocode, and writing my first basic programs using variables, data types, and input/output statements. At first, translating a problem statement into step-by-step logic felt challenging, especially when dealing with syntax errors. However, through constant practice in our seatwork and machine problems, I learned how to break problems down systematically and pay close attention to detail.",
      subtitle: "Logic Formulation, Flowcharts & Programming Foundations",
      category: "PRELIM TERM",
      badgeClass: "clay-badge-sage",
    },
    {
      title: "Midterm Reflection",
      icon: <Code2 className="text-clay-charcoal" size={24} />,
      content:
        "In the Midterm period, our lessons progressed into decision-making and repetition structures, specifically conditional statements (if, else if, switch) and loops (for, while, do-while). Learning how to control the flow of a program made my Python outputs much more dynamic and practical. Debugging nested loops and tracing logic errors taught me patience and analytical thinking—I realized that understanding why code fails is just as important as writing code that works.",
      subtitle: "Decision-Making, Repetition Structures & Debugging",
      category: "MIDTERM PERIOD",
      badgeClass: "clay-badge-blue",
    },
    {
      title: "Final Term Reflection",
      icon: <TrendingUp className="text-clay-charcoal" size={24} />,
      content:
        "By the Final term, everything came together as we tackled modular programming, methods, and arrays to build more structured and complete applications. Organizing code into reusable methods and managing collections of data showed me how real-world software is engineered. Looking back on the entire semester in ITC C105, I can clearly see how much my confidence in Python and problem-solving has grown, giving me a solid foundation for higher programming courses ahead.",
      subtitle: "Modular Programming, Methods, Arrays & Complete Applications",
      category: "FINAL TERM",
      badgeClass: "clay-badge-sage",
    },
  ];

  return (
    <section id="reflections" className="space-y-10 mt-6 mb-8">
      <div className="text-center space-y-2">
        <h2 className="font-serif text-3xl font-extrabold text-clay-charcoal tracking-wide">
          Narrative Reflections
        </h2>
        <p className="text-xs text-clay-muted uppercase tracking-widest font-bold">
          Term-by-Term Insights — ITC C105-101BA (Computer Programming 1)
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {reflections.map((item, index) => (
          <div
            key={index}
            className="group relative clay-card p-6 md:p-8 transition-all duration-500 ease-out hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3.5 rounded-2xl ${item.badgeClass} group-hover:scale-105 transition-transform duration-500 shrink-0`}>
                {item.icon}
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full ${item.badgeClass}`}>
                    {item.category} — {item.subtitle}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-clay-charcoal">
                  {item.title}
                </h3>
                <p className="text-sm text-clay-charcoal leading-relaxed font-medium">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reflections;

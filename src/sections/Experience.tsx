import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface JobExperience {
  position: string;
  company: string;
  date: string;
  location: string;
  type: string;
  arrangement: string;
}

const experiences: JobExperience[] = [
  {
    position: "Software Engineer Intern",
    company: "BotCalm",
    date: "June 2026 – Present",
    location: "Matara District, Southern Province, Sri Lanka",
    type: "Full-time",
    arrangement: "On-site"
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/30 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          label="JOURNEY"
          title="Work Experience"
          description="A chronological log of my software engineering internships and professional roles."
        />

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[35px] top-1.5 p-1.5 bg-slate-950 border-2 border-slate-800 text-purple-400 group-hover:text-purple-300 group-hover:border-purple-500 rounded-full transition-colors duration-300 shrink-0">
                <Briefcase size={14} />
              </div>

              {/* Experience Card */}
              <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-purple-500/20 hover:bg-slate-900/60 transition-all duration-300">
                
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                      {exp.position}
                    </h3>
                    <p className="text-sm font-semibold text-purple-300/80 font-mono mt-1">
                      {exp.company} <span className="text-slate-500 font-sans font-normal mx-1.5">·</span> {exp.type}
                    </p>
                    
                    {/* Location & Arrangement details */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-3.5 text-xs text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-purple-400" />
                        {exp.location}
                      </span>
                      <span className="text-slate-600 font-bold">•</span>
                      <span className="text-purple-300/80 font-medium font-mono">
                        {exp.arrangement}
                      </span>
                    </div>
                  </div>
                  
                  {/* Date Badge */}
                  <span className="flex items-center gap-1.5 text-xs text-gray-400 bg-slate-950 border border-slate-800 px-3 py-1 rounded-full w-fit shrink-0">
                    <Calendar size={12} className="text-purple-400" />
                    {exp.date}
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

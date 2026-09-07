import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Trophy, Users } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          label="ACHIEVEMENTS & ACTIVITIES"
          title="Achievements & Extracurriculars"
          description="A summary of my competitive achievements, leadership roles, and extracurricular involvements."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          
          {/* Subsection: Achievements */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2.5 text-lg font-bold text-white font-mono uppercase tracking-wider">
              <Trophy className="text-purple-400" size={20} />
              Achievements
            </h3>
            
            <div className="space-y-4">
              <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-purple-500/20 hover:bg-slate-900/60 transition-all duration-300 group shadow-md shadow-black/10">
                <h4 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                  HaXtreme 4.0 — Finalist (2025)
                </h4>
                <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">
                  IEEE Student Branch, University of Ruhuna
                </p>
              </div>
            </div>
          </div>

          {/* Subsection: Extracurricular Activities */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2.5 text-lg font-bold text-white font-mono uppercase tracking-wider">
              <Users className="text-purple-400" size={20} />
              Extracurricular Activities
            </h3>
            
            <div className="space-y-4">
              <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-purple-500/20 hover:bg-slate-900/60 transition-all duration-300 group shadow-md shadow-black/10">
                <h4 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                  Committee Member — Gaweshakayo Club
                </h4>
                <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">
                  Faculty of Engineering, University of Ruhuna
                </p>
              </div>

              <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-purple-500/20 hover:bg-slate-900/60 transition-all duration-300 group shadow-md shadow-black/10">
                <h4 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                  Technical Team Committee Member — XBOTIX 2025
                </h4>
                <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">
                  Robotix Competition
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

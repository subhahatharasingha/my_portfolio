import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          label="ACADEMICS"
          title="Education"
          description="A summary of my academic studies, institutional background, and university status."
        />

        {/* Education Card */}
        <div className="group p-6 md:p-8 bg-gradient-to-br from-slate-900 to-slate-900/40 border border-slate-800 hover:border-purple-500/20 hover:bg-slate-900/60 rounded-2xl transition-all duration-300 shadow-xl shadow-black/10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            
            {/* Degree & Institutional Details */}
            <div className="space-y-4 w-full">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-950/60 border border-purple-500/30 rounded-xl text-purple-400 group-hover:text-purple-300 transition-colors shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    BSc (Hons) in Computer Engineering
                  </h3>
                  <p className="text-sm font-semibold text-slate-300 font-mono">
                    University of Ruhuna
                  </p>
                </div>
              </div>

              {/* Institution Metadata */}
              <div className="flex flex-wrap gap-4 text-xs text-gray-400 pt-2">
                <span className="flex items-center gap-1.5 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                  <Calendar size={12} className="text-purple-400" />
                  2023 – Present
                </span>
                <span className="flex items-center gap-1.5 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                  <MapPin size={12} className="text-purple-400" />
                  Hapugala, Galle, Sri Lanka
                </span>
                <span className="flex items-center gap-1.5 bg-slate-950 px-3 py-1 rounded-full border border-slate-800 font-semibold text-purple-300">
                  <GraduationCap size={12} className="text-purple-400" />
                  Computer Engineering Undergraduate
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

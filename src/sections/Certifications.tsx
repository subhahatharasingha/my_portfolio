import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { certificationsData } from '../data/certifications';
import { Award, Calendar, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-900/30 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          label="VERIFICATIONS"
          title="Certifications"
          description="Fictional mock credentials representing specialized software studies and curriculum completions."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="group flex flex-col bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden hover:border-purple-500/20 hover:bg-slate-900/60 transition-all duration-300 shadow-md"
            >
              {/* Certificate Image Placeholder Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-950 flex items-center justify-center border-b border-slate-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback visual mock certificate SVG
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200" style="background:%230b0f19;"><rect x="10" y="10" width="280" height="180" fill="none" stroke="%23a855f7" stroke-width="2" stroke-opacity="0.3"/><circle cx="150" cy="70" r="24" fill="%23a855f7" fill-opacity="0.1" stroke="%23a855f7" stroke-width="1.5"/><path d="M144 64h12v12h-12z" fill="%23a855f7"/><text x="50%" y="125" dominant-baseline="middle" text-anchor="middle" fill="%23f3f4f6" font-family="sans-serif" font-weight="bold" font-size="8">COURSE COMPLETION</text><text x="50%" y="145" dominant-baseline="middle" text-anchor="middle" fill="%2394a3b8" font-family="sans-serif" font-size="6">Demo Certification Credential</text></svg>';
                  }}
                />
                
                {/* Decorative overlay icon */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-purple-950/80 border border-purple-500/30 rounded-xl text-purple-400">
                    <Award size={20} className="animate-spin-slow" />
                  </div>
                </div>
              </div>

              {/* Certificate Text Details */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold font-mono tracking-wider text-purple-400 uppercase bg-purple-950/40 border border-purple-800/30 px-2 py-0.5 rounded-full w-fit">
                    {cert.issuer}
                  </span>
                  
                  <h3 className="text-base font-bold text-white mt-3 mb-2 group-hover:text-purple-400 transition-colors duration-200">
                    {cert.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800/60">
                  <span className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Calendar size={12} />
                    {cert.date}
                  </span>
                  
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                    >
                      View Certificate
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import * as Icons from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { skillCategories } from '../data/skills';

interface CategoryIconProps {
  name: string;
  className?: string;
  size?: number;
}

// Dynamically look up Lucide icons by name
const CategoryIcon: React.FC<CategoryIconProps> = ({ name, className = "", size = 20 }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.Code className={className} size={size} />; // Fallback icon
  }
  return <IconComponent className={className} size={size} />;
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-slate-900/30 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          label="SKILLS & TOOLKIT"
          title="Technical Skills"
          description="A compact overview of the languages, frameworks, databases, and tools I work with."
        />

        {/* Categories Grid - 2 columns on desktop/tablet, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-5 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-purple-500/20 hover:bg-slate-900/60 hover:-translate-y-0.5 transition-all duration-300 group shadow-md shadow-black/10 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <h3 className="text-sm font-bold text-white font-mono flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-950/60 border border-purple-500/30 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors duration-200 shrink-0">
                    <CategoryIcon name={category.iconName} size={16} />
                  </div>
                  {category.title}
                </h3>

                {/* Skills Badges / Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-700/30 group-hover:border-slate-700/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

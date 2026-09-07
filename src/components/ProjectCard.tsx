import React from 'react';
import { Github, ExternalLink, Award } from 'lucide-react';
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, image, technologies, category, github, demo, featured } = project;

  return (
    <div className={`group flex flex-col h-full rounded-xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 ${
      featured 
        ? 'bg-slate-900/60 border-purple-500/30 hover:border-purple-500/60 shadow-lg shadow-purple-500/5' 
        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 shadow-md shadow-black/10'
    }`}>
      {/* Project Image Container */}
      <div className="relative aspect-video overflow-hidden bg-slate-950">
        {featured && (
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-purple-200 bg-purple-900/80 border border-purple-500/40 rounded-full backdrop-blur-md">
            <Award size={12} className="text-purple-400" />
            Featured Project
          </div>
        )}
        <div className="absolute top-3 right-3 z-10 px-2 py-0.5 text-xs font-medium text-slate-300 bg-slate-900/80 border border-slate-700/50 roundedbackdrop-blur-md">
          {category}
        </div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            // Fallback for missing image
            (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" viewBox="0 0 100 50" style="background:%231e293b;"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2364748b" font-family="sans-serif" font-size="6">Image Placeholder</text></svg>';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>

      {/* Project Details */}
      <div className="flex flex-col flex-grow p-5 md:p-6">
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/40"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Buttons / Links */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-800/60">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white transition-colors duration-200"
            aria-label={`View GitHub repository for ${title}`}
          >
            <Github size={15} />
            Repository
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors duration-200 ml-auto"
              aria-label={`View live demo of ${title}`}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

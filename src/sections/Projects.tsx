import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';

type CategoryFilter = 'All' | Project['category'];

const filters: CategoryFilter[] = ['All', 'Full Stack', 'DevOps', 'Mobile', 'Testing / QA', 'AI', 'Blockchain'];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  // Sorting: featured projects first
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <section id="projects" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          label="PORTFOLIO"
          title="Featured Projects"
          description="A selection of my projects across web systems, distributed ledgers, computer vision, and DevOps."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-300 border cursor-pointer ${
                activeFilter === filter
                  ? 'bg-purple-600 border-purple-500 text-white shadow-md shadow-purple-600/20'
                  : 'bg-slate-900/50 border-slate-800 text-gray-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sortedProjects.map((project) => (
            <div key={project.title} className="transition-all duration-500 animate-fade-in">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {sortedProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-sm">No projects found in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
};

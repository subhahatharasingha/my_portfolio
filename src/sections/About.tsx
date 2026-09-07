import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { BookOpen, Compass, Target, Github, Linkedin, FileText } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <SectionTitle
          label="ABOUT ME"
          title="My Background & Aspirations"
          description="A summary of my academic journey, core interests, and software engineering philosophy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Text Narrative Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-purple-500/20 transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-purple-950/40 border border-purple-500/20 rounded-lg text-purple-400">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Academic Journey</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    I am a Computer Engineering undergraduate at the University of Ruhuna, Sri Lanka. I am highly interested in software development and modern technologies, and I enjoy learning new tools, building practical solutions, and improving my technical and problem-solving skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-purple-500/20 transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-purple-950/40 border border-purple-500/20 rounded-lg text-purple-400">
                  <Compass size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Technical Focus</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    My areas of interest include full-stack web development, mobile application development, Artificial Intelligence, blockchain, and DevOps.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-purple-500/20 transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-purple-950/40 border border-purple-500/20 rounded-lg text-purple-400">
                  <Target size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Professional Ambition</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    My career goal is to become a skilled Software Engineer / Full-Stack Developer. Currently, I am focused on improving my technical knowledge and gaining practical software development experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Action Links Stack */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* GitHub Link */}
            <a
              href="https://github.com/subhahatharasingha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-purple-500/20 hover:bg-slate-900/60 transition-all duration-300 flex items-center gap-4 group shadow-md shadow-black/10"
            >
              <div className="p-3 bg-purple-950/60 border border-purple-500/30 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors shrink-0">
                <Github size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                  GitHub
                </h4>
                <p className="text-xs text-gray-500 mt-0.5">
                  View my GitHub
                </p>
              </div>
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/subhanya-kalpanee-a0529a371/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-purple-500/20 hover:bg-slate-900/60 transition-all duration-300 flex items-center gap-4 group shadow-md shadow-black/10"
            >
              <div className="p-3 bg-purple-950/60 border border-purple-500/30 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors shrink-0">
                <Linkedin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                  LinkedIn
                </h4>
                <p className="text-xs text-gray-500 mt-0.5">
                  Connect on LinkedIn
                </p>
              </div>
            </a>

            {/* CV Link */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-purple-500/20 hover:bg-slate-900/60 transition-all duration-300 flex items-center gap-4 group shadow-md shadow-black/10"
            >
              <div className="p-3 bg-purple-950/60 border border-purple-500/30 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors shrink-0">
                <FileText size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                  CV / Resume
                </h4>
                <p className="text-xs text-gray-500 mt-0.5">
                  View my CV
                </p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

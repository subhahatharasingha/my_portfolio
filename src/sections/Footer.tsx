import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative py-12 bg-slate-950 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">

        {/* Back to top button */}
        <button
          onClick={handleScrollToTop}
          className="absolute -top-0.5 left-1/2 -translate-x-1/2 p-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full border border-purple-500 shadow-lg shadow-purple-600/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/40"
          aria-label="Back to top of page"
        >
          <ArrowUp size={16} />
        </button>

        {/* Logo / Name */}
        <span className="font-mono font-extrabold text-sm tracking-widest text-slate-400 mt-4">
          SUBHANYA KALPANEE
        </span>

        {/* Quick Socials */}
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a
            href="https://github.com/subhahatharasingha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={14} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/subhanya-kalpanee-a0529a371/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>

          <a
            href="mailto:subanyakalpani323@gmail.com"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            aria-label="Email Subhanya Kalpanee"
          >
            <Mail size={14} />
            Email
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Subhanya Kalpanee. All rights reserved.
        </p>

      </div>
    </footer>
  );
};
import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-radial from-slate-900/60 via-gray-950 to-gray-950"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '6s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text Introduction */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in">
            <span className="text-purple-400 font-mono text-sm font-semibold tracking-wider mb-3">
              HI, I'M SUBHANYA KALPANEE
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none mb-6">
              Computer Engineering <br />
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
                Undergraduate
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6 font-mono">
              & Full-Stack Developer
            </h2>

            <p className="text-base sm:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
              I build modern, scalable web applications and enjoy working across frontend, backend, cloud platforms, and emerging technologies.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScrollTo('projects')}
                className="group flex items-center justify-center gap-2 cursor-pointer"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScrollTo('contact')}
                className="cursor-pointer"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/subhahatharasingha"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-gray-400 hover:text-white hover:border-slate-700 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/subhanya-kalpanee-a0529a371/"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-gray-400 hover:text-white hover:border-slate-700 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:subanyakalpani323@gmail.com"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-gray-400 hover:text-white hover:border-slate-700 transition-all duration-200"
                aria-label="Email Developer"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right: Creative Illustration / Profile Image Placeholder */}
          <div className="lg:col-span-5 flex justify-center items-center animate-fade-in-delay-1">
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer Glowing Gradient Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center p-3">
                <div className="w-full h-full rounded-xl bg-slate-950 border border-slate-800/60 overflow-hidden flex flex-col items-center justify-center relative">
                  <img
                    src="/images/profile/profileimage.png"
                    alt="Subhanya Kalpanee Profile Avatar"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // fallback to standard avatar vector style in SVG
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" style="background:%23030712;"><circle cx="100" cy="80" r="40" fill="%23a855f7" opacity="0.6"/><path d="M40 160c0-30 25-50 60-50s60 20 60 50v20H40v-20z" fill="%23a855f7" opacity="0.6"/><text x="50%" y="150" dominant-baseline="middle" text-anchor="middle" fill="%2394a3b8" font-family="sans-serif" font-weight="bold" font-size="10">Subhanya Kalpanee Avatar</text></svg>';
                    }}
                  />
                  {/* Decorative corner lines */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-purple-500/40"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-purple-500/40"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-purple-500/40"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-purple-500/40"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

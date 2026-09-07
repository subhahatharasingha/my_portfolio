import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  ArrowUpRight,
  Copy,
  Check,
  AlertCircle,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailAddress = 'subanyakalpani323@gmail.com';
  const githubUrl = 'https://github.com/subhahatharasingha';
  const linkedinUrl = 'https://www.linkedin.com/in/subhanya-kalpanee-a0529a371/';
  const locationText = 'Tangalle, Sri Lanka';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback if clipboard API fails
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear error for field once edited
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const tempErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      tempErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Please enter your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Please enter your message.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      const subjectEncoded = encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      );
      const bodyEncoded = encodeURIComponent(
        `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
      );

      const mailtoUrl = `mailto:${emailAddress}?subject=${subjectEncoded}&body=${bodyEncoded}`;

      // Open user's default email client with the draft
      window.location.href = mailtoUrl;
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionTitle
          label="GET IN TOUCH"
          title="Let's Connect"
          description="Have a project in mind, a job opportunity, or want to collaborate? Feel free to reach out. I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 items-start">
          
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-4">
                <Sparkles size={13} className="text-purple-400" />
                <span>Open for Opportunities</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Contact Information
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mt-2">
                Whether you're a recruiter, developer, or looking to build something impactful together, you can connect with me through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="group p-4 sm:p-5 bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800/80 hover:border-purple-500/30 rounded-2xl transition-all duration-300 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 bg-purple-950/60 border border-purple-500/30 rounded-xl text-purple-400 group-hover:scale-105 transition-transform">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider font-mono">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="text-sm sm:text-base font-semibold text-white hover:text-purple-400 transition-colors break-all"
                        title="Click to send an email"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 text-gray-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors cursor-pointer shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check size={15} className="text-emerald-400" />
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 sm:p-5 bg-slate-900/40 border border-slate-800/80 rounded-2xl transition-all duration-300 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 bg-purple-950/60 border border-purple-500/30 rounded-xl text-purple-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider font-mono">
                      Location
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      {locationText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* GitHub Link */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800/80 hover:border-purple-500/30 rounded-2xl transition-all duration-300 shadow-sm"
                  aria-label="Visit Subhanya's GitHub Profile"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-gray-300 group-hover:text-purple-400 transition-colors">
                      <Github size={18} />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-400 font-mono">Profile</span>
                      <span className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                        GitHub
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-gray-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>

                {/* LinkedIn Link */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800/80 hover:border-purple-500/30 rounded-2xl transition-all duration-300 shadow-sm"
                  aria-label="Visit Subhanya's LinkedIn Profile"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-gray-300 group-hover:text-purple-400 transition-colors">
                      <Linkedin size={18} />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-400 font-mono">Connect</span>
                      <span className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                        LinkedIn
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-gray-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-slate-900/30 border border-slate-800/90 rounded-2xl backdrop-blur-sm relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Send a Message</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Fill out your message below to send directly via your email client.
                  </p>
                </div>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors self-start sm:self-auto"
                >
                  Email Me Directly
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Status banner when submitted */}
              {isSubmitted && (
                <div className="flex items-start gap-3 p-4 mb-6 bg-purple-950/40 border border-purple-500/40 rounded-xl text-purple-200 animate-fade-in">
                  <CheckCircle2 size={20} className="text-purple-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-white">Email Client Triggered</h4>
                    <p className="text-xs text-purple-300/90 leading-relaxed">
                      Your default mail application has been opened with your message pre-filled. If it didn't open automatically, you can{' '}
                      <a
                        href={`mailto:${emailAddress}`}
                        className="font-semibold text-purple-200 underline hover:text-white"
                      >
                        click here to send directly
                      </a>
                      .
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 font-mono"
                    >
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-950 border rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all ${
                        errors.name
                          ? 'border-red-500/60'
                          : 'border-slate-800 focus:border-purple-500/50'
                      }`}
                      placeholder="e.g. Jane Smith"
                    />
                    {errors.name && (
                      <span className="flex items-center gap-1 text-xs text-red-400 mt-1.5 font-medium">
                        <AlertCircle size={12} />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 font-mono"
                    >
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-950 border rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all ${
                        errors.email
                          ? 'border-red-500/60'
                          : 'border-slate-800 focus:border-purple-500/50'
                      }`}
                      placeholder="e.g. jane@example.com"
                    />
                    {errors.email && (
                      <span className="flex items-center gap-1 text-xs text-red-400 mt-1.5 font-medium">
                        <AlertCircle size={12} />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 font-mono"
                  >
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-950 border rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all ${
                      errors.subject
                        ? 'border-red-500/60'
                        : 'border-slate-800 focus:border-purple-500/50'
                    }`}
                    placeholder="Project Inquiry / Job Opportunity"
                  />
                  {errors.subject && (
                    <span className="flex items-center gap-1 text-xs text-red-400 mt-1.5 font-medium">
                      <AlertCircle size={12} />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 font-mono"
                  >
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-950 border rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all resize-none ${
                      errors.message
                        ? 'border-red-500/60'
                        : 'border-slate-800 focus:border-purple-500/50'
                    }`}
                    placeholder="Write your message here..."
                  />
                  {errors.message && (
                    <span className="flex items-center gap-1 text-xs text-red-400 mt-1.5 font-medium">
                      <AlertCircle size={12} />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2 cursor-pointer py-3.5 text-sm font-semibold tracking-wide"
                >
                  <Send size={16} />
                  Send via Email Client
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


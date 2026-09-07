import React from 'react';

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  label,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`mb-12 md:mb-16 text-center ${className}`}>
      {label && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-purple-400 uppercase rounded-full bg-purple-950/40 border border-purple-800/30">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl mx-auto text-base text-gray-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

import React from 'react';
import { Award } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  awards?: string[];
  year: string;
}

const ProjectCard = ({ title, description, image, category, awards, year }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-[#252A3D]/30 border border-[#C5A572]/20 hover:border-[#C5A572] transition-all duration-300">
      {/* Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-[#C5A572]">{category}</span>
          {year && <span className="text-sm text-[#D4C4A1]">{year}</span>}
        </div>

        <h3 className="text-xl font-bold mb-2 text-[#C5A572] font-garamond group-hover:text-[#E5D5B7] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-[#D4C4A1] mb-4 line-clamp-2">
          {description}
        </p>

        {awards && awards.length > 0 && (
          <div className="space-y-2">
            {awards.map((award, index) => (
              <div key={index} className="flex items-center text-sm">
                <Award className="w-4 h-4 text-[#C5A572] mr-2" />
                <span className="text-[#E5D5B7]">{award}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F2E] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default ProjectCard;
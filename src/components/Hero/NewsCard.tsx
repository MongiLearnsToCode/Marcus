import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NewsCardProps {
  tag: string;
  title: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ tag, title, description }) => {
  return (
    <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-lg text-white">
      <span className="inline-block px-2 py-1 bg-white/10 rounded text-xs uppercase mb-4">
        {tag}
      </span>
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <p className="text-white/60 mb-6 text-sm leading-relaxed">{description}</p>
      <button className="absolute bottom-8 right-8 p-2 hover:bg-white/10 rounded-full transition-colors">
        <ArrowUpRight size={24} />
      </button>
    </div>
  );
};

export default NewsCard;
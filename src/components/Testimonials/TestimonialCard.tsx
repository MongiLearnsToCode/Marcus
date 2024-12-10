import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  image
}) => {
  return (
    <div className="bg-[#252A3D] p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
      <Quote className="text-[#C5A572] mb-6" size={32} />
      <p className="text-[#E5D5B7] mb-8 italic font-serif text-lg leading-relaxed">{quote}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={author}
          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-[#C5A572]"
        />
        <div>
          <h4 className="font-medium text-[#D4C4A1] font-serif">{author}</h4>
          <p className="text-[#E5D5B7] text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
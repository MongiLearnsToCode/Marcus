import React from 'react';
import { Film, Theater, Camera, Mic2 } from 'lucide-react';

interface ExpertiseItem {
  icon: React.ElementType;
  title: string;
  level: number;
  description: string;
  years: number;
}

const Expertise = () => {
  const expertiseItems: ExpertiseItem[] = [
    {
      icon: Film,
      title: 'Film Production',
      level: 95,
      description: 'Directing and producing award-winning films across multiple genres',
      years: 12
    },
    {
      icon: Theater,
      title: 'Theatre Performance',
      level: 90,
      description: 'Bringing stories to life on stage through powerful performances',
      years: 15
    },
    {
      icon: Camera,
      title: 'Screen Acting',
      level: 92,
      description: 'Creating memorable characters for film and television',
      years: 10
    },
    {
      icon: Mic2,
      title: 'Voice Acting',
      level: 88,
      description: 'Providing dynamic voice performances for various media',
      years: 8
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-[#1B1F2E]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-[#C5A572] mb-16 text-center">
          My Expertise
        </h2>

        <div className="space-y-8">
          {expertiseItems.map((item, index) => (
            <div 
              key={index}
              className="bg-[#252A3D]/30 rounded-lg p-6 hover:bg-[#252A3D]/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#C5A572]/10 flex items-center justify-center">
                  <item.icon size={24} className="text-[#C5A572]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-serif text-[#C5A572]">{item.title}</h3>
                  <p className="text-[#E5D5B7] text-sm">{item.description}</p>
                </div>
                <div className="ml-auto text-right">
                  <span className="text-[#C5A572] font-serif text-lg">{item.years}+</span>
                  <p className="text-[#E5D5B7] text-sm">Years</p>
                </div>
              </div>

              <div className="relative h-2 bg-[#252A3D] rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-[#C5A572] rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${item.level}%`,
                    animation: `slideRight 1.5s ease-out ${index * 0.2}s`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideRight {
          from { width: 0; }
          to { width: var(--final-width); }
        }
      `}</style>
    </section>
  );
};

export default Expertise;

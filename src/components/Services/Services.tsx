// @ts-ignore
import React from 'react';
import { Theater, Camera, Mic2, Film } from 'lucide-react';

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
  years: number;
  features: string[];
}

const Services = () => {
  const services: ServiceItem[] = [
    {
      icon: Film,
      title: 'Film Production',
      description: 'Award-winning producer bringing stories to life across various genres from horror to documentary.',
      years: 12,
      features: ['Short Films', 'Feature Films', 'Animation Series', 'International Co-productions'],
    },
    {
      icon: Theater,
      title: 'Theatre Performance',
      description: 'Bringing years of stage experience to both classical and contemporary productions.',
      years: 15,
      features: ['One-man Shows', 'Classical Theatre', 'Contemporary Drama', 'International Festivals'],
    },
    {
      icon: Camera,
      title: 'Screen Acting',
      description: 'Versatile acting approach allowing me to embody diverse characters across different mediums.',
      years: 10,
      features: ['Film', 'Television', 'Web Series', 'Commercials'],
    },
    {
      icon: Mic2,
      title: 'Voice Acting',
      description: 'Dynamic voice performances for various media projects.',
      years: 8,
      features: ['Animation', 'Video Games', 'Commercials', 'Audiobooks'],
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#1B1F2E]">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-[#C5A572]">
            My Expertise
          </h2>
          <p className="text-[#E5D5B7] text-lg md:text-xl">
            I bring stories to life through multiple creative disciplines, each crafted with passion and expertise.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#252A3D]/30 rounded-lg p-8 hover:bg-[#252A3D]/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                <div className="flex items-center flex-grow">
                  <div className="w-14 h-14 rounded-lg bg-[#C5A572]/10 flex items-center justify-center group-hover:bg-[#C5A572]/20 transition-all duration-300">
                    <service.icon size={28} className="text-[#C5A572]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-serif text-[#C5A572] mb-2">{service.title}</h3>
                    <p className="text-[#E5D5B7]">{service.description}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[#C5A572] font-serif text-2xl">{service.years}+</span>
                  <p className="text-[#E5D5B7] text-sm">Years Experience</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {service.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="bg-[#252A3D]/50 rounded-lg px-4 py-3 text-center group-hover:bg-[#252A3D] transition-all duration-300"
                  >
                    <span className="text-[#D4C4A1] text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
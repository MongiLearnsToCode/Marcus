import React from 'react';
import { Award, Camera, Theater, Radio, Mic2, Film, Presentation, Video } from 'lucide-react';
import { theme } from '../styles/theme';
import marcusProfile from '../assets/marcus-profile.webp';

const About = () => {
  const timeline = [
    {
      year: '2023',
      title: '"Zombie Date Night in Tlokweng"',
      description: 'I won Best Film and Audience Choice Award at Durban Film Mart NEFTI competition',
    },
    {
      year: '2017',
      title: '"Verses at Work"',
      description: 'My film won at NYC Hip-Hop Film Festival',
    },
    {
      year: '2016',
      title: 'Multiple Award Wins',
      description: 'My film "Verses at Work" won at Brazil International Film Festival and "Connection to Home" won Best Production at Goree Island International Arts Festival',
    },
    {
      year: '2013',
      title: 'Market Theatre Laboratory',
      description: 'I graduated with a diploma, majoring in performance, theatre making, writing and voice',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#1B1F2E]">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#C5A572] font-garamond">
            About Me
          </h2>
          <p className="text-[#E5D5B7] text-lg md:text-xl">
            I'm a multifaceted artist passionate about storytelling through film, theatre, and performance arts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-garamond font-bold text-[#C5A572] mb-8">
              My Journey
            </h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:w-px before:h-full 
                           before:bg-gradient-to-b before:from-[#C5A572] before:to-[#D4C4A1]"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 bg-[#C5A572] rounded-full 
                                transform -translate-x-1/2">
                  </div>
                  <div className="text-[#C5A572] font-garamond font-bold text-xl">
                    {item.year}
                  </div>
                  <h4 className="text-xl font-bold text-[#E5D5B7] mt-2">
                    {item.title}
                  </h4>
                  <p className="text-[#D4C4A1] mt-2 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative border-2 border-[#C5A572] rounded-lg overflow-hidden">
            <div className="aspect-[4/3] w-full h-full">
              <img 
                src={marcusProfile} 
                alt="Marcus Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="lg:col-span-2 mt-12">
            <h3 className="text-2xl md:text-3xl font-garamond font-bold text-[#C5A572] mb-8">
              My Awards
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Award 1 */}
              <div className="p-6 rounded-lg bg-[#252A3D]/30 border border-[#C5A572]/20">
                <Award className="w-8 h-8 text-[#C5A572] mb-4" />
                <h4 className="text-[#E5D5B7] font-bold mb-2">Best Film & Audience Choice Award</h4>
                <p className="text-[#D4C4A1] text-sm">Durban Film Mart NEFTI (2023)</p>
              </div>
              {/* Award 2 */}
              <div className="p-6 rounded-lg bg-[#252A3D]/30 border border-[#C5A572]/20">
                <Award className="w-8 h-8 text-[#C5A572] mb-4" />
                <h4 className="text-[#E5D5B7] font-bold mb-2">Winner</h4>
                <p className="text-[#D4C4A1] text-sm">NYC Hip-Hop Film Festival (2017)</p>
              </div>
              {/* Award 3 */}
              <div className="p-6 rounded-lg bg-[#252A3D]/30 border border-[#C5A572]/20">
                <Award className="w-8 h-8 text-[#C5A572] mb-4" />
                <h4 className="text-[#E5D5B7] font-bold mb-2">Best Production Award</h4>
                <p className="text-[#D4C4A1] text-sm">Goree Island International Arts Festival (2016)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
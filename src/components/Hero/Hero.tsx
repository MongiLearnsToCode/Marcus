import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#1B1F2E] pt-20 md:pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#252A3D] to-[#1B1F2E]"></div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-[#C5A572] font-garamond">
              Storyteller, Filmmaker, <br />
              & Performance Artist
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-[#E5D5B7] max-w-2xl">
              I craft compelling narratives through film, theatre, and performance, 
              bringing stories to life that resonate and inspire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#portfolio" 
                className="inline-flex items-center px-8 py-3 bg-[#C5A572] text-[#1B1F2E] rounded-lg 
                           hover:bg-[#D4C4A1] transition-colors duration-300 text-lg font-semibold"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center px-8 py-3 border-2 border-[#C5A572] text-[#C5A572] 
                           rounded-lg hover:bg-[#252A3D] transition-colors duration-300 text-lg font-semibold"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Hero Images */}
          <div className="relative h-[600px] grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-[250px] rounded-lg overflow-hidden border border-[#C5A572] bg-[#252A3D]">
                <picture>
                  <source
                    srcSet="/images/optimized/hero-1-400.jpg 400w,
                            /images/optimized/hero-1-800.jpg 800w"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <img
                    src="/images/optimized/hero-1.jpg"
                    alt="Performance art showcase"
                    width={400}
                    height={250}
                    loading="eager"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundImage: `url('/images/optimized/hero-1-placeholder.jpg')`,
                      backgroundSize: 'cover'
                    }}
                  />
                </picture>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden border border-[#C5A572] bg-[#252A3D]">
                <picture>
                  <source
                    srcSet="/images/optimized/hero-2-400.jpg 400w,
                            /images/optimized/hero-2-800.jpg 800w"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <img
                    src="/images/optimized/hero-2.jpg"
                    alt="Filmmaking in action"
                    width={400}
                    height={300}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundImage: `url('/images/optimized/hero-2-placeholder.jpg')`,
                      backgroundSize: 'cover'
                    }}
                  />
                </picture>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden border border-[#C5A572] bg-[#252A3D]">
                <picture>
                  <source
                    srcSet="/images/optimized/hero-3-400.jpg 400w,
                            /images/optimized/hero-3-800.jpg 800w"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <img
                    src="/images/optimized/hero-3.jpg"
                    alt="Theatrical performance"
                    width={400}
                    height={300}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundImage: `url('/images/optimized/hero-3-placeholder.jpg')`,
                      backgroundSize: 'cover'
                    }}
                  />
                </picture>
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden border border-[#C5A572] bg-[#252A3D]">
                <picture>
                  <source
                    srcSet="/images/optimized/hero-4-400.jpg 400w,
                            /images/optimized/hero-4-800.jpg 800w"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <img
                    src="/images/optimized/hero-4.jpg"
                    alt="Storytelling moment"
                    width={400}
                    height={250}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundImage: `url('/images/optimized/hero-4-placeholder.jpg')`,
                      backgroundSize: 'cover'
                    }}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1B1F2E] to-transparent"></div>
    </section>
  );
};

export default Hero;
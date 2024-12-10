import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-night-blue">
      {/* Spotlight Effects */}
      <div className="absolute inset-0 bg-gradient-spotlight from-stage-purple/20 via-transparent to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-spotlight-gold/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-drama-red/20 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 pt-32 pb-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Featured Tag */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-spotlight-gold" />
            <span className="text-cream/90 text-sm">Featured Performer</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
            <span className="block text-cream">Bringing Stories</span>
            <span className="gradient-text">To Life</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-cream/80 max-w-2xl mb-8 leading-relaxed">
            Award-winning performer with a passion for transforming narratives into 
            unforgettable experiences. From stage to screen, every performance is a 
            journey into the extraordinary.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#portfolio" className="btn-primary group">
              View Portfolio
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary">
              Book for Your Project
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-cream/10">
            <div>
              <div className="text-3xl font-display font-bold text-spotlight-gold mb-2">15+</div>
              <div className="text-cream/70">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-spotlight-gold mb-2">100+</div>
              <div className="text-cream/70">Stage Shows</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-spotlight-gold mb-2">50+</div>
              <div className="text-cream/70">Film Projects</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-spotlight-gold mb-2">25+</div>
              <div className="text-cream/70">Awards Won</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="text-cream/50 text-sm mb-2">Scroll to Explore</div>
        <div className="w-0.5 h-16 bg-gradient-to-b from-cream/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
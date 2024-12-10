import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Marcus has an exceptional ability to bring out the best in every story. His direction transformed our production into something truly magical.",
      author: "Sarah Johnson",
      role: "Theater Producer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      quote: "Working with Marcus on our documentary was an incredible experience. His vision and storytelling expertise brought our message to life.",
      author: "David Chen",
      role: "Documentary Subject",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      quote: "The podcast series Marcus produced exceeded all our expectations. His attention to detail and creative approach made each episode outstanding.",
      author: "Lisa Williams",
      role: "Media Executive",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#1B1F2E]">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-serif mb-4 text-[#C5A572]">Client Testimonials</h2>
          <p className="text-[#E5D5B7] mb-12">
            What industry professionals and clients say about working with me
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
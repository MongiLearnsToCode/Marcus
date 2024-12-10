import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1B1F2E] text-[#E5D5B7] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif text-[#C5A572] mb-4">Marcus Mabusela</h3>
            <p className="text-[#E5D5B7] mb-6">
              Storyteller, filmmaker, and creative director passionate about bringing powerful narratives to life through various mediums.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/oageng.mabusela" target="_blank" rel="noopener noreferrer" className="text-[#D4C4A1] hover:text-[#C5A572] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/MarcusMabusela" target="_blank" rel="noopener noreferrer" className="text-[#D4C4A1] hover:text-[#C5A572] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/marcusmabusela/" target="_blank" rel="noopener noreferrer" className="text-[#D4C4A1] hover:text-[#C5A572] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/marcus-mabusela-2132586a/" target="_blank" rel="noopener noreferrer" className="text-[#D4C4A1] hover:text-[#C5A572] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@TheFilmBizShow" target="_blank" rel="noopener noreferrer" className="text-[#D4C4A1] hover:text-[#C5A572] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif text-[#C5A572] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-[#D4C4A1] hover:text-[#C5A572] transition-colors">About Me</a></li>
              <li><a href="#portfolio" className="text-[#D4C4A1] hover:text-[#C5A572] transition-colors">My Portfolio</a></li>
              <li><a href="#expertise" className="text-[#D4C4A1] hover:text-[#C5A572] transition-colors">My Expertise</a></li>
              <li><a href="#testimonials" className="text-[#D4C4A1] hover:text-[#C5A572] transition-colors">Client Testimonials</a></li>
              <li><a href="#contact" className="text-[#D4C4A1] hover:text-[#C5A572] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif text-[#C5A572] mb-4">Contact</h4>
            <ul className="space-y-2 text-[#E5D5B7]">
              <li>Johannesburg, South Africa</li>
              <li>marcus@metricproudctions.com</li>
              <li>+27 71 490 5070</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#252A3D] mt-12 pt-8 text-center text-[#D4C4A1]">
          <p>&copy; {new Date().getFullYear()} Marcus Mabusela. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
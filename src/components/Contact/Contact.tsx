import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'marcus@metricproudctions.com',
      link: 'mailto:marcus@metricproudctions.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+27 71 490 5070',
      link: 'tel:+27714905070'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Johannesburg, South Africa',
      link: '#'
    }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      link: 'https://www.instagram.com/marcusmabusela/', 
      label: 'Instagram' 
    },
    { 
      icon: Twitter, 
      link: 'https://x.com/MarcusMabusela', 
      label: 'Twitter' 
    },
    { 
      icon: Linkedin, 
      link: 'https://www.linkedin.com/in/marcus-mabusela-2132586a/', 
      label: 'LinkedIn' 
    },
    { 
      icon: Facebook, 
      link: 'https://www.facebook.com/oageng.mabusela', 
      label: 'Facebook' 
    },
    { 
      icon: Youtube, 
      link: 'https://www.youtube.com/@TheFilmBizShow', 
      label: 'YouTube' 
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#1B1F2E]">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#C5A572] font-garamond">
            Get in Touch
          </h2>
          <p className="text-[#E5D5B7] text-lg md:text-xl">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center p-4 rounded-lg bg-[#252A3D]/30 border border-[#C5A572]/20 
                           hover:border-[#C5A572] transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 text-[#C5A572] mr-4" />
                  <div>
                    <p className="text-sm text-[#D4C4A1]">{item.label}</p>
                    <p className="text-[#E5D5B7] font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-[#C5A572]/20">
              <h3 className="text-xl font-garamond font-bold text-[#C5A572] mb-6">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-[#252A3D]/30 border border-[#C5A572]/20 
                             flex items-center justify-center text-[#C5A572]
                             hover:border-[#C5A572] hover:text-[#E5D5B7] transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
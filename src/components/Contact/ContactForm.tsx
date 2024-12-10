import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#E5D5B7] mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#252A3D]/30 border border-[#C5A572]/20 
                     text-[#E5D5B7] placeholder-[#D4C4A1]/50
                     focus:outline-none focus:border-[#C5A572] transition-colors duration-300"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#E5D5B7] mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#252A3D]/30 border border-[#C5A572]/20 
                     text-[#E5D5B7] placeholder-[#D4C4A1]/50
                     focus:outline-none focus:border-[#C5A572] transition-colors duration-300"
            placeholder="Your email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[#E5D5B7] mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-[#252A3D]/30 border border-[#C5A572]/20 
                   text-[#E5D5B7] placeholder-[#D4C4A1]/50
                   focus:outline-none focus:border-[#C5A572] transition-colors duration-300"
          placeholder="Message subject"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#E5D5B7] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg bg-[#252A3D]/30 border border-[#C5A572]/20 
                   text-[#E5D5B7] placeholder-[#D4C4A1]/50
                   focus:outline-none focus:border-[#C5A572] transition-colors duration-300 resize-none"
          placeholder="Your message"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full px-8 py-4 bg-[#C5A572] text-[#1B1F2E] rounded-lg font-semibold
                 hover:bg-[#D4C4A1] transition-colors duration-300 flex items-center justify-center"
      >
        Send Message
        <Send className="w-5 h-5 ml-2" />
      </button>
    </form>
  );
};

export default ContactForm;
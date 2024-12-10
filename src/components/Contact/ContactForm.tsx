import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
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
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-[#252A3D]/30 border border-[#C5A572]/20 
                     text-[#E5D5B7] placeholder-[#D4C4A1]/50
                     focus:outline-none focus:border-[#C5A572] transition-colors duration-300"
            placeholder="Your message"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`flex items-center justify-center w-full md:w-auto px-8 py-3 rounded-lg 
                     bg-[#C5A572] text-[#0F1729] font-medium
                     hover:bg-[#B89461] transition-colors duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </form>

      {submitStatus === 'success' && (
        <div className="p-4 rounded-lg bg-green-500/10 text-green-500">
          Message sent successfully!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-4 rounded-lg bg-red-500/10 text-red-500">
          Failed to send message. Please try again.
        </div>
      )}
    </div>
  );
};

export default ContactForm;
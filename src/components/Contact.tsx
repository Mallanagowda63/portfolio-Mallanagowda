import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalConfig } from '../data/config';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Simulate async submission
    setStatus('loading');
    setErrorMessage('');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const contactCards = [
    {
      title: "Phone",
      value: personalConfig.phone,
      href: `tel:${personalConfig.phone}`,
      icon: Phone,
      color: "text-emerald-400"
    },
    {
      title: "Email",
      value: personalConfig.email,
      href: `mailto:${personalConfig.email}`,
      icon: Mail,
      color: "text-cyan-400"
    },
    {
      title: "Location",
      value: personalConfig.location,
      href: "#contact",
      icon: MapPin,
      color: "text-amber-400"
    },
    {
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      href: personalConfig.linkedin,
      icon: Linkedin,
      color: "text-blue-400"
    },
    {
      title: "GitHub",
      value: "View GitHub Profile",
      href: personalConfig.github,
      icon: Github,
      color: "text-indigo-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="space-y-2 mb-12 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold">
            <span>// GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Let's Build Something Together
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            "I'm always interested in discussing software development, cloud engineering, interesting products, and new opportunities."
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Information Cards */}
          <motion.div
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {contactCards.map((card) => {
              const CardIcon = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.title !== 'Email' ? '_blank' : undefined}
                  rel={card.title !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="glass-card glass-card-hover rounded-xl p-5 border border-slate-800 flex items-center gap-4 block group"
                >
                  <div className={`p-3 rounded-xl bg-dark-950 border border-slate-800 ${card.color}`}>
                    <CardIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">{card.title}</span>
                    <span className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {card.value}
                    </span>
                  </div>
                </a>
              );
            })}

            {/* Direct PDF Resume banner */}
            <div className="glass-card rounded-xl p-5 border border-slate-800/80 bg-slate-900/60 mt-6">
              <h4 className="text-xs font-mono text-cyan-400 font-bold mb-1 uppercase">RESUME AVAILABILITY</h4>
              <p className="text-xs text-slate-300 mb-3">
                Need a PDF copy of my technical resume for application records?
              </p>
              <a
                href={personalConfig.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-950 border border-slate-700 hover:border-cyan-500 text-xs font-semibold text-slate-200 transition-colors"
              >
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Contact Form */}
          <motion.div
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Full-Stack / Cloud Engineering Opportunity"
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Mallanagowda, I came across your portfolio and would like to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                />
              </div>

              {/* Status Feedback */}
              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-dark-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

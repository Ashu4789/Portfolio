import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold text-white"><span className="text-emerald-500">07.</span> Contact</h2>
        <div className="h-[1px] bg-slate-700 flex-1 max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
          <p className="text-slate-400 leading-relaxed mb-8">
            I'm currently looking for new opportunities. Whether you have a question, 
            a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors">
              <Mail className="w-6 h-6 text-emerald-500" />
              <span>ashutosh@example.com</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors">
              <Phone className="w-6 h-6 text-emerald-500" />
              <span>+91 9876543210</span>
            </div>
          </div>

          <div className="flex gap-6 mt-12">
            <a href="#" className="w-12 h-12 glass flex items-center justify-center rounded-full hover:bg-emerald-500 hover:text-slate-900 transition-all text-slate-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 glass flex items-center justify-center rounded-full hover:bg-emerald-500 hover:text-slate-900 transition-all text-slate-300">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-slate-900/50 border border-emerald-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-slate-900/50 border border-emerald-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea 
                id="message" 
                required
                rows={4}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-slate-900/50 border border-emerald-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

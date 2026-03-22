import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Code2, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white"><span className="text-emerald-500">07.</span> Contact</h2>
        <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-1 max-w-xs transition-colors"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">Get In Touch</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 transition-colors">
            I'm currently looking for new opportunities. Whether you have a question, 
            a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              <Mail className="w-6 h-6 text-emerald-500 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold transition-colors">Official Email</span>
                <a href="mailto:ashutoshmohanty2004@gmail.com">ashutoshmohanty2004@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              <Mail className="w-6 h-6 text-emerald-500 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold transition-colors">For Queries</span>
                <a href="mailto:nationalacdasboard2025@gmail.com">nationalacdasboard2025@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-12 flex-wrap">
            <a href="https://github.com/Ashu4789" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass flex items-center justify-center rounded-full hover:bg-emerald-500 hover:text-white dark:hover:text-white transition-all text-slate-600 dark:text-slate-300" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ashutoshmohanty24" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass flex items-center justify-center rounded-full hover:bg-emerald-500 hover:text-white dark:hover:text-white transition-all text-slate-600 dark:text-slate-300" title="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://x.com/AshutoshMo72374" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass flex items-center justify-center rounded-full hover:bg-emerald-500 hover:text-white dark:hover:text-white transition-all text-slate-600 dark:text-slate-300" title="X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/ashu_4789x/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass flex items-center justify-center rounded-full hover:bg-emerald-500 hover:text-white dark:hover:text-white transition-all text-slate-600 dark:text-slate-300" title="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://leetcode.com/u/Ashutosh4789/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass flex items-center justify-center rounded-full hover:bg-emerald-500 hover:text-white dark:hover:text-white transition-all text-slate-600 dark:text-slate-300" title="LeetCode">
              <Code2 className="w-5 h-5" />
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
              <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 transition-colors">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                placeholder="User Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 transition-colors">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                placeholder="User Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 transition-colors">Message</label>
              <textarea 
                id="message" 
                required
                rows={4}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} 
              {!isSubmitting && <Send className="w-4 h-4" />}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-emerald-500/20 border border-emerald-500 text-emerald-400 rounded-lg text-sm text-center mt-4">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500 text-red-400 rounded-lg text-sm text-center mt-4">
                Something went wrong. Please try again or email me directly.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "87df2e5c-9971-40d0-bbea-1dcfeee12f19");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#0A0A0A] flex flex-col items-center overflow-hidden">
      {/* Marquee Line */}
      <div className="w-full flex whitespace-nowrap border-y border-white/10 py-4 mb-24">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 15 }}
          className="flex items-center gap-8 px-4"
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-4xl md:text-6xl font-display font-medium text-white/20 uppercase">Let's work together</span>
              <span className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
              <span className="text-4xl md:text-6xl font-display font-medium text-white/20 uppercase">Let's work</span>
              <span className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-5xl w-full px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[32px] p-[1px] overflow-hidden bg-gradient-to-b from-[var(--color-accent)]/40 via-[var(--color-accent)]/5 to-transparent"
        >
          {/* Inner Content Container */}
          <div className="relative bg-[#0A0A0A]/90 backdrop-blur-sm rounded-[31px] p-12 md:p-20 h-full w-full flex flex-col items-center">
            {/* Inner Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/10 via-transparent to-transparent rounded-[31px] pointer-events-none" />
            
            <div className="relative w-full flex flex-col items-center mb-16 z-10">
              <h2 className="text-4xl md:text-6xl font-display font-medium text-center">
                 Let's work together!
              </h2>
            </div>

            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="w-full space-y-12" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors peer text-sm"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-0 text-xs text-[var(--color-text-secondary)] uppercase tracking-widest transition-all peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-[var(--color-accent)] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[10px]"
                  >
                    FULL NAME *
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors peer text-sm"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 top-0 text-xs text-[var(--color-text-secondary)] uppercase tracking-widest transition-all peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-[var(--color-accent)] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[10px]"
                  >
                    EMAIL *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors peer text-sm"
                    placeholder=" "
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-0 top-0 text-xs text-[var(--color-text-secondary)] uppercase tracking-widest transition-all peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-[var(--color-accent)] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[10px]"
                  >
                    PHONE (OPTIONAL)
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors peer text-sm"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-0 top-0 text-xs text-[var(--color-text-secondary)] uppercase tracking-widest transition-all peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-[var(--color-accent)] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[10px]"
                  >
                    SUBJECT *
                  </label>
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors peer text-sm resize-none"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 top-0 text-xs text-[var(--color-text-secondary)] uppercase tracking-widest transition-all peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-[var(--color-accent)] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  MESSAGE (OPTIONAL)
                </label>
              </div>

              <div className="pt-8 flex flex-col items-center gap-4">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="px-10 py-4 bg-[var(--color-accent)] text-black font-semibold rounded-full hover:bg-white transition-all duration-300 cursor-pointer tracking-widest uppercase text-sm disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)]"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm tracking-wide"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </div>
            </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full flex flex-col items-center justify-center py-16 space-y-8 min-h-[400px]"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 20 }}
                  className="w-24 h-24 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center relative"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-[var(--color-accent)]">
                    <motion.path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    />
                  </svg>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="text-center space-y-3"
                >
                  <h3 className="text-3xl font-display font-medium text-white">Message Sent!</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm tracking-wide">Thanks for reaching out. I'll get back to you shortly.</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Simple Divider Line */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-32">
        <div className="w-full h-[1px] bg-white/10"></div>
      </div>
    </section>
  );
}

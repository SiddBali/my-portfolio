import { motion } from 'motion/react';

export default function Intro() {
  const tags = ['Growth Mindset', 'Problem Solver', 'Quick Learner', 'Creative Thinking','Adaptability', 'Teamwork'];

  return (
    <section className="py-24 relative bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          {/* Star Icon */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--color-accent)]">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-4xl font-sans font-light leading-relaxed mb-16"
        >
          I’m Siddheshwar Bali, a Full Stack Developer with a strong interest in AI-driven applications and modern web technologies. I build responsive and scalable systems that focus on performance, usability, and real-world problem solving.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-sm bg-white/5 text-sm text-[var(--color-text-secondary)] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import introVideo from '../../assets/intro.mp4';

export default function Hero() {
  const { scrollY } = useScroll();
  
  // As the user scrolls down, the name will move UP, fade out, and become blurred
  const titleY = useTransform(scrollY, [0, 800], [0, -300]);
  const titleOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const titleBlurInput = useTransform(scrollY, [0, 600], [0, 20]);
  // We need to map the blur value to a CSS string
  const filter = useTransform(titleBlurInput, (val) => `blur(${val}px)`);

  // For the right sidebar: move up and fade out on scroll
  // By reducing the input range [0, 200], it will move up much faster and earlier
  const sidebarY = useTransform(scrollY, [0, 200], [0, -250]);
  const sidebarOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#0A0A0A]">
      {/* Fixed Right Elements */}
      <motion.div 
        style={{ y: sidebarY, opacity: sidebarOpacity }}
        className="fixed right-6 md:right-8 top-0 bottom-0 flex flex-col justify-center items-center z-50 pointer-events-none hidden md:flex"
      >
        <div className="flex-1 flex items-end pb-8">
          <p className="text-[var(--color-text-secondary)] text-xs tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            +91 9284478899
          </p>
        </div>
        <div className="w-[1px] h-16 bg-white/20 mb-8" />
        <div className="flex flex-col gap-4 pointer-events-auto pb-8">
          <a href="https://github.com/SiddBali" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-accent)] transition-all">
            <Github size={14} />
          </a>
          <a href="https://www.linkedin.com/in/siddheshwar-bali-814233260" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-accent)] transition-all">
            <Linkedin size={14} />
          </a>
          <a href="https://www.instagram.com/sidd.bali/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-accent)] transition-all">
            <Instagram size={14} />
          </a>
        </div>
      </motion.div>

      {/* Center Background Video */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/60 to-[#0A0A0A] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/80 z-10" />
        <video
          src={introVideo}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-70"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-20 flex flex-col justify-end h-full mt-[20vh]">
        
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center w-full mb-8 gap-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-sm"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/30 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs font-medium text-white/100 uppercase tracking-wider transition-colors duration-300 group-hover:text-blue-600">Available for work</span>
            </div>
            <p className="text-xl md:text-2xl text-white/90 leading-snug font-light">
              Pune-based Full Stack Developer crafting scalable web apps
            </p>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:pr-24"
          >
            <a
              href="#contact"
              className="group flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-light)] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--color-accent)] group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </div>
              Let's Collaborate
            </a>
          </motion.div>
        </div>

        {/* Huge Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ y: titleY, opacity: titleOpacity, filter, transformOrigin: 'center' }}
          className="text-[14vw] md:text-[11vw] font-display font-bold leading-none tracking-tighter text-center w-full flex justify-center mt-auto pb-10"
        >
          {"SIDDHESHWAR".split("").map((letter, index) => (
            <span
              key={index}
              className="text-white/40 transition-all duration-700 hover:text-red-400 hover:drop-shadow-[0_0_40px_rgba(248,113,113,0.8)] hover:duration-0 cursor-default"
            >
              {letter}
            </span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
}

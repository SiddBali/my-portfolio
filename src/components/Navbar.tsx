import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8 pointer-events-none">
      <div className="max-w-[1400px] mx-auto flex justify-between items-start">
        {/* Left Pill */}
        <div className="pointer-events-auto flex items-center gap-4 bg-[#111] rounded-full px-4 py-2.5 border border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                <path d="M12 2L2 22h20L12 2z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-white pr-2">SIDD BALI</span>
          </div>
          <div className="w-[1px] h-4 bg-white/20" />
          <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-[var(--color-accent)] transition-colors pl-2">
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 md:left-8 bg-[#111] border border-white/10 p-6 rounded-2xl flex flex-col gap-4 pointer-events-auto shadow-2xl min-w-[200px]"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

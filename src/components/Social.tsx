import { motion } from 'motion/react';
import { Globe } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord, FaYoutube } from 'react-icons/fa';

export default function Social() {
  const platforms = [
    { name: 'LinkedIn', icon: FaLinkedin, color: 'hover:text-[#0A66C2]', link: 'https://www.linkedin.com/in/siddheshwar-bali-814233260' },
    { name: 'GitHub', icon: FaGithub, color: 'hover:text-white', link: 'https://github.com/SiddBali' },
    { name: 'Instagram', icon: FaInstagram, color: 'hover:text-[#E4405F]', link: 'https://www.instagram.com/sidd.bali/' },
    { name: 'Discord', icon: FaDiscord, color: 'hover:text-[#5865F2]', link: 'https://discord.com/users/1088790535369654356' },
    { name: 'YouTube', icon: FaYoutube, color: 'hover:text-[#FF0000]', link: 'https://www.youtube.com/@SiddheshBali' },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden border-y border-white/10">
      <div className="flex flex-col items-center justify-center">
        {/* Social Marquee */}
        <div className="flex whitespace-nowrap w-full border-b border-white/10 pb-8 mb-8">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
            className="flex items-center gap-8 px-4"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                <div className="w-16 h-16 bg-[var(--color-accent)] rounded-lg flex items-center justify-center text-black">
                  <Globe size={40} strokeWidth={1.5} />
                </div>
                <span className="text-7xl md:text-9xl font-display font-medium text-white/50">Social Media</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Platforms */}
        <div className="w-full flex flex-col w-full">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <a 
                key={platform.name} 
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-8 text-center block ${index !== platforms.length - 1 ? 'border-b border-white/10' : ''}`}
              >
                <h2 className={`group relative flex items-center justify-center gap-6 text-5xl md:text-8xl font-display font-medium text-white/30 transition-all duration-500 cursor-pointer ${platform.color}`}>
                  <div className="w-0 overflow-hidden group-hover:w-16 md:group-hover:w-24 transition-all duration-500 ease-out flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <Icon size={64} />
                    </div>
                  </div>
                  <span className="relative z-10 transform group-hover:tracking-widest transition-all duration-500">{platform.name}</span>
                  <div className="w-0 overflow-hidden group-hover:w-16 md:group-hover:w-24 transition-all duration-500 ease-out flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="transform rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <Icon size={64} />
                    </div>
                  </div>
                </h2>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

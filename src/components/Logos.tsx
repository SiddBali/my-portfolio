import { motion } from 'motion/react';
import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiPython,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiKubernetes
} from 'react-icons/si';
import { FaInfinity } from 'react-icons/fa';

export default function Logos() {
  const baseLogos = [
    { name: 'HTML5', icon: SiHtml5, color: 'group-hover:text-[#E34F26] group-hover:border-[#E34F26]' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'group-hover:text-[#06B6D4] group-hover:border-[#06B6D4]' },
    { name: 'JavaScript', icon: SiJavascript, color: 'group-hover:text-[#F7DF1E] group-hover:border-[#F7DF1E]' },
    { name: 'React', icon: SiReact, color: 'group-hover:text-[#61DAFB] group-hover:border-[#61DAFB]' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'group-hover:text-[#339933] group-hover:border-[#339933]' },
    { name: 'Git', icon: SiGit, color: 'group-hover:text-[#F05032] group-hover:border-[#F05032]' },
    { name: 'GitHub', icon: SiGithub, color: 'group-hover:text-[#ffffff] group-hover:border-[#ffffff]' },
    { name: 'Python', icon: SiPython, color: 'group-hover:text-[#3776AB] group-hover:border-[#3776AB]' },
    { name: 'Django', icon: SiDjango, color: 'group-hover:text-[#092E20] group-hover:border-[#092E20]' },
    { name: 'MongoDB', icon: SiMongodb, color: 'group-hover:text-[#47A248] group-hover:border-[#47A248]' },
    { name: 'MySQL', icon: SiMysql, color: 'group-hover:text-[#4479A1] group-hover:border-[#4479A1]' },
    { name: 'Docker', icon: SiDocker, color: 'group-hover:text-[#2496ED] group-hover:border-[#2496ED]' },
    { name: 'Kubernetes', icon: SiKubernetes, color: 'group-hover:text-[#326CE5] group-hover:border-[#326CE5]' },
    { name: 'DevOps', icon: FaInfinity, color: 'group-hover:text-[#007BFF] group-hover:border-[#007BFF]' },
  ];

  // Duplicate the array to create a seamless scrolling effect
  const logos = [...baseLogos, ...baseLogos];

  return (
    <section className="py-20 bg-[#0A0A0A] relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-sm text-[var(--color-text-secondary)] mb-12">
          Technologies I Work With
        </p>
      </div>
      
      <div className="flex whitespace-nowrap w-full group/marquee">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 40 }}
          className="flex items-center gap-6 px-3 group-hover/marquee:[animation-play-state:paused]"
        >
          {logos.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div
                key={`${logo.name}-${index}`}
                className={`group w-[160px] md:w-[200px] aspect-[3/2] flex-shrink-0 border border-white/5 flex flex-col items-center justify-center gap-4 text-white/50 transition-all duration-300 cursor-pointer bg-[#0A0A0A] hover:bg-white/5 ${logo.color}`}
              >
                <div className="w-10 h-10 transition-colors duration-300 flex items-center justify-center">
                  <Icon size={40} />
                </div>
                <span className="font-sans font-medium text-sm tracking-wide">{logo.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

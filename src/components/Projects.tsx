import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Alcohol Detection and Vehicle Safety Alert System',
      where: 'Pune',
      year: '2024',
      // Car steering wheel / driving image
      image: 'https://images.unsplash.com/photo-1511994714008-b6d68af4ce1f?w=1200&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'AI-Powered Smart E-Learning Platform',
      where: 'Pune',
      year: '2025',
      // Laptop / learning / tech image
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'Healthcare Appointment and Patient Management System',
      where: 'India',
      year: '2025',
      // Doctor with tablet / healthcare image
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--color-accent)] mb-6">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h2 className="text-5xl md:text-8xl font-display font-medium tracking-tighter uppercase">PROJECTS</h2>
        </motion.div>

        <div className="space-y-0 border-t border-white/10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row border-b border-white/10 group cursor-pointer"
            >
              {/* Project Info */}
              <div className="w-full lg:w-1/3 flex flex-col justify-between py-12 pr-8 border-r-0 lg:border-r border-white/10">
                <div>
                  <p className="text-sm text-white mb-2">Features</p>
                  <h3 className="text-2xl md:text-3xl font-sans text-[var(--color-accent)] underline decoration-[var(--color-accent)] underline-offset-4">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex items-end justify-between mt-16">
                  <div className="flex gap-12">
                    <div>
                      <p className="text-xs text-[var(--color-text-secondary)] mb-1">Where</p>
                      <p className="text-sm text-white uppercase">{project.where}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-secondary)] mb-1">Year</p>
                      <p className="text-sm text-white">{project.year}</p>
                    </div>
                  </div>
                  <a 
                    href="https://github.com/SiddBali" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white transition-all duration-300 z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
                  </a>
                </div>
              </div>

              {/* Project Image */}
              <div className="w-full lg:w-2/3 p-8 lg:p-12 flex items-center justify-center bg-[#111]">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

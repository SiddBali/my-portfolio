import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      id: '1',
      title: 'FULL STACK DEVELOPMENT',
      description: 'Building end-to-end, scalable web applications from interactive React frontends to robust Node.js and Python backends.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80',
    },
    {
      id: '2',
      title: 'AI & MACHINE LEARNING INTEGRATION',
      description: 'Implementing intelligent features, predictive models, and AI-driven solutions to solve complex business problems.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80',
    },
    {
      id: '3',
      title: 'BACKEND ARCHITECTURE',
      description: 'Designing secure, high-performance APIs and microservices using Node.js, Express, Django, and modern best practices.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80',
    },
    {
      id: '4',
      title: 'DATABASE MANAGEMENT',
      description: 'Architecting and optimizing relational and NoSQL databases like MySQL and MongoDB for fast data retrieval and storage.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80',
    },
    {
      id: '5',
      title: 'DEVOPS & DEPLOYMENT',
      description: 'Containerizing applications with Docker and ensuring smooth CI/CD pipelines and deployment strategies.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&auto=format&fit=crop&q=80',
    },
    {
      id: '6',
      title: 'DATA ANALYTICS',
      description: 'Developing comprehensive visual insights and extracting actionable intelligence from raw data stores.',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1200&auto=format&fit=crop&q=80',
    },
    {
      id: '7',
      title: 'CONTENT CREATION',
      description: 'Crafting compelling technical documentation, articles, and brand content that conveys complex ideas simply.',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="services" className="py-32 bg-[#0A0A0A]">
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
          <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter uppercase">SERVICES</h2>
        </motion.div>

        <div className="space-y-0 border-t border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 px-6 flex items-center justify-between text-left group transition-all duration-500 hover:bg-[var(--color-accent)] hover:text-black rounded-lg"
              >
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="text-sm text-[var(--color-text-secondary)] group-hover:text-black/70 transition-colors duration-500">({service.id})</span>
                  <h3 className="text-2xl md:text-3xl font-sans uppercase group-hover:translate-x-4 transition-transform duration-500">
                    {service.title}
                  </h3>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-[var(--color-accent)] group-hover:text-black transition-colors duration-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[var(--color-accent)] group-hover:text-black transition-colors duration-500" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 relative">
                      <div className="relative aspect-[21/9] rounded-lg overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover filter brightness-75 sepia-[0.3] hue-rotate-[-20deg]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 md:p-12">
                          <p className="text-xl md:text-3xl text-white max-w-4xl leading-snug">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

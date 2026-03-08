import { motion } from 'motion/react';
import aboutProfileImage from '../../assets/aboutprofile.jpeg';

export default function About() {
  const skills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  ];

  return (
    <section id="about" className="py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-24"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--color-accent)] mb-6">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter uppercase">ABOUT ME</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 max-w-lg"
          >
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-12">
              I'm Siddheshwar Bali, <strong className="text-white font-medium">a Full Stack Developer</strong> passionate about building modern web applications and AI-driven solutions. I specialize in <strong className="text-white font-medium">React, Node.js, Python, and MySQL</strong>, creating scalable, high-performance digital products that deliver great user experiences and solve real-world problems.
            </p>
            <div className="mb-12">
              <h3 className="text-sm text-[var(--color-text-secondary)] mb-6">Tools</h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center hover:bg-[#2A2A2A] transition-colors duration-300"
                    title={skill.name}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:text-[var(--color-accent-light)] transition-colors">
              Connect With Me<span className="text-xl leading-none">»</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src={aboutProfileImage}
                alt="Siddheshwar Bali"
                className="w-full h-full object-cover filter brightness-90 contrast-110"
                style={{ filter: 'brightness(0.9) contrast(1.1)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

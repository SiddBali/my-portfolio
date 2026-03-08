import { motion } from 'motion/react';

export default function Statement() {
  return (
    <section className="py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-[110px] font-display font-medium leading-[1.1] tracking-tight"
        >
          I Build User<br />
          Centric Projects<br />
          Since 2022.
        </motion.h2>
      </div>
    </section>
  );
}

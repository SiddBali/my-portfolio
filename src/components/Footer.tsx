export default function Footer() {
  return (
    <footer className="py-16 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-6xl md:text-[100px] font-display font-medium tracking-tighter mb-12">
          Let<span className="text-[var(--color-accent)]">'</span>s Work
        </h2>
        
        <a
          href="mailto:siddbb2334@gmail.com"
          className="px-8 py-3 rounded-full border border-white/20 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 mb-16"
        >
          siddbb2334@gmail.com
        </a>
        
        <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-[var(--color-text-secondary)] uppercase tracking-widest mb-24">
          <a href="#about" className="hover:text-[var(--color-accent)] transition-colors underline underline-offset-4">About me </a>
          <a href="#contact" className="hover:text-[var(--color-accent)] transition-colors underline underline-offset-4">Contact me</a>
          <a href="#projects" className="hover:text-[var(--color-accent)] transition-colors underline underline-offset-4">Work</a>
        </div>
        
        <div className="w-full flex flex-col md:flex-row items-center justify-between text-xs text-[var(--color-text-secondary)]">
          <p>© 2026 Siddheshwar Bali. All Right Reserved</p>
          <p className="mt-4 md:mt-0">Designed By Siddheshwar Bali</p>
        </div>
      </div>
    </footer>
  );
}

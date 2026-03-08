/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Statement from './components/Statement';
import About from './components/About';
import Services from './components/Services';
import Social from './components/Social';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] selection:bg-[var(--color-accent)] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Intro />
        <Projects />
        <Statement />
        <About />
        <Services />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

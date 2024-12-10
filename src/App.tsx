import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio/Portfolio';
import Expertise from './components/Expertise/Expertise';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
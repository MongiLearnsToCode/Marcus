import React, { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero/Hero';

// Lazy load components that aren't immediately visible
const About = lazy(() => import('./components/About'));
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio'));
const Expertise = lazy(() => import('./components/Expertise/Expertise'));
const Testimonials = lazy(() => import('./components/Testimonials/Testimonials'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="bg-white">
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-screen bg-[#1B1F2E]" />}>
          <About />
          <Expertise />
          <Portfolio />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-40 bg-[#1B1F2E]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
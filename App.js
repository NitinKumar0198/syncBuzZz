import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Blog from './components/Blog';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='font-sans'>
      <Hero />
      <Services />
      <Blog />
      <Pricing />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

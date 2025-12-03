import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import TrustedBy from './components/TrustedBy';
import GalleryCarousel from './components/GalleryCarousel';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Portfolio />
      <Testimonials />
      <WhyChooseUs />
      <TrustedBy />
      <GalleryCarousel />
      <ContactForm />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

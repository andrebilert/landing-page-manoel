import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import TrustedBy from '../components/TrustedBy';
import GalleryCarousel from '../components/GalleryCarousel';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Portfolio />
            <GalleryCarousel />
            <Testimonials />
            <WhyChooseUs />
            <TrustedBy />
            <FAQ />
            <ContactForm />
            <Footer />
            <WhatsAppButton />
        </>
    );
};

export default Home;

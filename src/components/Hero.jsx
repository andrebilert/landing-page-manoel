import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Camera } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="assets/hero.webp"
          alt="Formatura"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/70 to-[var(--color-bg)]/30"></div>
      </div>

      <div className="container relative z-10 text-center px-4 pt-32 md:pt-0 pb-12 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 mt-12 md:mt-0 leading-tight">
            A formatura é única.<br />
            <span className="highlight md:whitespace-nowrap">Suas fotos também devem ser.</span>
          </h1>

          <div className="text-[var(--color-text-muted)] text-lg md:text-xl mb-16 max-w-2xl mx-auto font-light flex flex-col items-center gap-4">
            <span>Mais de 10 anos de experiência em fotografia em Maringá e Região</span>
            <div className="w-24 h-[2px] bg-[var(--color-primary)]"></div>
            <span>Especialista em Formaturas</span>
          </div>


          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <a href="https://wa.me/554491437348" target="_blank" className="btn btn-primary w-full md:w-auto">
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </a>
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 

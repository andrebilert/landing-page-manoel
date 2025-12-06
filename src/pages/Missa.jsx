import React, { useState, useEffect } from 'react';
import { Instagram, MessageCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioNavbar from '../components/PortfolioNavbar';
import WhatsAppButton from '../components/WhatsAppButton';

const Missa = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const images = [
        // Row 1
        { src: '/assets/missa/missa-3.webp', className: 'col-span-1 md:col-span-2 h-full' }, // Horizontal
        { src: '/assets/missa/missa-1.webp', className: 'col-span-1 aspect-[2/3]' }, // Portrait

        // Row 2
        { src: '/assets/missa/missa-2.webp', className: 'col-span-1 aspect-[2/3]' }, // Portrait
        { src: '/assets/missa/missa-6.webp', className: 'col-span-1 aspect-[2/3]' }, // Portrait
        { src: '/assets/missa/missa-7.webp', className: 'col-span-1 aspect-[2/3]' }, // Portrait

        // Row 3
        { src: '/assets/missa/missa-8.webp', className: 'col-span-1 aspect-[2/3]' }, // Portrait
        { src: '/assets/missa/missa-4.webp', className: 'col-span-1 md:col-span-2 h-full' }, // Horizontal

        // Row 4
        { src: '/assets/missa/missa-9.webp', className: 'col-span-1 aspect-[2/3]' }, // Portrait
        { src: '/assets/missa/missa-5.webp', className: 'col-span-1 aspect-[2/3]' }, // Portrait
        { src: '/assets/missa/missa-10.webp', className: 'col-span-1 aspect-[2/3]' }, // Portrait

        // Row 5
        { src: '/assets/missa/missa-11.webp', className: 'col-span-1 aspect-[2/3]' }, // Portrait
        { src: '/assets/missa/missa-12.webp', className: 'col-span-1 aspect-[2/3]' }, // Portrait
        { src: '/assets/missa/missa-13.webp', className: 'col-span-1 aspect-[2/3]' }, // Portrait
    ];

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') setSelectedIndex(null);
            if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev + 1) % images.length);
            if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, images.length]);

    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white font-sans selection:bg-white selection:text-black">
            {/* Header */}
            <PortfolioNavbar />

            {/* Main Content */}
            <main className="pt-32 pb-20 container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-4">Missa</h1>
                        <div className="w-20 h-[1px] bg-white mx-auto"></div>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-7xl mx-auto grid-flow-dense">
                        {images.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`${item.className} relative group overflow-hidden cursor-pointer`}
                                onClick={() => setSelectedIndex(index)}
                            >
                                <img
                                    src={item.src}
                                    alt={`Missa ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-[#1a1a1a] flex flex-col items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-opacity"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <X size={32} strokeWidth={1} />
                        </button>

                        <div
                            className="text-white text-xl md:text-2xl font-light tracking-widest uppercase mb-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Henrique Marciano
                        </div>

                        <div
                            className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.img
                                key={selectedIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                src={images[selectedIndex].src}
                                alt={`Missa ${selectedIndex + 1}`}
                                className="max-w-full max-h-full object-contain shadow-2xl"
                            />
                        </div>

                        <div
                            className="mt-8 flex items-center gap-8 text-white/60 text-sm tracking-widest font-light uppercase"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={handlePrev}
                                className="hover:text-white transition-colors flex items-center gap-2"
                            >
                                <ChevronLeft size={16} /> Anterior
                            </button>
                            <span className="text-white/20">/</span>
                            <button
                                onClick={handleNext}
                                className="hover:text-white transition-colors flex items-center gap-2"
                            >
                                Próxima <ChevronRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Footer */}
            <footer className="py-12 bg-[#1a1a1a]">
                <div className="container mx-auto px-6 flex flex-col items-center gap-8">
                    <div className="flex gap-6">
                        <a
                            href="https://www.instagram.com/hmarcianofoto/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram size={24} />
                        </a>
                        <a
                            href="https://wa.me/554491437348"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="WhatsApp"
                        >
                            <MessageCircle size={24} />
                        </a>
                    </div>

                    <div className="text-sm text-gray-400 text-center flex flex-col gap-2">
                        <p>&copy; {new Date().getFullYear()} Henrique Marciano</p>
                        <p>Desenvolvido por <a href="https://www.instagram.com/promptando_ia/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Promptando</a></p>
                    </div>
                </div>
            </footer>

            <WhatsAppButton size="small" />
        </div>
    );
};

export default Missa;

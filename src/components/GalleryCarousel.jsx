import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    "/assets/portfolio-5.webp",
    "/assets/portfolio-6.webp",
    "/assets/portfolio-7.webp",
    "/assets/portfolio-8.webp",
    "/assets/portfolio-9.webp",
    "/assets/portfolio-10.webp",
    "/assets/portfolio-11.webp",
    "/assets/portfolio-12.webp",
    "/assets/portfolio-13.webp",
    "/assets/portfolio-14.webp",
    "/assets/portfolio-15.webp"
];

const GalleryCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="py-20 bg-[var(--color-bg)] overflow-hidden relative">
            <div className="container text-center" style={{ marginBottom: '30px' }}>
                <h2 className="text-3xl font-bold">Mais <span className="highlight">Fotos</span></h2>
            </div>

            <motion.div
                className="relative h-[500px] flex items-center justify-center perspective-1000 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = offset.x;

                    if (swipe < -50) {
                        nextSlide();
                    } else if (swipe > 50) {
                        prevSlide();
                    }
                }}
            >
                {/* Left Button */}
                {/* Left Button */}
                <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="absolute left-4 md:left-10 z-30 p-3 rounded-full bg-transparent text-gray-300 hover:text-white hover:scale-110 transition-all drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                    aria-label="Imagem anterior"
                >
                    <ChevronLeft size={48} strokeWidth={1} />
                </button>

                {images.map((img, index) => {
                    // Calculate circular distance
                    let offset = (index - activeIndex + images.length) % images.length;
                    // Adjust for shortest path (negative offsets)
                    if (offset > images.length / 2) {
                        offset -= images.length;
                    }

                    // Determine styles based on offset
                    let x = 0;
                    let scale = 1;
                    let zIndex = 10;
                    let opacity = 1;
                    let rotateY = 0;
                    let display = 'block';

                    if (offset === 0) {
                        // Center
                        x = 0;
                        scale = 1;
                        zIndex = 20;
                        opacity = 1;
                        rotateY = 0;
                    } else if (Math.abs(offset) === 1) {
                        // Left/Right neighbors
                        x = offset * 350; // Distance
                        scale = 0.8;
                        zIndex = 10;
                        opacity = 0.7;
                        rotateY = offset * -15; // Slight rotation
                    } else if (Math.abs(offset) === 2) {
                        // Far Left/Right (visible edges)
                        x = offset * 280; // Further out but tighter
                        scale = 0.6;
                        zIndex = 5;
                        opacity = 0.4; // Visible but dim
                        rotateY = offset * -25; // More rotation
                    } else {
                        // Hidden items
                        x = 0;
                        scale = 0;
                        zIndex = -1;
                        opacity = 0;
                        display = 'none';
                    }

                    // Mobile adjustments for visible items
                    if (window.innerWidth < 768 && Math.abs(offset) <= 2) {
                        if (Math.abs(offset) === 1) x = offset * 120;
                        if (Math.abs(offset) === 2) x = offset * 70; // Tighter overlap on mobile
                    }

                    return (
                        <motion.div
                            key={index}
                            className="absolute w-[300px] h-[450px] md:w-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-[var(--color-border)]"
                            initial={false}
                            animate={{
                                x,
                                scale,
                                zIndex,
                                opacity,
                                rotateY,
                                display
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut"
                            }}
                            onClick={() => setActiveIndex(index)}
                        >
                            <img
                                src={img}
                                alt={`Foto do portfólio ${index + 1}`}
                                className="w-full h-full object-cover pointer-events-none"
                                width="400"
                                height="500"
                            />
                            {/* Overlay for non-active images */}
                            <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${offset === 0 ? 'opacity-0' : 'opacity-50'}`}></div>
                        </motion.div>
                    );
                })}

                {/* Right Button */}
                {/* Right Button */}
                <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="absolute right-4 md:right-10 z-30 p-3 rounded-full bg-transparent text-gray-300 hover:text-white hover:scale-110 transition-all drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                    aria-label="Próxima imagem"
                >
                    <ChevronRight size={48} strokeWidth={1} />
                </button>
            </motion.div>
        </section>
    );
};

export default GalleryCarousel;

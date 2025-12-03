import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    "/assets/portfolio-1.png",
    "/assets/portfolio-2.png",
    "/assets/portfolio-3.png",
    "/assets/portfolio-4.png",
    "/assets/portfolio-1.png"
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
        <section className="py-20 bg-black overflow-hidden relative">
            <div className="container text-center" style={{ marginBottom: '30px' }}>
                <h2 className="text-3xl font-bold">Mais <span className="neon-text">Fotos</span></h2>
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
                <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="absolute left-4 md:left-10 z-30 p-3 rounded-full bg-[var(--color-primary)] text-black hover:scale-110 transition-transform shadow-[0_0_20px_rgba(198,255,0,0.5)]"
                >
                    <ChevronLeft size={24} />
                </button>

                {images.map((img, index) => {
                    // Calculate relative position for animation
                    let offset = index - activeIndex;
                    if (offset < -2) offset += images.length;
                    if (offset > 2) offset -= images.length;

                    // Determine styles based on offset
                    let x = 0;
                    let scale = 1;
                    let zIndex = 10;
                    let opacity = 1;
                    let rotateY = 0;

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
                    } else {
                        // Far Left/Right (visible now)
                        x = offset * 280; // Further out but tighter
                        scale = 0.6;
                        zIndex = 5;
                        opacity = 0.4; // Visible but dim
                        rotateY = offset * -25; // More rotation
                    }

                    // Mobile adjustments
                    if (window.innerWidth < 768) {
                        if (Math.abs(offset) === 1) x = offset * 120;
                        if (Math.abs(offset) === 2) x = offset * 70; // Tighter overlap on mobile
                    }

                    return (
                        <motion.div
                            key={index}
                            className="absolute w-[300px] h-[450px] md:w-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-gray-800"
                            initial={false}
                            animate={{
                                x,
                                scale,
                                zIndex,
                                opacity,
                                rotateY
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut"
                            }}
                            onClick={() => setActiveIndex(index)}
                        >
                            <img
                                src={img}
                                alt={`Gallery ${index}`}
                                className="w-full h-full object-cover pointer-events-none"
                            />
                            {/* Overlay for non-active images */}
                            <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${offset === 0 ? 'opacity-0' : 'opacity-50'}`}></div>
                        </motion.div>
                    );
                })}

                {/* Right Button */}
                <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="absolute right-4 md:right-10 z-30 p-3 rounded-full bg-[var(--color-primary)] text-black hover:scale-110 transition-transform shadow-[0_0_20px_rgba(198,255,0,0.5)]"
                >
                    <ChevronRight size={24} />
                </button>
            </motion.div>
        </section>
    );
};

export default GalleryCarousel;

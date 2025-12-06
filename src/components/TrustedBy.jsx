import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
    const universities = [
        { name: "UEM", logo: "/assets/uem.webp" },
        { name: "UNOPAR", logo: "/assets/unopar.webp" },
        { name: "UNINGÁ", logo: "/assets/uninga.webp" },
        { name: "UNICESUMAR", logo: "/assets/unicesumar-logo.webp" },
        { name: "UEL", logo: "/assets/uel.webp" },
        { name: "UNIPAL", logo: "/assets/unipal.webp" },
        { name: "UNIPAR", logo: "/assets/unipar.webp?v=2" },
        { name: "UNIFAMMA", logo: "/assets/unifamma.webp" },
        { name: "UFMS", logo: "/assets/ufms.webp?v=2" },
        { name: "UniCV", logo: "/assets/unicv.webp" },
        { name: "UTFPR", logo: "/assets/utfpr.webp" }
    ];

    // Duplicate the list to ensure smooth infinite scrolling
    const duplicatedUniversities = [...universities, ...universities];

    return (
        <section className="py-12 border-y border-[var(--color-border)] bg-[var(--color-bg)] overflow-hidden">
            <div className="container mb-40">
                <p className="text-center text-[var(--color-text-muted)] text-xl md:text-2xl font-semibold uppercase tracking-widest">
                    Onde já passamos
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[var(--color-bg)] to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[var(--color-bg)] to-transparent pointer-events-none"></div>

                <motion.div
                    className="flex items-center gap-8 md:gap-16 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 60
                    }}
                >
                    {duplicatedUniversities.map((uni, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-4 md:mx-8 h-28 md:h-48 w-40 md:w-80 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                        >
                            <img
                                src={uni.logo}
                                alt={uni.name}
                                className="max-h-full max-w-full object-contain"
                                loading="lazy"
                                width="240"
                                height="128"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustedBy;

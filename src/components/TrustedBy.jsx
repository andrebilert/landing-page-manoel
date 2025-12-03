import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
    const universities = [
        { name: "UEM", logo: "assets/uem.png" },
        { name: "UNOPAR", logo: "assets/unopar.png" },
        { name: "UNINGÁ", logo: "assets/uninga.png" },
        { name: "UNICESUMAR", logo: "assets/unicesumar-logo.png" }
    ];

    return (
        <section className="py-12 border-y border-[var(--color-border)] bg-[var(--color-bg)]">
            <div className="container">
                <p className="text-center text-[var(--color-text-muted)] text-sm uppercase tracking-widest mb-8">Faculdades que confiam em nós</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                    {universities.map((uni, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10, filter: "grayscale(100%) opacity(80%)" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.1, filter: "grayscale(0%) opacity(100%)" }}
                            transition={{ duration: 0.3 }}
                            className="cursor-pointer"
                        >
                            <img
                                src={uni.logo}
                                alt={uni.name}
                                className="h-32 md:h-48 w-auto object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;

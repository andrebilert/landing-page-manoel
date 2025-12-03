import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
    const universities = ["UNIVEL", "UNINGÁ", "UNICESUMAR", "UNIOPAR"];

    return (
        <section className="py-12 border-y border-gray-900 bg-[var(--color-bg)]">
            <div className="container">
                <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8">Faculdades que confiam em nós</p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {universities.map((uni, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-2xl md:text-3xl font-bold text-gray-400 hover:text-white transition-colors"
                        >
                            {uni}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;

import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Ana Silva",
        course: "Medicina - Unicesumar",
        text: "Simplesmente incrível! As fotos ficaram maravilhosas, o fotógrafo me deixou super à vontade. Recomendo demais!",
        stars: 5,
        image: "/assets/testimonial-1.png"
    },
    {
        name: "Carlos Oliveira",
        course: "Direito - Uningá",
        text: "Profissionalismo nota 1000. A entrega foi rápida e a qualidade das fotos é de cinema. Muito obrigado!",
        stars: 5,
        image: "/assets/testimonial-2.png"
    },
    {
        name: "Mariana Santos",
        course: "Odontologia - Unopar",
        text: "Melhor investimento da minha formatura. As fotos capturaram toda a emoção do momento. Amei cada detalhe.",
        stars: 5,
        image: "/assets/testimonial-3.png"
    }
];

const Testimonials = () => {
    return (
        <section className="section bg-[#0a0a0a]" id="testimonials">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl text-center mb-16"
                >
                    O que falam de <span className="neon-text">nós</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-[#121212] p-8 rounded-lg border border-gray-800 hover:border-[var(--color-primary)] transition-colors hover:-translate-y-2 duration-300"
                        >
                            <div className="flex gap-1 mb-4 text-[var(--color-primary)]">
                                {[...Array(item.stars)].map((_, i) => (
                                    <Star key={i} fill="currentColor" size={20} />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 italic">"{item.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-700">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{item.name}</h4>
                                    <p className="text-sm text-gray-500">{item.course}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

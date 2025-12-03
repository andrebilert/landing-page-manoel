import React from 'react';
import { motion } from 'framer-motion';

const categories = [
    {
        title: "Formaturas Individuais",
        image: "assets/portfolio-1.png",
        desc: "Ensaios exclusivos e personalizados"
    },
    {
        title: "Formaturas Coletivas",
        image: "assets/portfolio-2.png",
        desc: "Cobertura completa da sua turma"
    },
    {
        title: "Ensaios Studio",
        image: "assets/portfolio-3.png",
        desc: "Produção cinematográfica em estúdio"
    },
    {
        title: "Eventos e Bailes",
        image: "assets/portfolio-4.png",
        desc: "A festa mais esperada da sua vida"
    }
];

const Portfolio = () => {
    return (
        <section className="section bg-black" id="portfolio">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl mb-4">Nosso <span className="neon-text">Portfólio</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Cada clique conta uma história de sucesso. Confira nossos trabalhos recentes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer"
                        >
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[var(--color-primary)] transition-colors">
                                    {cat.title}
                                </h3>
                                <p className="text-gray-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    {cat.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

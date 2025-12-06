import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
    {
        title: "Festas",
        image: "/assets/festas/festas-16.webp",
        desc: "Registros inesquecíveis da sua celebração com energia e espontaneidade.",
        link: "/festas",
        objectPosition: "object-[center_15%]"
    },
    {
        title: "Colação de Grau",
        image: "/assets/colacao/colacao-1.webp",
        desc: "A emoção da conquista e o brilho de uma nova etapa.",
        link: "/colacao"
    },
    {
        title: "Missa",
        image: "/assets/missa/missa-3.webp",
        desc: "A emoção e a fé celebradas em cada detalhe.",
        link: "/missa"
    },
    {
        title: "Foto Convite",
        image: "/assets/foto-convite/foto-convite-1.webp",
        desc: "Ensaios criativos e personalizados para o seu convite de formatura.",
        link: "/foto-convite",
        objectPosition: "object-top"
    }
];

const Portfolio = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="section bg-[var(--color-bg)]" id="portfolio">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl mb-4">Nosso <span className="highlight">Portfólio</span></h2>
                    <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
                        Cada clique conta uma história de sucesso. Confira nossos trabalhos recentes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((cat, index) => {
                        const CardContent = (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer"
                            >
                                {isMobile ? (
                                    <motion.img
                                        src={cat.image}
                                        alt={cat.title}
                                        className={`w-full h-full object-cover ${cat.objectPosition || 'object-center'}`}
                                        style={{ willChange: "filter" }}
                                        initial={{ filter: 'grayscale(100%)' }}
                                        whileInView={{ filter: 'grayscale(0%)' }}
                                        viewport={{ margin: "-10% 0px -10% 0px", amount: 0.3 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        width="400"
                                        height="400"
                                        loading="lazy"
                                    />
                                ) : (
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 ${cat.objectPosition || 'object-center'}`}
                                        width="400"
                                        height="400"
                                        loading="lazy"
                                    />
                                )}
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity ${isMobile ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`}></div>

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <h3 className={`text-2xl font-bold mb-2 text-white transition-colors ${isMobile ? 'text-[var(--color-primary)]' : 'group-hover:text-[var(--color-primary)]'}`}>
                                        {cat.title}
                                    </h3>
                                    <p className={`text-[var(--color-text-muted)] transition-all duration-300 ${isMobile ? 'translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                                        {cat.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );

                        return cat.link && cat.link !== '#' ? (
                            <Link to={cat.link} key={index}>
                                {CardContent}
                            </Link>
                        ) : (
                            <div key={index}>{CardContent}</div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

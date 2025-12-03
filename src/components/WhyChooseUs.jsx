import React from 'react';
import { CheckCircle, Camera, Zap, Clock, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    { icon: Camera, title: "Equipamentos de Cinema", desc: "Câmeras e lentes de última geração para qualidade 8K." },
    { icon: Zap, title: "Iluminação Premium", desc: "Técnicas de luz avançadas para valorizar sua imagem." },
    { icon: Clock, title: "Entrega Rápida", desc: "Receba suas fotos tratadas em tempo recorde." },
    { icon: Users, title: "+500 Turmas", desc: "Experiência comprovada com grandes eventos." },
    { icon: CheckCircle, title: "Prazos Garantidos", desc: "Compromisso total com a data de entrega." },
    { icon: Award, title: "Especialista", desc: "Foco total em fotografia de formatura." }
];

const WhyChooseUs = () => {
    return (
        <section className="section bg-black">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl mb-6">
                                Por que escolher a <br />
                                <span className="neon-text">nossa fotografia?</span>
                            </h2>
                            <p className="text-gray-400 mb-8 text-lg">
                                Não entregamos apenas fotos, entregamos memórias eternizadas com a máxima qualidade técnica e artística.
                            </p>
                            <a href="#contact" className="btn btn-primary">
                                Quero agendar agora
                            </a>
                        </motion.div>
                    </div>

                    <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {benefits.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-[#121212] rounded-lg border border-gray-800 hover:border-[var(--color-primary)] transition-all group hover:shadow-[0_0_20px_rgba(198,255,0,0.1)]"
                            >
                                <item.icon className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

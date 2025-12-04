import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        course: '',
        date: '',
        institution: '',
        city: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, whatsapp, course, date, institution, city } = formData;

        const message = `Olá! Gostaria de um orçamento para fotos de formatura.%0A%0A*Nome:* ${name}%0A*WhatsApp:* ${whatsapp}%0A*Curso:* ${course}%0A*Data:* ${date}%0A*Instituição:* ${institution}%0A*Cidade:* ${city}`;

        window.open(`https://wa.me/554491437348?text=${message}`, '_blank');
    };

    return (
        <section className="section bg-[var(--color-bg)]" id="contact">
            <div className="container max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-[var(--color-surface)] p-8 md:p-12 rounded-2xl border border-[var(--color-border)] shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-shadow"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl mb-4">
                            Garanta as <span className="highlight">melhores fotos</span> da sua formatura
                        </h2>
                        <p className="text-[var(--color-text-muted)]">
                            Preencha o formulário abaixo e entraremos em contato rapidamente.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm text-[var(--color-text-muted)]">Nome Completo</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded p-3 text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                                placeholder="Seu nome"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="whatsapp" className="text-sm text-[var(--color-text-muted)]">WhatsApp</label>
                            <input
                                type="tel"
                                id="whatsapp"
                                name="whatsapp"
                                required
                                className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded p-3 text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                                placeholder="(44) 99999-9999"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="course" className="text-sm text-[var(--color-text-muted)]">Curso</label>
                            <input
                                type="text"
                                id="course"
                                name="course"
                                required
                                className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded p-3 text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                                placeholder="Ex: Medicina"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="date" className="text-sm text-[var(--color-text-muted)]">Data da Formatura</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                required
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded p-3 text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="institution" className="text-sm text-[var(--color-text-muted)]">Instituição/Faculdade</label>
                            <input
                                type="text"
                                id="institution"
                                name="institution"
                                required
                                className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded p-3 text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                                placeholder="Ex: Unicesumar"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="city" className="text-sm text-[var(--color-text-muted)]">Cidade</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                required
                                className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded p-3 text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                                placeholder="Ex: Maringá"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="md:col-span-2 mt-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="btn btn-primary w-full text-lg"
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Quero minhas fotos
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;

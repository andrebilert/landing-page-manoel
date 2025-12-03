import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#' },
        { name: 'Portfólio', href: '#portfolio' },
        { name: 'Depoimentos', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-[var(--color-bg)]/90 backdrop-blur-md py-2 border-b border-[var(--color-border)]'
                : 'bg-[var(--color-bg)] md:bg-transparent py-2'
                }`}
        >
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <img src="assets/logo.png" alt="Hmarciano Logo" className="h-10 md:h-16 w-auto object-contain" />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors uppercase tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="https://wa.me/554491437348"
                        target="_blank"
                        className="btn btn-primary py-1 px-3 text-[10px]"
                    >
                        <MessageCircle size={14} className="mr-1.5" />
                        WhatsApp
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[var(--color-bg)] border-b border-[var(--color-border)] overflow-hidden"
                    >
                        <div className="container py-12 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/554491437348"
                                target="_blank"
                                className="flex items-center justify-center w-full py-3 rounded-lg bg-[var(--color-bg)] text-white border border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors mb-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <MessageCircle size={20} className="mr-2" />
                                Chamar no WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

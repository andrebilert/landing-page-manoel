import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const PortfolioNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const allLinks = [
        { name: 'Início', href: '/' },
        { name: 'Missa', href: '/missa' },
        { name: 'Festas', href: '/festas' },
        { name: 'Colação de Grau', href: '/colacao' },
        { name: 'Foto Convite', href: '/foto-convite' },
    ];

    const navLinks = allLinks.filter(link => link.href !== location.pathname);

    return (
        <nav
            className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 bg-[var(--color-bg)]/90 backdrop-blur-md py-2`}
        >
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2" aria-label="Página inicial">
                    <img src="assets/logo.webp" alt="Henrique Marciano Logo" className="h-10 md:h-16 w-auto object-contain" width="200" height="64" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`text-sm font-medium transition-colors uppercase tracking-wide ${isScrolled ? 'text-[var(--color-text-muted)]' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]'} hover:text-[var(--color-primary)]`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Abrir menu de navegação"
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
                        className="md:hidden overflow-hidden"
                    >
                        <div className="container py-12 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-lg font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default PortfolioNavbar;

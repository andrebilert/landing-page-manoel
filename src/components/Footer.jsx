import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-bg)] border-t border-gray-900 pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4 text-white">HMARCIANO</h3>
                        <p className="text-gray-400 max-w-sm">
                            Eternizando o momento mais importante da sua carreira acadêmica com excelência e sofisticação.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-white">Contato</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center gap-2"><Phone size={16} /> (44) 9143-7348</li>
                            <li className="flex items-center gap-2"><Mail size={16} /> contato@hmarciano.com.br</li>
                            <li>Maringá - PR</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-white">Redes Sociais</h4>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/hmarcianofoto/" target="_blank" className="w-10 h-10 rounded-full bg-[var(--color-surface)] flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 text-center text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center gap-2">
                    <p>&copy; {new Date().getFullYear()} Hmarciano. Todos os direitos reservados.</p>
                    <p>Desenvolvido por <a href="https://www.instagram.com/promptando_ia/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--color-primary)] transition-colors">Promptando</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

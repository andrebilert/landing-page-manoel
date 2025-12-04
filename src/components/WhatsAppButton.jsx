import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.8 }}
                        className="bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-gray-800 shadow-xl whitespace-nowrap hidden md:block"
                    >
                        Chamar no WhatsApp
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.a
                href="https://wa.me/554491437348"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] flex items-center justify-center relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label="Falar no WhatsApp"
            >
                <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
                <MessageCircle size={28} fill="white" className="relative z-10" />
            </motion.a>
        </div>
    );
};

export default WhatsAppButton;

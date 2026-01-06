"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
    const phoneNumber = "918308233825"; // Mauli Green Park Sales
    const message = encodeURIComponent("Hello, I am interested in Mauli Green Park. Please share details.");

    return (
        <motion.a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer group"
        >
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
            <MessageCircle className="w-8 h-8 fill-current" />

            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-md text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                Chat with Sales
            </span>
        </motion.a>
    );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
        }, 2200); // 2.2 seconds duration

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[1000] bg-[#050A08] flex items-center justify-center pointer-events-none"
                >
                    <div className="relative overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                            className="text-6xl md:text-9xl font-serif text-[#EBE9E4] tracking-widest uppercase"
                        >
                            Mauli
                        </motion.h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                            className="h-[1px] bg-[#D19A66] mt-4 mx-auto"
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="text-center text-[#D19A66] text-sm tracking-[0.4em] uppercase mt-2 font-sans"
                        >
                            Developers
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import TextReveal from "./TextReveal";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const { language, setLanguage, t } = useLanguage();

    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <div
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-midnight-silt"
        >
            {/* Language Toggle */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute top-6 right-6 z-50"
            >
                <button
                    onClick={() => setLanguage(language === "en" ? "mr" : "en")}
                    className="flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-md border border-white/10 rounded-full text-[#EBE9E4] text-sm uppercase tracking-widest hover:bg-black/40 transition-colors"
                >
                    <Globe className="w-4 h-4" />
                    <span>{language === "en" ? "मराठा" : "English"}</span>
                </button>
            </motion.div>

            {/* Background Video */}
            <motion.div
                viewport={{ once: true }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/60 z-10" />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://videos.pexels.com/video-files/3773487/3773487-hd_1920_1080_30fps.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Foreground Content */}
            <motion.div
                style={{ opacity, y }}
                className="relative z-20 flex h-full flex-col items-center justify-center text-center px-4"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 0.5 }}
                    className="space-y-6"
                >
                    <h1 className="font-serif text-5xl md:text-8xl tracking-[0.1em] text-[#EBE9E4] uppercase font-light text-center leading-tight drop-shadow-2xl">
                        <TextReveal>Mauli Green Park</TextReveal>
                    </h1>

                    {/* Translated Content */}
                    <div className="space-y-2">
                        <p className="font-serif text-xl md:text-2xl text-burnished-bronze italic drop-shadow-md">
                            {t.hero.title}
                        </p>
                        <p className="font-sans text-sm md:text-base tracking-[0.2em] text-[#D4CDC3]/80 uppercase max-w-2xl mx-auto drop-shadow-sm">
                            {t.hero.subtitle}
                        </p>
                    </div>

                    <button className="mt-8 px-8 py-3 border border-[#EBE9E4]/30 hover:bg-[#EBE9E4] hover:text-midnight-silt text-[#EBE9E4] uppercase tracking-widest text-xs transition-all duration-500">
                        {t.hero.cta}
                    </button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
            >
                <span className="text-[10px] uppercase tracking-widest text-burnished-bronze">
                    Scroll to Enter
                </span>
                <motion.div
                    animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5 text-burnished-bronze" />
                </motion.div>
            </motion.div>
        </div >
    );
}

"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Key } from "lucide-react";

export default function Preloader() {
    const [isLocked, setIsLocked] = useState(true);
    const [isUnlocking, setIsUnlocking] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Prevent scrolling while locked
        if (isLocked) {
            document.body.style.overflow = "hidden";
            // Preload unlock sound
            audioRef.current = new Audio("https://assets.mixkit.co/active_storage/sfx/209/209-preview.mp3");
            audioRef.current.volume = 0.5;
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isLocked]);

    const handleUnlock = () => {
        if (isUnlocking) return;

        setIsUnlocking(true);

        // Play sound
        if (audioRef.current) {
            audioRef.current.play().catch(e => console.log("Audio prevented", e));
        }

        // Wait for animation then remove preloader
        setTimeout(() => {
            setIsLocked(false);
        }, 1500); // 1.5s for gate animation logic
    };

    return (
        <AnimatePresence>
            {isLocked && (
                <motion.div
                    className="fixed inset-0 z-[1000] flex items-center justify-center"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }} // Fade out the container after gates open
                >
                    {/* Left Gate */}
                    <motion.div
                        initial={{ x: 0 }}
                        animate={isUnlocking ? { x: "-100%" } : { x: 0 }}
                        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                        className="absolute left-0 top-0 w-1/2 h-full bg-[#050A08] border-r border-burnished-bronze/20 z-10"
                    />

                    {/* Right Gate */}
                    <motion.div
                        initial={{ x: 0 }}
                        animate={isUnlocking ? { x: "100%" } : { x: 0 }}
                        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                        className="absolute right-0 top-0 w-1/2 h-full bg-[#050A08] border-l border-burnished-bronze/20 z-10"
                    />

                    {/* Central Key Component */}
                    <motion.div
                        className="relative z-50 flex flex-col items-center cursor-pointer group"
                        onClick={handleUnlock}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isUnlocking
                            ? { opacity: 0, scale: 2, rotate: 90 }
                            : { opacity: 1, scale: 1, rotate: 0 }
                        }
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-burnished-bronze/20 blur-3xl rounded-full group-hover:bg-burnished-bronze/40 transition-all duration-500" />

                        {/* The Key */}
                        <Key className="w-16 h-16 md:w-24 md:h-24 text-burnished-bronze drop-shadow-[0_0_15px_rgba(209,154,102,0.5)]" strokeWidth={1} />

                        {/* Text */}
                        <motion.p
                            className="mt-8 text-burnished-bronze text-xs md:text-sm uppercase tracking-[0.3em] font-light"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Click to Unlock
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

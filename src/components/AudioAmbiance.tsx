"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioAmbiance() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Create audio instance
        audioRef.current = new Audio("https://cdn.pixabay.com/download/audio/2021/08/09/audio_88447e769f.mp3?filename=forest-birds-11270.mp3");
        audioRef.current.loop = true;
        audioRef.current.volume = 0.3; // Low background volume

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            // User interaction required to play
            audioRef.current.play().catch((err) => console.error("Audio Play Error:", err));
            setIsPlaying(true);
        }
    };

    return (
        <div className="fixed bottom-8 left-8 z-50">
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleAudio}
                className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 border border-white/10 ${isPlaying
                        ? "bg-burnished-bronze text-midnight-silt"
                        : "bg-midnight-silt/80 text-white/50 backdrop-blur-md"
                    }`}
            >
                {isPlaying ? (
                    <>
                        <Volume2 className="w-5 h-5" />
                        {/* Visualizer rings */}
                        <motion.div
                            className="absolute inset-0 rounded-full border border-burnished-bronze opacity-50"
                            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </>
                ) : (
                    <VolumeX className="w-5 h-5" />
                )}
            </motion.button>

            {/* Tooltip hint initially */}
            <AnimatePresence>
                {!isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap"
                    >
                        <span className="text-[10px] uppercase tracking-widest text-burnished-bronze/60">
                            Serenity Mode
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

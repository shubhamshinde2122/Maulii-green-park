"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioAmbiance() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [error, setError] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            // Create a promise to handle play result
            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsPlaying(true);
                        setError(false);
                    })
                    .catch((err) => {
                        console.error("Audio Playback Error:", err);
                        setIsPlaying(false);
                        setError(true);
                    });
            }
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
        }
    }, []);

    return (
        <div className="fixed bottom-8 left-8 z-[100]">
            {/* Fallback Sources: Google Sounds (Reliable) + Wikimedia */}
            <audio ref={audioRef} loop hidden>
                <source src="https://actions.google.com/sounds/v1/ambiences/forest_morning.ogg" type="audio/ogg" />
                <source src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Forest_Ambience.ogg" type="audio/ogg" />
            </audio>

            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleAudio}
                className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 border border-white/10 ${isPlaying
                        ? "bg-burnished-bronze text-midnight-silt"
                        : error
                            ? "bg-red-500/20 text-red-400 border-red-500/50"
                            : "bg-midnight-silt/80 text-white/50 backdrop-blur-md"
                    }`}
            >
                {error ? (
                    <AlertCircle className="w-5 h-5" />
                ) : isPlaying ? (
                    <>
                        <Volume2 className="w-5 h-5 relative z-10" />
                        {/* Fake Visualizer (CSS only, no CORS needed) */}
                        <motion.div
                            className="absolute inset-0 rounded-full border border-burnished-bronze opacity-50"
                            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </>
                ) : (
                    <VolumeX className="w-5 h-5" />
                )}
            </motion.button>

            <AnimatePresence>
                {!isPlaying && !error && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black/50 px-2 py-1 rounded backdrop-blur-sm pointer-events-none"
                    >
                        <span className="text-[10px] uppercase tracking-widest text-[#EBE9E4]">
                            Sound On
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioAmbiance() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Reliable Source: Wikimedia Commons (Creative Commons 0 or Attribution)
    // Forest/Nature sound
    const audioSrc = "https://upload.wikimedia.org/wikipedia/commons/e/e5/Forest_Ambience.ogg";

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch((err) => {
                    console.error("Audio Playback Error:", err);
                    alert("Could not play audio. Please check browser permissions.");
                });
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.4;
        }
    }, []);

    return (
        <div className="fixed bottom-8 left-8 z-[100]">
            <audio ref={audioRef} src={audioSrc} loop hidden />

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
                        <Volume2 className="w-5 h-5 relative z-10" />
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
                {!isPlaying && (
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

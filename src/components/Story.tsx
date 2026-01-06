"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import TextReveal from "./TextReveal";
import { Leaf } from "lucide-react";

export function Story() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();
    const [particles, setParticles] = useState<{ x: number, y: number, duration: number }[]>([]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        setParticles(Array.from({ length: 15 }).map(() => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: 20 + Math.random() * 30 // Slower: 20-50s
        })));
    }, []);

    // Adjusted for earlier reveal (Starts at 0, fully visible by 0.2)
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0, 0.2], [20, 0]);

    // Body reveals sooner
    const bodyOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

    // Fix: Include 'blur()' in the transform output strings so it can be passed directly to filter style
    const filterEffect = useTransform(scrollYProgress, [0.75, 0.9], ["blur(0px)", "blur(10px)"]);

    // Fade out EARLIER (at 90%) so we have time to show the Brand Name
    const contentOpacity = useTransform(scrollYProgress, [0.75, 0.9], [1, 0]);
    // Fade in animation (0 to 1) - Max intensity controlled by CSS classes below
    const outroOpacity = useTransform(scrollYProgress, [0.65, 0.95], [0, 1]);

    return (
        <section ref={containerRef} className="relative h-[140vh] bg-midnight-silt overflow-hidden">
            <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
                {/* Background Visuals */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-charcoal)_0%,_transparent_60%)] opacity-30" />

                {/* Warm Spotlight Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(165,126,81,0.15)_0%,_transparent_55%)] blur-3xl pointer-events-none" />

                {/* Outro Brand Watermark */}
                <motion.div
                    style={{ opacity: outroOpacity }}
                    // Mobile: opacity-80 (strong), Desktop: opacity-10 (faint)
                    className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10 translate-y-0 md:translate-y-24 opacity-80 md:opacity-10"
                >
                    <span className="text-[12vw] md:text-[12vw] font-serif font-black text-center leading-none text-burnished-bronze uppercase tracking-widest">
                        MAULI<br />DEVELOPERS
                    </span>
                </motion.div>

                {/* Floating Golden Leaves */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {particles.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0, rotate: Math.random() * 360 }}
                            animate={{
                                y: [`${p.y}vh`, `${p.y + 20}vh`], // Slowly falling
                                x: [`${p.x}vw`, `${p.x + (i % 2 === 0 ? 2 : -2)}vw`, `${p.x}vw`], // Gentle Sway
                                rotate: [0, 45, -45, 0], // Gentle Rotation
                                opacity: [0, 0.4, 0] // Fade in and out
                            }}
                            transition={{
                                duration: p.duration,
                                repeat: Infinity,
                                ease: "linear",
                                times: [0, 0.5, 1]
                            }}
                            className="absolute"
                        >
                            <Leaf
                                className={`text-burnished-bronze/40 ${i % 3 === 0 ? "w-6 h-6" : i % 2 === 0 ? "w-4 h-4" : "w-3 h-3"}`}
                                strokeWidth={1.5}
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    style={{
                        opacity: contentOpacity,
                        filter: filterEffect
                    }}
                    className="relative z-10 max-w-4xl px-6 text-center"
                >
                    <motion.div
                        style={{ opacity: titleOpacity, y: titleY }}
                        className="mb-12"
                    >
                        <span className="block mb-4 text-xs font-bold tracking-[0.2em] text-burnished-bronze uppercase">
                            {t.story.title}
                        </span>
                        <h2 className="font-serif text-4xl md:text-6xl text-raw-silk leading-tight bg-clip-text text-transparent bg-gradient-to-b from-raw-silk to-warm-stone">
                            <TextReveal>{t.story.heading}</TextReveal>
                        </h2>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        style={{ opacity: bodyOpacity, scaleX: bodyOpacity }}
                        className="w-24 h-[1px] bg-gradient-to-r from-transparent via-burnished-bronze to-transparent mx-auto my-10"
                    />

                    <motion.div
                        style={{ opacity: bodyOpacity }}
                        className="font-sans text-lg md:text-xl text-warm-stone/80 leading-relaxed max-w-2xl mx-auto space-y-8"
                    >
                        <p>
                            {t.story.body1}
                        </p>
                        <p>
                            We designed Sanctuary to be a pause button. A place where the city noise falls away, replaced by light, air, and an overwhelming sense of calm.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

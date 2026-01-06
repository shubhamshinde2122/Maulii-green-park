"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

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
    // Fade IN the Brand Name at the end
    const outroOpacity = useTransform(scrollYProgress, [0.8, 0.95], [0, 0.1]);

    return (
        <section ref={containerRef} className="relative h-[140vh] bg-midnight-silt overflow-hidden">
            <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
                {/* Background Visuals */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-charcoal)_0%,_transparent_60%)] opacity-30" />

                {/* Warm Spotlight Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(165,126,81,0.15)_0%,_transparent_55%)] blur-3xl pointer-events-none" />

                {/* Outro Brand Watermark (Fades in at end) - Pushed Lower */}
                <motion.div
                    style={{ opacity: outroOpacity }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 translate-y-24"
                >
                    <span className="text-[10vw] md:text-[12vw] font-serif font-black text-center leading-none text-burnished-bronze uppercase tracking-widest">
                        MAULI<br />DEVELOPERS
                    </span>
                </motion.div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {particles.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
                            animate={{
                                y: [`${p.y}vh`, `${p.y - 10}vh`, `${p.y}vh`],
                                opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{
                                duration: p.duration,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute w-1 h-1 bg-burnished-bronze rounded-full blur-[1px]"
                        />
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
                            {t.story.heading}
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

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
];

export function Gallery() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-charcoal">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Title Overlay */}
                <div className="absolute top-10 left-10 z-20 pointer-events-none mix-blend-difference">
                    <h2 className="font-serif text-4xl text-raw-silk uppercase tracking-widest opacity-50">
                        The Living Canvas
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-4 pl-24 pr-24">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="relative h-[80vh] w-[80vw] md:w-[60vw] overflow-hidden bg-midnight-silt border border-mist group"
                        >
                            {/* Internal Parallax Image */}
                            <motion.img
                                src={img}
                                alt={`Sanctuary Interior ${i}`}
                                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                initial={{ scale: 1.2 }}
                                whileInView={{ scale: 1.0 }}
                                transition={{ duration: 1.5 }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

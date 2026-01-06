"use client";

import { motion } from "framer-motion";
import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { GripVertical } from "lucide-react";

export function BeforeAfter() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
            const percentage = (x / rect.width) * 100;
            setSliderPosition(percentage);
        }
    };

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    return (
        <section className="py-24 bg-charcoal border-t border-mist/5 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl text-raw-silk uppercase tracking-widest opacity-90">
                        Concept to Reality
                    </h2>
                    <p className="font-sans text-warm-stone/60 mt-2">
                        Witness our vision coming to life.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full aspect-video md:aspect-[21/9] rounded-sm overflow-hidden cursor-ew-resize select-none border border-mist/20 shadow-2xl"
                    onMouseMove={onMouseMove}
                    onTouchMove={onTouchMove}
                >
                    {/* After Image (Full Width) */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1600596542815-27b88e57e609?q=80&w=2560&auto=format&fit=crop"
                            alt="Reality"
                            className="w-full h-full object-cover"
                        />
                        <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 text-xs text-raw-silk uppercase tracking-widest rounded-full">
                            Dec 2025 (Target)
                        </span>
                    </div>

                    {/* Before Image (Clipped) */}
                    <div
                        className="absolute inset-0 overflow-hidden bg-charcoal"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2560&auto=format&fit=crop"
                            alt="Construction"
                            className="w-full h-full object-cover grayscale" // Grayscale to emphasize "Before" or "Work in Progress"
                        />
                        <span className="absolute top-4 left-4 bg-burnished-bronze/90 px-3 py-1 text-xs text-midnight-silt font-bold uppercase tracking-widest rounded-full">
                            Current Status
                        </span>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-raw-silk z-10 flex items-center justify-center pointer-events-none shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="w-8 h-8 bg-raw-silk rounded-full flex items-center justify-center shadow-lg transform -translate-x-0.5">
                            <GripVertical className="w-5 h-5 text-midnight-silt" />
                        </div>
                    </div>
                </div>

                <p className="text-center text-xs text-mist pt-6 uppercase tracking-widest opacity-50">
                    Drag slider to compare
                </p>
            </div>
        </section>
    );
}

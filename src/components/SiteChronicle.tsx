"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import TextReveal from "./TextReveal";

const slides = [
    {
        id: 1,
        image: "/images/client/uploaded_image_0_1767759122908.jpg",
        title: "Structural Integrity",
        subtitle: "Phase 1 - Slab Casting Complete",
        location: "Block A"
    },
    {
        id: 2,
        image: "/images/client/uploaded_image_1_1767759122908.jpg",
        title: "The Vision",
        subtitle: "Master Plan Aerial View",
        location: "Campus Overview"
    },
    {
        id: 3,
        image: "/images/client/uploaded_image_2_1767759122908.jpg",
        title: "Precision Engineering",
        subtitle: "Brickwork in Progress",
        location: "Block B"
    },
    {
        id: 4,
        image: "/images/client/uploaded_image_3_1767759122908.jpg",
        title: "Rising Heights",
        subtitle: "Podium Level Construction",
        location: "Central Wing"
    },
    {
        id: 5,
        image: "/images/client/uploaded_image_4_1767759122908.jpg",
        title: "Future Residents",
        subtitle: "100+ Happy Families",
        location: "Community"
    }
];

export function SiteChronicle() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="bg-charcoal py-24 relative overflow-hidden border-t border-mist/5">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
                <div>
                    <h2 className="font-serif text-4xl text-raw-silk mb-2">
                        <TextReveal>On Location</TextReveal>
                    </h2>
                    <p className="font-sans text-warm-stone/60 tracking-wide">The Chronicle of Creation.</p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full border border-mist/20 text-raw-silk hover:bg-burnished-bronze hover:text-midnight-silt transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full border border-mist/20 text-raw-silk hover:bg-burnished-bronze hover:text-midnight-silt transition-colors"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Cinematic Slider */}
            <div className="w-full h-[60vh] md:h-[70vh] relative pl-6 md:pl-[max(2rem,calc((100vw-80rem)/2))]">
                <motion.div
                    className="flex gap-8 h-full"
                    animate={{ x: `-${currentIndex * 400}px` }} // Simplified translation for demo, usually calculate width
                // Ideally use a proper carousel logic, but basic translation works for "Strip" feel if fixed width.
                // Or better: Current slide is large, others peek.
                // Let's do a "Focus" layout where active slide is big.
                >
                    {/* Actually, let's just show ONE huge active slide and previews? 
                       User asked for "Slides". Let's do a pure horizontal scroll container.
                   */}
                </motion.div>

                {/* Re-implementing as a simpler "Active Slide" View for maximum "Cinematic" impact */}
                <div className="relative w-full h-full pr-6 md:pr-12">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="relative w-full h-full rounded-sm overflow-hidden group"
                    >
                        {/* Ken Burns Image */}
                        <motion.img
                            src={slides[currentIndex].image}
                            alt={slides[currentIndex].title}
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.1 }}
                            transition={{ duration: 10, ease: "linear" }}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-midnight-silt/90 via-transparent to-transparent" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center gap-2 text-burnished-bronze mb-4"
                            >
                                <MapPin className="w-4 h-4" />
                                <span className="text-xs uppercase tracking-widest">{slides[currentIndex].location}</span>
                            </motion.div>

                            <motion.h3
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="font-serif text-4xl md:text-6xl text-raw-silk mb-2"
                            >
                                {slides[currentIndex].title}
                            </motion.h3>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="font-sans text-warm-stone/80 text-lg"
                            >
                                {slides[currentIndex].subtitle}
                            </motion.p>
                        </div>

                        {/* Slide Counter */}
                        <div className="absolute top-8 right-8 text-raw-silk/20 font-serif text-6xl font-bold">
                            0{currentIndex + 1}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

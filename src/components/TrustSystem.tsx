"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Building2, UsersRound, Trophy } from "lucide-react";

const milestones = [
    { date: "Oct 2025", title: "Structure Complete", desc: "Roof slab casting finished." },
    { date: "Aug 2025", title: "15th Floor Slab", desc: "Brickwork in progress for 10th floor." },
    { date: "May 2025", title: "Podium Level", desc: "Parking infrastructure complete." },
    { date: "Jan 2025", title: "Foundation", desc: "Excavation and piling works." },
];

export function TrustSystem() {
    const containerRef = useRef<HTMLDivElement>(null);
    // Unused scroll hook removed for lint cleanliness

    return (
        <section ref={containerRef} className="bg-midnight-silt py-24 px-6 md:px-12">

            {/* 1. Construction Timeline */}
            <div className="max-w-6xl mx-auto mb-32 grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 md:mb-0" // Removed sticky, added spacing
                >
                    <h2 className="font-serif text-4xl text-raw-silk mb-2">The Journey</h2>
                    <p className="text-warm-stone/60 font-sans tracking-wide">Radical Transparency.</p>
                </motion.div>

                <div className="relative border-l border-mist pl-8 space-y-16">
                    {milestones.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
                            className="relative"
                        >
                            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-midnight-silt border border-burnished-bronze" />
                            <div className="text-xs font-bold text-burnished-bronze uppercase tracking-widest mb-1">{item.date}</div>
                            <h3 className="text-xl text-raw-silk font-serif mb-2">{item.title}</h3>
                            <p className="text-warm-stone/70">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 2. Builder Credibility Used Bento Grid */}
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[400px]">
                    {/* Card 1: Area Delivered */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="col-span-1 md:col-span-2 bg-charcoal rounded-sm border border-mist p-8 flex flex-col justify-between group overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-burnished-bronze/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative z-10">
                            <Building2 className="w-8 h-8 text-burnished-bronze mb-4" />
                            <h3 className="text-6xl font-light text-raw-silk mb-2">P5220</h3>
                            <p className="text-warm-stone/60 uppercase tracking-widest text-xs">RERA Registered (P52200025981)</p>
                        </div>
                    </motion.div>

                    {/* Card 2: Families */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-charcoal rounded-sm border border-mist p-8 flex flex-col justify-center items-center text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-midnight-silt/50 z-0" />
                        {/* Construction Progress Image */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" />

                        <div className="relative z-10">
                            <UsersRound className="w-8 h-8 text-raw-silk mx-auto mb-4" />
                            <h3 className="text-4xl text-raw-silk">100+</h3>
                            <p className="text-warm-stone/60 uppercase tracking-widest text-xs mt-2">Happy Families</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Awards */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-3 bg-charcoal rounded-sm border border-mist p-8 flex items-center justify-around"
                    >
                        <Trophy className="w-12 h-12 text-warm-stone/20" />
                        <div className="text-center">
                            <h4 className="text-raw-silk font-serif text-xl">Best Luxury Project</h4>
                            <p className="text-xs text-warm-stone/50">2024 Design Awards</p>
                        </div>
                        <Trophy className="w-12 h-12 text-warm-stone/20" />
                    </motion.div>
                </div>
            </div>

        </section>
    );
}

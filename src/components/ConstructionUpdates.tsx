"use client";

import { motion } from "framer-motion";

const updates = [
    {
        id: 1,
        date: "Jan 2026",
        title: "11th Floor Slab Completed",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: 2,
        date: "Dec 2025",
        title: "Brick Work in Progress",
        image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: 3,
        date: "Nov 2025",
        title: "Podium Level Ready",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1600&auto=format&fit=crop"
    },
];

export function ConstructionUpdates() {
    return (
        <section className="py-24 bg-charcoal border-t border-mist/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
                    <div>
                        <h2 className="font-serif text-3xl text-raw-silk uppercase tracking-widest mb-2">Site Progress</h2>
                        <p className="font-sans text-warm-stone/60">Transparency in every brick.</p>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-xs text-burnished-bronze uppercase tracking-[0.2em] border border-burnished-bronze px-4 py-2 rounded-full">
                            Live Updates
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {updates.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/5] overflow-hidden rounded-sm relative mb-6">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.7 }}
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale-0 [@media(hover:hover)]:grayscale [@media(hover:hover)]:group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute top-4 left-4 z-20 bg-midnight-silt/80 backdrop-blur-md px-3 py-1 rounded-sm border border-mist/20">
                                    <span className="text-xs text-raw-silk tracking-widest uppercase">{item.date}</span>
                                </div>
                            </div>
                            <h3 className="text-xl text-mist font-serif group-hover:text-burnished-bronze transition-colors">{item.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

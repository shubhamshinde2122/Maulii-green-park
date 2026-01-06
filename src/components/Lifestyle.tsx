"use client";

import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, Factory, Coffee, TentTree, ShoppingBag } from "lucide-react";

const lifestyleConnects = [
    {
        category: "Education",
        icon: <GraduationCap className="w-6 h-6" />,
        items: [
            { name: "Podar International School", dist: "5 Mins" },
            { name: "Supa English Medium School", dist: "2 Mins" },
            { name: "Global Institute of Management", dist: "15 Mins" }
        ]
    },
    {
        category: "Healthcare",
        icon: <Stethoscope className="w-6 h-6" />,
        items: [
            { name: "Sai Care Hospital", dist: "5 Mins" },
            { name: "Parner Civil Hospital", dist: "20 Mins" },
            { name: "Supa Rural Hospital", dist: "3 Mins" }
        ]
    },
    {
        category: "Work & Industry",
        icon: <Factory className="w-6 h-6" />,
        items: [
            { name: "MIDC Supa", dist: "0 Mins (Adjoining)" },
            { name: "Japanese Industrial Zone", dist: "5 Mins" },
            { name: "Ranjangaon MIDC", dist: "25 Mins" }
        ]
    },
    {
        category: "Leisure & Daily",
        icon: <ShoppingBag className="w-6 h-6" />,
        items: [
            { name: "Local Market Supa", dist: "Walking Dist" },
            { name: "Hotel Mauli Garden", dist: "2 Mins" },
            { name: "Nighoj Potholes (Tourism)", dist: "40 Mins" }
        ]
    }
];

export function Lifestyle() {
    return (
        <section className="py-24 bg-midnight-silt border-t border-mist/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl text-raw-silk uppercase tracking-widest opacity-90">
                        Life Beyond the Walls
                    </h2>
                    <p className="font-sans text-warm-stone/60 mt-2">
                        Education, career, and care — all within reach.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {lifestyleConnects.map((category, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-charcoal border border-mist/10 p-8 rounded-sm hover:border-burnished-bronze/40 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-charcoal border border-mist/20 rounded-full flex items-center justify-center mb-6 text-mist group-hover:text-burnished-bronze group-hover:border-burnished-bronze transition-all">
                                {category.icon}
                            </div>

                            <h3 className="font-serif text-xl text-raw-silk mb-6">{category.category}</h3>

                            <ul className="space-y-4">
                                {category.items.map((item, j) => (
                                    <li key={j} className="flex justify-between items-start border-b border-mist/5 pb-2 last:border-0 last:pb-0">
                                        <span className="text-warm-stone/80 text-sm font-medium">{item.name}</span>
                                        <span className="text-burnished-bronze text-xs whitespace-nowrap ml-2 opacity-70">{item.dist}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

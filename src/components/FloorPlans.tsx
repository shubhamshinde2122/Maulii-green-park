"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BedDouble, Bath, ChefHat, Sofa, Maximize2, ArrowRight } from "lucide-react";

type UnitType = "1BHK" | "2BHK";

const units = {
    "1BHK": {
        title: "The Cosy Retreat",
        area: "650 Sq. Ft.",
        description: "Perfect for young couples or individuals seeking a balance of comfort and luxury.",
        specs: [
            { icon: <Sofa className="w-5 h-5" />, label: "Living Room", value: "10' x 12'" },
            { icon: <BedDouble className="w-5 h-5" />, label: "Master Bedroom", value: "10' x 11'" },
            { icon: <ChefHat className="w-5 h-5" />, label: "Kitchen", value: "8' x 6'" },
            { icon: <Bath className="w-5 h-5" />, label: "Bathroom", value: "Premium Fittings" },
        ],
        image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1600&auto=format&fit=crop" // 1BHK Blueprint
    },
    "2BHK": {
        title: "The Family Haven",
        area: "950 Sq. Ft.",
        description: "Spacious luxury designed for growing families, offering privacy and community views.",
        specs: [
            { icon: <Sofa className="w-5 h-5" />, label: "Living & Dining", value: "16' x 12'" },
            { icon: <BedDouble className="w-5 h-5" />, label: "Master Suite", value: "12' x 12'" },
            { icon: <BedDouble className="w-5 h-5" />, label: "Kids Bedroom", value: "10' x 11'" },
            { icon: <Maximize2 className="w-5 h-5" />, label: "Balcony", value: "Two Terraces" },
        ],
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop" // 2BHK Architecture Plan
    }
};

export function FloorPlans() {
    const [activeTab, setActiveTab] = useState<UnitType>("1BHK");

    return (
        <section className="py-24 bg-charcoal border-t border-mist/5 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-burnished-bronze/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-midnight-silt/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl text-raw-silk uppercase tracking-widest opacity-90">
                        Sanctuary Layouts
                    </h2>
                    <p className="font-sans text-warm-stone/60 mt-2">
                        Thoughtfully designed spaces for your lifestyle.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-8 mb-16 border-b border-mist/10 max-w-md mx-auto relative">
                    {(Object.keys(units) as UnitType[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 text-lg font-serif tracking-widest transition-colors relative ${activeTab === tab ? 'text-burnished-bronze' : 'text-mist hover:text-raw-silk'}`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-burnished-bronze"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="bg-midnight-silt/50 border border-mist/10 rounded-sm p-8 md:p-12 backdrop-blur-sm">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        >
                            {/* Visual Side */}
                            <div className="relative aspect-square md:aspect-[4/3] bg-charcoal rounded-sm overflow-hidden group border border-mist/10">
                                <img
                                    src={units[activeTab].image}
                                    alt={`${activeTab} Layout`}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-raw-silk/20 px-4 py-2 rounded-full">
                                    <p className="text-raw-silk text-sm font-mono tracking-widest">{units[activeTab].area}</p>
                                </div>
                            </div>

                            {/* Info Side */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-4xl font-serif text-raw-silk mb-4">{units[activeTab].title}</h3>
                                    <p className="text-warm-stone/70 leading-relaxed font-sans">
                                        {units[activeTab].description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {units[activeTab].specs.map((spec, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 border border-mist/10 rounded-sm bg-charcoal/30 hover:bg-charcoal/60 transition-colors">
                                            <div className="text-burnished-bronze">
                                                {spec.icon}
                                            </div>
                                            <div>
                                                <p className="text-xs text-mist uppercase tracking-wider">{spec.label}</p>
                                                <p className="text-raw-silk font-serif mt-1">{spec.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button className="group flex items-center gap-3 text-burnished-bronze hover:text-raw-silk transition-colors text-sm uppercase tracking-widest mt-8">
                                    Download Floor Plan PDF
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

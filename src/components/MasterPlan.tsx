"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Trees, Dumbbell, Waves, Baby, Music, Armchair, Users, X } from "lucide-react";

type Amenity = {
    id: string;
    x: number; // Percentage
    y: number; // Percentage
    title: string;
    description: string;
    icon: React.ReactNode;
    images: string[];
};

const amenities: Amenity[] = [{
    id: "1", x: 20, y: 30, title: "Infinity Pool", description: "Oasis in the sky", icon: <Waves className="w-5 h-5" />,
    images: ["https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2560&auto=format&fit=crop"]
},
{
    id: "2", x: 60, y: 25, title: "Clubhouse", description: "Social epicenter", icon: <Dumbbell className="w-5 h-5" />,
    images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2560&auto=format&fit=crop"]
},
{
    id: "3", x: 40, y: 60, title: "Zen Garden", description: "Meditation spaces", icon: <Trees className="w-5 h-5" />,
    images: ["https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2560&auto=format&fit=crop"]
},
{
    id: "4", x: 75, y: 65, title: "Kids' Play Area", description: "Safe & fun zone", icon: <Baby className="w-5 h-5" />,
    images: ["https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2560&auto=format&fit=crop"]
},
{
    id: "5", x: 25, y: 75, title: "Amphitheatre", description: "Community events", icon: <Music className="w-5 h-5" />,
    images: ["https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2560&auto=format&fit=crop"]
},
{
    id: "6", x: 80, y: 40, title: "Senior Sit-out", description: "Peaceful relaxation", icon: <Armchair className="w-5 h-5" />,
    images: ["https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&w=2560&auto=format&fit=crop"]
},
{
    id: "7", x: 50, y: 50, title: "Multipurpose Hall", description: "Celebrations & parties", icon: <Users className="w-5 h-5" />,
    images: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2560&auto=format&fit=crop"]
},
];

export function MasterPlan() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [selectedAmenity, setSelectedAmenity] = useState<Amenity | null>(null);

    return (
        <section className="py-24 bg-midnight-silt overflow-hidden border-t border-mist/5 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl text-raw-silk tracking-widest uppercase opacity-90">
                        The Grounds
                    </h2>
                    <p className="font-sans text-warm-stone/60 mt-2">
                        Designed for Life in Balance.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* List Sidebar */}
                    <div className="space-y-4">
                        {amenities.map((item) => (
                            <motion.div
                                key={item.id}
                                onMouseEnter={() => setActiveId(item.id)}
                                onMouseLeave={() => setActiveId(null)}
                                onClick={() => setSelectedAmenity(item)} // Add click handler
                                className={`p-4 border rounded-sm cursor-pointer transition-all duration-300 flex items-center gap-4 ${activeId === item.id ? 'bg-charcoal border-burnished-bronze translate-x-2' : 'border-mist/10 hover:border-mist/30'}`}
                            >
                                <div className={`p-2 rounded-full transition-colors ${activeId === item.id ? 'bg-burnished-bronze text-midnight-silt' : 'bg-charcoal text-warm-stone'}`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className={`font-serif text-lg transition-colors ${activeId === item.id ? 'text-raw-silk' : 'text-mist'}`}>{item.title}</h3>
                                    <p className="text-xs text-warm-stone/50">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Interactive Map */}
                    <div className="lg:col-span-2 relative aspect-[4/3] min-h-[400px] bg-charcoal rounded-sm overflow-hidden border border-mist/20 group">
                        {/* Background Image: Aerial Park View */}
                        <div className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center transition-all duration-700 ${activeId ? "brightness-[0.3] grayscale-[0.2]" : "brightness-[0.6] grayscale-0 [@media(hover:hover)]:grayscale"}`} />

                        {/* Hotspots */}
                        {amenities.map((item) => (
                            <div
                                key={item.id}
                                className="absolute z-10"
                                style={{ top: `${item.y}%`, left: `${item.x}%` }}
                                onMouseEnter={() => setActiveId(item.id)}
                                onMouseLeave={() => setActiveId(null)}
                            >
                                <motion.button
                                    onClick={() => setSelectedAmenity(item)} // Add click handler
                                    whileHover={{ scale: 1.2 }}
                                    className={`relative flex items-center justify-center w-8 h-8 rounded-full border bg-midnight-silt/80 backdrop-blur-md transition-colors duration-300 ${activeId === item.id ? 'bg-burnished-bronze border-burnished-bronze scale-110' : 'border-raw-silk/50'}`}
                                >
                                    <Plus className={`w-4 h-4 text-raw-silk transition-transform duration-300 ${activeId === item.id ? 'rotate-45' : ''}`} />
                                    {/* Pulse if nothing is hovered */}
                                    {activeId === null && (
                                        <span className="absolute inset-0 rounded-full border border-raw-silk opacity-0 animate-ping" />
                                    )}
                                </motion.button>

                                {/* Tooltip - only show if active */}
                                {activeId === item.id && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute left-10 bottom-full mb-2 w-max p-2 px-4 bg-charcoal/90 backdrop-blur-md border border-burnished-bronze shadow-2xl z-50 pointer-events-none rounded-sm"
                                    >
                                        <h3 className="font-serif text-sm text-raw-silk tracking-wide">{item.title}</h3>
                                        <p className="text-[10px] text-burnished-bronze uppercase tracking-widest mt-1">Click to View</p>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedAmenity && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedAmenity(null)}
                        // Fixed/absolute positioning to cover viewport
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            onClick={() => setSelectedAmenity(null)}
                            className="absolute top-6 right-6 md:top-10 md:right-10 text-raw-silk hover:text-burnished-bronze transition-colors z-[110] p-2 bg-black/30 rounded-full border border-white/10"
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl bg-charcoal border border-mist/20 rounded-sm overflow-hidden shadow-2xl"
                        >
                            <div className="relative aspect-square md:aspect-video w-full bg-midnight-silt group">
                                <img
                                    src={selectedAmenity.images[0]}
                                    alt={selectedAmenity.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                                    <div className="flex items-center gap-3 mb-4 text-burnished-bronze">
                                        {selectedAmenity.icon}
                                        <span className="text-sm uppercase tracking-widest font-bold">Amenity Spotlight</span>
                                    </div>
                                    <h3 className="font-serif text-3xl md:text-5xl text-raw-silk mb-4">{selectedAmenity.title}</h3>
                                    <p className="font-sans text-lg text-warm-stone/80 max-w-2xl leading-relaxed">{selectedAmenity.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

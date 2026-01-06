"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, TrainFront, Plane } from "lucide-react";

const locations = [
    { icon: <Navigation className="w-6 h-6" />, title: "Highway Connectivity", desc: "2 Mins to NH-48" },
    { icon: <TrainFront className="w-6 h-6" />, title: "Metro Station", desc: "5 Mins Drive" },
    { icon: <Plane className="w-6 h-6" />, title: "International Airport", desc: "45 Mins via Expressway" },
];

export function Location() {
    return (
        <section className="relative py-24 bg-midnight-silt border-t border-mist/10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="font-serif text-3xl text-raw-silk uppercase tracking-widest mb-4">The Connectivity</h2>
                    <p className="font-sans text-warm-stone/60">Center of Everything.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Interactive Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-square md:aspect-video bg-charcoal rounded-sm border border-mist relative overflow-hidden group shadow-2xl"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.895920873084!2d74.3732!3d18.9806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc946222c14791%3A0x6b4a686940656099!2sSupa%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(20%) invert(90%) hue-rotate(180deg) contrast(120%)" }} // Styled map effect
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                        />
                    </motion.div>

                    {/* Location List */}
                    <div className="space-y-8">
                        {/* New Address & Contact Item */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-start gap-6 p-6 border border-burnished-bronze/30 bg-charcoal/50 rounded-sm"
                        >
                            <div className="p-3 bg-midnight-silt rounded-full text-burnished-bronze mt-1">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-raw-silk text-xl font-serif">Site Address</h3>
                                <p className="text-warm-stone/80 text-sm mt-2 leading-relaxed">
                                    Supa-Walvne Road, Supa,<br />
                                    Tal. Parner, Dist. Ahmednagar
                                </p>
                                <div className="mt-4 pt-4 border-t border-mist/10">
                                    <p className="text-burnished-bronze text-lg font-medium tracking-wide">
                                        +91 83082 33825 <br />
                                        +91 97675 60057
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {locations.map((loc, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="flex items-center gap-6 p-6 border border-mist/20 rounded-sm hover:border-burnished-bronze/50 transition-colors group cursor-pointer"
                            >
                                <div className="p-3 bg-charcoal rounded-full text-warm-stone group-hover:text-burnished-bronze transition-colors">
                                    {loc.icon}
                                </div>
                                <div>
                                    <h3 className="text-raw-silk text-xl font-serif">{loc.title}</h3>
                                    <p className="text-warm-stone/50 text-sm mt-1">{loc.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareText, X, Check } from "lucide-react";

export function Concierge() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Natural Language Form State
    const [name, setName] = useState("");
    const [config, setConfig] = useState("3 Bedroom");
    const [contact, setContact] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => setIsSuccess(true), 1500); // Simulate API
    };

    return (
        <>
            {/* Sticky Trigger */}
            <motion.button
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 2 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-raw-silk text-midnight-silt px-6 py-3 rounded-full shadow-2xl hover:bg-white transition-colors"
            >
                <span className="text-sm font-bold tracking-widest uppercase">Private Viewing</span>
                <MessageSquareText className="w-4 h-4" />
            </motion.button>

            {/* Drawer Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-midnight-silt/80 backdrop-blur-sm z-[60]"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-charcoal border-l border-mist z-[70] p-12 shadow-2xl flex flex-col justify-center"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-8 right-8 text-warm-stone hover:text-raw-silk"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {!isSuccess ? (
                                <div className="space-y-12">
                                    <div>
                                        <h2 className="font-serif text-3xl text-raw-silk mb-2">The Concierge</h2>
                                        <p className="text-warm-stone/60">How may we assist you today?</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="text-xl md:text-2xl text-warm-stone leading-relaxed font-light">
                                        <p>
                                            Hello, my name is{" "}
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="bg-transparent border-b border-warm-stone/30 focus:border-burnished-bronze outline-none text-raw-silk w-40 placeholder:text-warm-stone/30 transition-colors"
                                                required
                                            />
                                            .
                                        </p>
                                        <p className="mt-8">
                                            I am interested in a{" "}
                                            <select
                                                value={config}
                                                onChange={(e) => setConfig(e.target.value)}
                                                className="bg-transparent border-b border-warm-stone/30 focus:border-burnished-bronze outline-none text-raw-silk w-48 appearance-none cursor-pointer hover:text-burnished-bronze transition-colors"
                                            >
                                                <option className="bg-charcoal">3 Bedroom</option>
                                                <option className="bg-charcoal">4 Bedroom</option>
                                                <option className="bg-charcoal">Penthouse</option>
                                            </select>{" "}
                                            residence.
                                        </p>
                                        <p className="mt-8">
                                            Please contact me via{" "}
                                            <span className="text-raw-silk">WhatsApp</span>{" "}
                                            at{" "}
                                            <input
                                                type="tel"
                                                placeholder="Phone Number"
                                                value={contact}
                                                onChange={(e) => setContact(e.target.value)}
                                                className="bg-transparent border-b border-warm-stone/30 focus:border-burnished-bronze outline-none text-raw-silk w-48 placeholder:text-warm-stone/30 transition-colors"
                                                required
                                            />
                                            .
                                        </p>

                                        <button
                                            type="submit"
                                            className="mt-16 group flex items-center gap-4 text-sm font-bold tracking-[0.2em] uppercase text-burnished-bronze hover:text-raw-silk transition-colors"
                                        >
                                            <span>Request Invitation</span>
                                            <span className="block w-12 h-[1px] bg-burnished-bronze group-hover:w-20 transition-all duration-300" />
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center"
                                >
                                    <div className="mx-auto w-16 h-16 rounded-full border border-burnished-bronze flex items-center justify-center mb-6">
                                        <Check className="w-8 h-8 text-burnished-bronze" />
                                    </div>
                                    <h3 className="font-serif text-2xl text-raw-silk mb-4">Request Received</h3>
                                    <p className="text-warm-stone/70 max-w-sm mx-auto">
                                        Thank you, {name}. Our Private Relationship Manager will reach out to you within 2 hours.
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

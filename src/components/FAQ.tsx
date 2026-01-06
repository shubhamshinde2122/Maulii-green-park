"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Is the project RERA registered?",
        answer: "Yes, Mauli Green Park is fully RERA registered. Our MahaRERA Registration number is P52200026981. We adhere to all regulatory compliance for transparency and trust."
    },
    {
        question: "What is the expected possession date?",
        answer: "Construction is in full swing with the 11th-floor slab already completed. We are on track for timely delivery by Dec 2025 as per our commitment."
    },
    {
        question: "Is there a municipal water connection?",
        answer: "Yes, the project is planned with a sustainable water supply system, including connection to the local municipal grid and supplementary borewell provisions."
    },
    {
        question: "Are home loans available?",
        answer: "We have tied up with all major nationalized and private banks including SBI, HDFC, and ICICI for hassle-free home loans and EMI options."
    },
    {
        question: "Do you provide site visit facilities?",
        answer: "Absolutely. We offer pick-up and drop services for site visits from designated points. Please use the 'Concierge' feature or call us to book your visit."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-charcoal border-t border-mist/5">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-burnished-bronze/10 text-burnished-bronze mb-6">
                        <HelpCircle className="w-6 h-6" />
                    </div>
                    <h2 className="font-serif text-3xl text-raw-silk uppercase tracking-widest opacity-90">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`border transition-colors duration-300 rounded-sm overflow-hidden ${openIndex === i ? 'border-burnished-bronze/50 bg-midnight-silt/30' : 'border-mist/10 bg-transparent'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(prev => prev === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left group"
                            >
                                <span className={`font-serif text-lg transition-colors ${openIndex === i ? 'text-raw-silk' : 'text-mist group-hover:text-raw-silk'}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-1 rounded-full border transition-all ${openIndex === i ? 'bg-burnished-bronze border-burnished-bronze' : 'border-mist/20 group-hover:border-mist/50'}`}>
                                    {openIndex === i ? (
                                        <Minus className="w-4 h-4 text-midnight-silt" />
                                    ) : (
                                        <Plus className="w-4 h-4 text-mist" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-0">
                                            <p className="text-warm-stone/70 leading-relaxed border-t border-mist/5 pt-4">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

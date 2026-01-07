"use client";

import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/constants";

export function Brochure() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const form = e.currentTarget;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            console.log("Submitting Brochure Form with Key:", WEB3FORMS_ACCESS_KEY);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    ...data,
                    subject: "New Brochure Request - Mauli Green Park",
                }),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus("success");
                setTimeout(() => setStatus("idle"), 5000);
                form.reset();
            } else {
                console.error("Web3Forms API Error:", result);
                alert(`Submission Failed: ${result.message || "Please check your network."}`);
                setStatus("idle");
            }
        } catch (error) {
            console.error("Submission Network Error:", error);
            alert("Connection Error. Please try again.");
            setStatus("idle");
        }
    };

    return (
        <section className="py-24 bg-gradient-to-br from-burnished-bronze/10 to-charcoal border-y border-burnished-bronze/20 overflow-hidden relative">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-burnished-bronze/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Text Side */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-burnished-bronze/30 rounded-full bg-burnished-bronze/10">
                        <FileText className="w-4 h-4 text-burnished-bronze" />
                        <span className="text-xs text-burnished-bronze uppercase tracking-widest">Project Brochure</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif text-raw-silk leading-tight">
                        Discover the details <br /> that define <span className="text-transparent bg-clip-text bg-gradient-to-r from-burnished-bronze to-raw-silk">Luxury.</span>
                    </h2>

                    <p className="text-warm-stone/70 text-lg max-w-md">
                        Download our comprehensive e-brochure to explore detailed floor plans, specification sheets, and the complete vision of Mauli Green Park.
                    </p>

                    <ul className="space-y-4">
                        {["Master Plan Layout", "Unit Specifications", "Amenity Details", "Location Analysis"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-mist">
                                <CheckCircle2 className="w-5 h-5 text-burnished-bronze" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Form Side */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-midnight-silt/80 backdrop-blur-md border border-burnished-bronze/30 p-8 md:p-12 rounded-sm shadow-2xl relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <h3 className="text-2xl font-serif text-raw-silk mb-2">Unlock the Brochure</h3>
                    <p className="text-warm-stone/50 text-sm mb-8">Please enter your details to receive the link.</p>

                    {status === "success" ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-green-900/20 border border-green-500/30 p-8 text-center rounded-sm"
                        >
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-8 h-8 text-green-400" />
                            </div>
                            <h4 className="text-raw-silk text-xl font-serif mb-2">Thank You!</h4>
                            <p className="text-mist text-sm">The brochure is downloading...</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-xs text-mist uppercase tracking-widest mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-charcoal border border-mist/10 focus:border-burnished-bronze text-raw-silk px-4 py-3 rounded-sm outline-none transition-colors placeholder:text-warm-stone/20"
                                    placeholder="e.g. Rahul Patil"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-mist uppercase tracking-widest mb-2">WhatsApp Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    className="w-full bg-charcoal border border-mist/10 focus:border-burnished-bronze text-raw-silk px-4 py-3 rounded-sm outline-none transition-colors placeholder:text-warm-stone/20"
                                    placeholder="+91 00000 00000"
                                />
                            </div>
                            <button
                                disabled={status === "submitting"}
                                className="w-full bg-burnished-bronze hover:bg-raw-silk text-midnight-silt font-bold uppercase tracking-widest py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                            >
                                {status === "submitting" ? "Processing..." : (
                                    <>
                                        Download Now
                                        <Download className="w-4 h-4 transition-transform group-hover/btn:translate-y-1" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

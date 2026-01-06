"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <div
            ref={ref}
            className={`overflow-hidden ${className}`}
            // Ensure inline-block or block behavior based on usage, but default to block-like for headings.
            // Using inline-block prevents full-width seizure if not needed.
            style={{ display: 'inline-block', verticalAlign: 'bottom' }}
        >
            <motion.div
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{
                    duration: 0.8,
                    delay: delay,
                    ease: [0.25, 0.1, 0.25, 1.0] // "Luxury" Cubic Bezier ease-out
                }}
                className="will-change-transform"
            >
                {children}
            </motion.div>
        </div>
    );
}

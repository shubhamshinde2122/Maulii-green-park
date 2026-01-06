"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        // 1. Check for 'hover: none' (Touch devices) or Small Screen
        // We want to DISABLE custom scrolling on these devices.
        const isTouchDevice = window.matchMedia("(hover: none)").matches;
        const isMobileSize = window.matchMedia("(max-width: 768px)").matches;

        if (isTouchDevice || isMobileSize) {
            return; // Use native scrolling
        }

        // 2. Initialize Lenis for Desktop
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        // 3. RAF Loop
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}

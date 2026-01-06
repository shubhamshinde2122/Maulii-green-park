"use client";

import { useEffect, useState } from "react";

export default function ThemeManager() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Check time automatically
        const checkTime = () => {
            const hour = new Date().getHours();
            // Day is 6 AM to 6 PM (18:00)
            const isDay = hour >= 6 && hour < 18;

            const html = document.documentElement;
            if (isDay) {
                html.setAttribute("data-theme", "day");
            } else {
                html.removeAttribute("data-theme");
            }
        };

        checkTime();

        // Optional: Re-check every minute? Not necessary for a simple demo.
    }, []);

    return null;
}

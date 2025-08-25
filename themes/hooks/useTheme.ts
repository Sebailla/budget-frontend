"use client";

import { useEffect, useState } from "react";

export type Theme = "light" | "dark" | "pastel" | "corporate";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("light");

    // Inicializar
    useEffect(() => {
        const saved = localStorage.getItem("theme") as Theme | null;
        if (saved) {
            setTheme(saved);
            document.documentElement.setAttribute("data-theme", saved);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const initialTheme: Theme = prefersDark ? "dark" : "light";
            setTheme(initialTheme);
            document.documentElement.setAttribute("data-theme", initialTheme);
        }
    }, []);

    const updateTheme = (newTheme: Theme) => {
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return { theme, setTheme: updateTheme };
}
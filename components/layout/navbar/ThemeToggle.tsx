'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from './ui/button';

export const ThemeToggle = () => {

    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;


    const toggleTheme = () => {
        setTheme(theme === "dark" || (theme === "system" && systemTheme === "dark") ? "light" : "dark") 
    }

return (
    <Button
        variant="ghost"
        size="icon"
        className="h-12 w-12"
        onClick={toggleTheme}
    >
        {theme === 'light' ? (
            <SunIcon className="h-12 w-12" />
        ) : (
            <MoonIcon className="h-12 w-12" />
        )}
        
    </Button>

);
}

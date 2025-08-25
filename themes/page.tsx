"use client";

import { useTheme } from "@/themes/hooks/useTheme";

export default function HomePage() {
    const { theme, setTheme } = useTheme();

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-background)] text-[var(--color-foreground)] transition-colors">
            <h1 className="text-4xl font-bold text-[var(--color-primary)]">
                🌙 Multi-Theme con Tailwind 4.1
            </h1>
            <p className="mt-4">Tema actual: <strong>{theme}</strong></p>

            <div className="flex gap-2 mt-6">
                {["light", "dark", "pastel", "corporate"].map((t) => (
                    <button
                        key={t}
                        onClick={() => setTheme(t as any)}
                        className={`px-4 py-2 rounded-md border ${theme === t
                                ? "bg-[var(--color-primary)] text-white"
                                : "bg-gray-200 dark:bg-gray-700"
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>
        </main>
    );
}
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useSticky } from "@/domain/hooks/useSticky";
import { ReactNode } from "react";


interface StickyHeaderProps {
    title: string
    topOffsetPx?: number // offset en px (ej: altura navbar)
    subTitle?: string
    subTitlleAccent?: string
    note?: ReactNode; // ahora puede ser un string, JSX o null
    rightContent?: ReactNode; // aquí podés pasar botones, menús, etc.

    // Colores opcionales para customizar
    titleColor?: string // clase Tailwind
    subTitleColor?: string
    subTitleAccentColor?: string
    noteColor?: string
    bg_color?: string
}

export default function StickyHeader({
    title,
    subTitle,
    topOffsetPx = 80, // = h-20 en tailwindcss
    subTitlleAccent,
    note,
    rightContent,
    titleColor,
    subTitleColor,
    subTitleAccentColor,
    noteColor,
    bg_color,
}: StickyHeaderProps) {

    const { stuck, sentinelRef } = useSticky()

    return (
        <>
            {/* Sentinel invisible justo encima del header */}
            <div ref={sentinelRef} className="h-px w-full" />

            {/* sticky: usamos style.top dinámico para que puedas ajustar según tu navbar */}
            <div
                className={`sticky z-5 ${bg_color || 'bg-white'}`}
                style={{ top: topOffsetPx }}
                aria-hidden={false}
            >
                <div className="flex justify-between items-center pt-8 pb-10 px-4 md:px-0">
                    <div>
                        <h1 className={`font-black text-4xl ${titleColor || 'text-gray-900'}`}>
                            {title}
                        </h1>
                    </div>

                    <section className="flex gap-5">
                        {
                            rightContent && (
                                <section className="flex gap-5">{rightContent}</section>
                            )
                        }
                    </section>
                </div>

                {/* AnimatePresence + motion.div (con layout) para animar la entrada/salida. La `overflow-hidden` en el wrapper ayuda a evitar parpadeos al cambiar tamaño. */}
                <AnimatePresence>
                    {!stuck && (
                        <motion.div
                            key="subtitle-wrapper"
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                            layout
                            className="overflow-hidden"
                            aria-hidden={stuck}
                        >
                            <p className={`text-xl font-bold ${subTitleColor || 'text-gray-500'}`}>
                                {subTitle} {" "}
                                <span className={`${subTitleAccentColor || 'text-cyan-500'}`}>{subTitlleAccent}</span>
                            </p>
                            <h1 className={`font-black text-2xl my-5 ${noteColor || 'text-cyan-500'}`} >{note}</h1>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </>
    );
}



"use client";

import { useSticky } from "@/domain/hooks/useSticky";


interface StickyHeaderProps {
    topOffsetPx?: number // offset en px (ej: altura navbar)
    bg_color?: string
}

export default function TableStickyHeader({
    topOffsetPx = 80, // = h-20 en tailwindcss
    bg_color
}: StickyHeaderProps) {

    const { stuck, sentinelRef } = useSticky()

    return (
        <>
            {/* Sentinel invisible justo encima del header */}
            <div ref={sentinelRef} className="h-px w-full" />

            {/* sticky: usamos style.top dinámico para que puedas ajustar según tu navbar */}
            <div
                className={`sticky z-1 `}
                style={{ top: topOffsetPx }}
                aria-hidden={false}
            >
                <article className="mt-10 w-full">
                    <div className={`flex justify-start items-center border border-pastel-lira-200 rounded-xl shadow-md p-5 my-5 w-full gap-x-0 ${bg_color || 'bg-pastel-lira-50'}`}>

                        <p className="block font-sans text-md text-gray-800 font-bold w-4/12 text-left">
                            Transaction
                        </p>

                        <p className="block font-sans text-md text-gray-800 font-bold w-2/12 text-right pr-10">
                            Amount
                        </p>

                        <p className="block font-sans text-md text-gray-800 font-bold w-2/12 text-center">
                            Create Date
                        </p>

                        <p className="block font-sans text-md text-gray-800 font-bold w-1/12 text-center">
                            Status
                        </p>

                        <p className="block font-sans text-md text-gray-800 font-bold w-2/12 text-center pl-4">
                            Account
                        </p>

                        <p className="block font-sans text-md text-gray-800 font-bold w-1/12 text-right pr-4">
                            Tools
                        </p>

                    </div>
                </article>

            </div>
        </>
    );
}



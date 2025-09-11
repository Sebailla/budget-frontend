"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hook que detecta si un sentinel ha dejado de ser visible (lo que indica que
 * el elemento asociado está sticky).
 *
 * @returns { stuck, sentinelRef }
 * stuck: booleano indicando si el header está fijo
 * sentinelRef: ref que debés colocar justo antes del header sticky
 */
export function useSticky() {
    const sentinelRef = useRef<HTMLDivElement | null>(null);
    const [stuck, setStuck] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setStuck(!entry.isIntersecting),
            { threshold: 0 }
        );

        if (sentinelRef.current) observer.observe(sentinelRef.current);
        return () => observer.disconnect();
    }, []);

    return { stuck, sentinelRef };
}
"use client";

import { useEffect, useRef } from "react";

export function useMeasureHeading() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const set = () => {
      if (!sectionRef.current || !headingRef.current) return;
      const h = headingRef.current.getBoundingClientRect().height;
      sectionRef.current.style.setProperty("--head-h", `${h}px`);
    };

    set();
    window.addEventListener("resize", set);
    document.fonts?.addEventListener?.("loadingdone", set as any);

    return () => {
      window.removeEventListener("resize", set);
      document.fonts?.removeEventListener?.("loadingdone", set as any);
    };
  }, []);

  return { sectionRef, headingRef };
}
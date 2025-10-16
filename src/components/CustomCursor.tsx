"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dot = dotRef.current!;
    const ring = ringRef.current!;

    let rx = 0, ry = 0, tx = 0, ty = 0, raf = 0;

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.transform = `translate(${tx}px, ${ty}px)`;

      const loop = () => {
        rx = prefersReduced ? tx : lerp(rx, tx, 0.25);
        ry = prefersReduced ? ty : lerp(ry, ty, 0.25);
        ring.style.setProperty('--cursor-x', `${rx}px`);
        ring.style.setProperty('--cursor-y', `${ry}px`);
        if (!prefersReduced) raf = requestAnimationFrame(loop);
      };

      if (!prefersReduced && !raf) raf = requestAnimationFrame(loop);
      if (prefersReduced) {
        ring.style.setProperty('--cursor-x', `${tx}px`);
        ring.style.setProperty('--cursor-y', `${ty}px`);
      }
    };

    const enter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };
    const leave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const down = () => ring.classList.add("cursor-ring-press");
    const up = () => ring.classList.remove("cursor-ring-press");

    const hoverSelector = "a,button,[role='button'],[data-cursor='hover']";
    const onOver = (e: Event) =>
      (e.target as Element).closest(hoverSelector) && ring.classList.add("cursor-ring-hover");
    const onOut = (e: Event) =>
      (e.target as Element).closest(hoverSelector) && ring.classList.remove("cursor-ring-hover");

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", enter);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", enter);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
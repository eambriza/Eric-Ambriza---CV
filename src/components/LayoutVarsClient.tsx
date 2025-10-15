"use client";

import { useEffect } from "react";

export default function LayoutVarsClient() {
  useEffect(() => {
    const setVars = () => {
      const nav = document.querySelector<HTMLElement>("#site-nav");
      const main = document.querySelector<HTMLElement>("main");
      const navH = nav?.offsetHeight ?? 0;
      const mainPadTop = main ? parseFloat(getComputedStyle(main).paddingTop) : 0;
      
      // Fixed by design: glass container uses inset-6 => 24px top + 24px bottom
      const frameInset = 48;
      
      document.documentElement.style.setProperty("--nav-h", `${navH}px`);
      document.documentElement.style.setProperty("--main-py", `${mainPadTop}px`);
      document.documentElement.style.setProperty("--frame-inset", `${frameInset}px`);
    };

    setVars();
    window.addEventListener("resize", setVars);
    document.fonts?.addEventListener?.("loadingdone", setVars as any);

    return () => {
      window.removeEventListener("resize", setVars);
      document.fonts?.removeEventListener?.("loadingdone", setVars as any);
    };
  }, []);

  return null;
}
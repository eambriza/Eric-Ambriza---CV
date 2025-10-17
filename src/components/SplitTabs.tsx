"use client";

import { useState, useId, ReactNode, useEffect } from "react";

export type SplitTab = {
  id: string;
  label: string;
  panel: ReactNode;
};

export default function SplitTabs({
  tabs,
  initialId,
  className = "",
}: {
  tabs: SplitTab[];
  initialId?: string;
  className?: string;
}) {
  const fallback = tabs[0]?.id ?? "";
  const [active, setActive] = useState(initialId ?? fallback);
  const groupId = useId();

  // keep active id valid when tabs change
  useEffect(() => {
    if (!tabs.find(t => t.id === active)) setActive(fallback);
  }, [tabs, active, fallback]);

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const idx = tabs.findIndex(t => t.id === active);
    if (idx < 0) return;

    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      setActive(tabs[(idx + 1) % tabs.length].id);
      e.preventDefault();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      setActive(tabs[(idx - 1 + tabs.length) % tabs.length].id);
      e.preventDefault();
    }
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 ${className}`}>
      {/* Left: 1/4 (25%) */}
      <div
        role="tablist"
        aria-label="Sections"
        className="md:col-span-1 brutal-border bg-white"
        onKeyDown={onKeyDown}
      >
        {tabs.map(t => {
          const selected = t.id === active;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={selected}
              aria-controls={`${groupId}-${t.id}-panel`}
              id={`${groupId}-${t.id}-tab`}
              onClick={() => setActive(t.id)}
              className={`relative w-full text-left px-4 py-5 border-b last:border-b-0 transition-all duration-300 ${
                selected 
                  ? "bg-deep-navy text-text-cream shadow-brutal" 
                  : "bg-lime-accent text-deep-navy hover:bg-teal-accent"
              } border-deep-navy`}
            >
              <span className="font-bold uppercase tracking-wide">
                {t.label}
              </span>
              {selected && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-warm-orange"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Right: 3/4 (75%) */}
      <div
        className="md:col-span-3 brutal-border bg-white"
        role="tabpanel"
        id={`${groupId}-${active}-panel`}
        aria-labelledby={`${groupId}-${active}-tab`}
      >
        {tabs.find(t => t.id === active)?.panel}
      </div>
    </div>
  );
}
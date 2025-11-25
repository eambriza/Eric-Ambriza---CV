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
  bottomLeftContent,
  onChange,
}: {
  tabs: SplitTab[];
  initialId?: string;
  className?: string;
  bottomLeftContent?: ReactNode;
  onChange?: (activeId: string) => void;
}) {
  const fallback = tabs[0]?.id ?? "";
  const [active, setActive] = useState(initialId ?? fallback);
  const groupId = useId();

  // keep active id valid when tabs change
  useEffect(() => {
    if (!tabs.find(t => t.id === active)) setActive(fallback);
  }, [tabs, active, fallback]);

  // call onChange when active changes
  useEffect(() => {
    onChange?.(active);
  }, [active, onChange]);

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
    <div className={`grid grid-cols-1 md:grid-cols-4 md:grid-rows-1 min-h-[600px] ${className}`}>
      {/* Left: 1/4 (25%) */}
      <div className="md:col-span-1 flex flex-col md:row-span-1 h-full">
        <div
          role="tablist"
          aria-label="Sections"
          className="brutal-border bg-white"
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
                    ? "shadow-brutal" 
                    : "text-deep-navy hover:bg-teal-accent"
                } border-deep-navy`}
                style={selected ? { backgroundColor: '#3B648C', color: '#fff6ee' } : { backgroundColor: '#7EA3BD' }}
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
        
        {/* Bottom Left Content */}
        {bottomLeftContent && (
          <div className="brutal-border border-t-0 bg-white flex-1">
            {bottomLeftContent}
          </div>
        )}
      </div>

      {/* Right: 3/4 (75%) */}
      <div
        className="md:col-span-3 md:row-span-1 brutal-border bg-white h-full"
        role="tabpanel"
        id={`${groupId}-${active}-panel`}
        aria-labelledby={`${groupId}-${active}-tab`}
      >
        {tabs.find(t => t.id === active)?.panel}
      </div>
    </div>
  );
}
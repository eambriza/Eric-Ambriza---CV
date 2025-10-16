'use client';

export default function ScrollIndicator({ className }: { className?: string }) {
  return (
    <div className={["pointer-events-none select-none animate-bounce", className].filter(Boolean).join(" ")}>
      <div className="flex flex-col items-center space-y-2">
        <svg
          className="w-6 h-6 text-accent-orange animate-pulse"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m0 0l7-7m0 0l7 7"
          />
        </svg>
        <div className="w-4 h-6 border-2 border-accent-orange rounded-full relative">
          <div className="w-1 h-1 bg-accent-orange rounded-full absolute top-1 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

// src/components/BackCard.tsx
export default function BackCard() {
  // Page Background with 24px border thickness on all sides
  return (
    <div
      aria-hidden
      className="
        fixed inset-0 z-0 pointer-events-none
        rounded-2xl
        border-[24px]
        border-[#2b2d31]
        bg-[#0a0b0e]
      "
    />
  );
}

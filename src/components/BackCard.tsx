// src/components/BackCard.tsx
export default function BackCard() {
  // PURE frame only — no gradients, no overlays, no ::before/::after
  return (
    <div
      aria-hidden
      className="
        fixed inset-0 z-0 pointer-events-none
        rounded-2xl
        border-[24px] md:border-[28px] lg:border-[32px]
        border-[#2b2d31]
        bg-transparent
      "
    />
  );
}

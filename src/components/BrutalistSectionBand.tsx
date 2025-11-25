interface BrutalistSectionBandProps {
  id: string;
  title: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  rotation: number;
}

export default function BrutalistSectionBand({
  id,
  title,
  backgroundColor,
  textColor,
  borderColor,
  rotation,
}: BrutalistSectionBandProps) {
  return (
    <div 
      id={id}
      className={`${backgroundColor} ${textColor} ${borderColor} border-t-8 border-b-8 py-8 md:py-12 transform rotate-${rotation > 0 ? `${rotation}` : `[${rotation}deg]`} transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-center transition-all duration-300 hover:scale-110 hover:tracking-widest">
          {title}
        </h2>
      </div>
    </div>
  );
}
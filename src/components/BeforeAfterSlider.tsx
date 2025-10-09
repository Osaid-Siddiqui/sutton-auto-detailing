import React, { useState } from "react";

type Props = {
  before: string;
  after: string;
  height?: number | string;
};

export const BeforeAfterSlider: React.FC<Props> = ({ before, after, height = 256 }) => {
  const [position, setPosition] = useState(50); // percent

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-800 bg-black" style={{ height: typeof height === "number" ? `${height}px` : height }}>
      <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" />

      <div className="absolute inset-0" style={{ width: `${position}%` }}>
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" />
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        aria-label="Before After Slider"
      />

      <div
        className="absolute top-0 bottom-0 border-l-2 border-white/80 pointer-events-none"
        style={{ left: `${position}%` }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 -ml-3 flex items-center justify-center w-6 h-6 rounded-full bg-white text-black text-xs font-bold pointer-events-none"
        style={{ left: `${position}%` }}
      >
        ⇆
      </div>

      <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded text-xs font-bold">
        BEFORE
      </div>
      <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded text-xs font-bold">
        AFTER
      </div>
    </div>
  );
};

export default BeforeAfterSlider;

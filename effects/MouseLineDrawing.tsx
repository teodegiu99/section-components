import React, { ReactNode, useState } from "react";

const MoveLine = () => {
  return (
    <MouseMoveLineDrawing>
      <div className="grid h-screen place-content-center bg-neutral-200">
        <span className="text-5xl font-black text-neutral-900">Move Mouse</span>
      </div>
    </MouseMoveLineDrawing>
  );
}; export default MoveLine;

const MAX_POINTS = 30;

const MouseMoveLineDrawing = ({ children }: { children?: ReactNode }) => {
  const [points, setPoints] = useState<string[]>([]);

  return (
    <div
      onMouseMove={(e) => {
        setPoints((pv) => {
          const x = e.clientX;
          const y = e.clientY;

          const pointBuffer = [...pv, `${x} ${y}`];

          if (pointBuffer.length > MAX_POINTS) {
            pointBuffer.shift();
          }

          return pointBuffer;
        });
      }}
    >
      {children}
      <svg
        className="pointer-events-none fixed left-0 top-0 h-full w-full"
        viewBox="0 0 100% 100%"
      >
        <polyline
          className="stroke-neutral-900"
          fill="none"
          strokeWidth="4"
          strokeDasharray="0"
          strokeLinecap="round"
          points={`${points.join(", ")}`}
        ></polyline>
      </svg>
    </div>
  );
};


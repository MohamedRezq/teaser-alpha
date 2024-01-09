import React from "react";

const Arrow = ({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: any;
}) => {
  const svgPath =
    direction === "left"
      ? "M15 0 L30 15 L15 30" // SVG path for left arrow
      : "M0 0 L15 15 L0 30"; // SVG path for right arrow
  return (
    <div
      className={`absolute text-white rounded-full p-2 top-1/2 ${
        direction === "left" ? "left-4" : "right-4"
      } z-20 cursor-pointer hover:scale-110 transition`}
      onClick={onClick}
      style={{ transform: "translateY(-50%)" }}
    >
      <svg width="30" height="30" viewBox="0 0 30 30">
        <path d={svgPath} fill="none" stroke="black" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default Arrow;

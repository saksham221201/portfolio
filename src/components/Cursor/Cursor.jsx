import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <svg
      viewBox="0 0 24 24"
      className="fixed pointer-events-none z-[9999] transition-opacity duration-150"
      style={{
        left: position.x,
        top: position.y,
        width: "28px",
        height: "28px",
        opacity: visible ? 1 : 0,
        transform: "translate(-2px, -2px)",
      }}
    >
      <defs>
        <linearGradient id="cur-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>

      <path
        d="M3 2L21 11L13 14L10 22L3 2Z"
        fill="url(#cur-grad)"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="0.5"
      />
    </svg>
  );
};

export default Cursor;
"use client";

import { useState, useEffect } from "react";
import type { CSSProperties } from "react";

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 6,
      size: 12 + Math.random() * 16,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            bottom: "-30px",
            animation: `floatUp ${heart.duration}s ease-in ${heart.delay}s infinite`,
          }}
        >
          <svg width={heart.size} height={heart.size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="rgba(201, 145, 123, 0.12)"
            />
          </svg>
        </div>
      ))}
      <style jsx>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 0.6; }
          100% { transform: translateY(-110vh) scale(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export function SadCatSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="80"
      height="80"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M30 38 L22 18 L42 32 Z" fill="#d4a594" />
      <path d="M90 38 L98 18 L78 32 Z" fill="#d4a594" />
      <path d="M32 34 L28 24 L38 31 Z" fill="#e8c5b5" />
      <path d="M88 34 L92 24 L82 31 Z" fill="#e8c5b5" />
      <ellipse cx="60" cy="58" rx="33" ry="30" fill="#d4a594" />
      <ellipse cx="46" cy="55" rx="4" ry="5" fill="#3d3644" />
      <ellipse cx="74" cy="55" rx="4" ry="5" fill="#3d3644" />
      <ellipse cx="46" cy="64" rx="1.5" ry="3" fill="#9bb5d6" opacity="0.7" />
      <ellipse cx="74" cy="64" rx="1.5" ry="3" fill="#9bb5d6" opacity="0.7" />
      <path d="M50 73 Q60 68 70 73" stroke="#3d3644" strokeWidth="2" strokeLinecap="round" fill="none" />
      <line x1="22" y1="60" x2="36" y2="61" stroke="#b8897a" strokeWidth="1" strokeLinecap="round" />
      <line x1="22" y1="66" x2="36" y2="66" stroke="#b8897a" strokeWidth="1" strokeLinecap="round" />
      <line x1="98" y1="60" x2="84" y2="61" stroke="#b8897a" strokeWidth="1" strokeLinecap="round" />
      <line x1="98" y1="66" x2="84" y2="66" stroke="#b8897a" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function HeartSVG({ className = "", filled = true, style }: { className?: string; filled?: boolean; style?: CSSProperties }) {
  return (
    <svg className={className} style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill={filled ? "#c9917b" : "none"}
        stroke={filled ? "none" : "#c9917b"}
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function PawPrintSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <ellipse cx="20" cy="28" rx="8" ry="6" fill="#d4a594" opacity="0.25" />
      <ellipse cx="11" cy="19" rx="3.5" ry="4.5" fill="#d4a594" opacity="0.25" />
      <ellipse cx="17" cy="14" rx="3.5" ry="4.5" fill="#d4a594" opacity="0.25" />
      <ellipse cx="23" cy="14" rx="3.5" ry="4.5" fill="#d4a594" opacity="0.25" />
      <ellipse cx="29" cy="19" rx="3.5" ry="4.5" fill="#d4a594" opacity="0.25" />
    </svg>
  );
}

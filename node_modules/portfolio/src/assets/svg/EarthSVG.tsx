type Props = {
  className?: string;
};

export default function EarthSVG({ className }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="oceanGradient" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#3fa9f5" />
          <stop offset="60%" stopColor="#1c4ed8" />
          <stop offset="100%" stopColor="#0b1d3a" />
        </radialGradient>

        <radialGradient id="atmosphere" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="rgba(122,162,255,0)" />
          <stop offset="100%" stopColor="rgba(122,162,255,0.35)" />
        </radialGradient>

        <radialGradient id="nightShadow" cx="65%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(0,0,0,0)" />
          <stop offset="60%" stopColor="rgba(0,0,0,0.4)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.85)" />
        </radialGradient>

        <clipPath id="earthClip">
          <circle cx="100" cy="100" r="70" />
        </clipPath>
      </defs>

      {/* Atmosphere */}
      <circle cx="100" cy="100" r="78" fill="url(#atmosphere)" />

      {/* Earth */}
      <circle cx="100" cy="100" r="70" fill="url(#oceanGradient)" />

      {/* Continents */}
      <g clipPath="url(#earthClip)" opacity="0.85">
        <path
          d="M45 90 C55 70, 75 65, 90 72 C105 78, 100 95, 85 100 C70 105, 55 100, 45 90 Z"
          fill="#3fa34d"
        />
        <path
          d="M105 105 C115 98, 130 100, 135 112 C138 125, 120 130, 110 122 C100 115, 100 110, 105 105 Z"
          fill="#3a8f40"
        />
        <path
          d="M70 120 C80 115, 95 118, 98 128 C100 138, 88 145, 78 140 C68 135, 65 125, 70 120 Z"
          fill="#2f7d36"
        />
      </g>

      {/* Night shadow */}
      <circle cx="100" cy="100" r="70" fill="url(#nightShadow)" />

      {/* Terminator highlight */}
      <ellipse
        cx="85"
        cy="100"
        rx="55"
        ry="70"
        fill="rgba(255,255,255,0.03)"
      />
    </svg>
  );
}

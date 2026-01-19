type Props = {
  className?: string;
};

export default function SunSVG({ className }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Core gradient */}
        <radialGradient id="sunCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff3c4" />
          <stop offset="40%" stopColor="#ffd36a" />
          <stop offset="75%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </radialGradient>

        {/* Glow */}
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="rgba(245,158,11,0.0)" />
          <stop offset="100%" stopColor="rgba(245,158,11,0.45)" />
        </radialGradient>
      </defs>

      {/* Glow */}
      <circle cx="100" cy="100" r="90" fill="url(#sunGlow)" />

      {/* Sun body */}
      <circle cx="100" cy="100" r="65" fill="url(#sunCore)" />

      {/* Subtle surface noise */}
      <circle
        cx="85"
        cy="90"
        r="12"
        fill="rgba(255,255,255,0.08)"
      />
      <circle
        cx="115"
        cy="110"
        r="8"
        fill="rgba(255,255,255,0.06)"
      />
    </svg>
  );
}

import { motion } from "framer-motion";

/**
 * Layer 2: Maps (Solar System Overview)
 * Purpose: Show order, motion, and relationships using abstract visuals (SVGs).
 */

type CelestialBody = {
  id: string;
  name: string;
  orbit: number;
  size: number;
  color: string;
  hasDetails?: boolean;
};

type SolarSystemMapProps = {
  celestialData: CelestialBody[];
  onSelectPlanet: (planetId: string) => void;
};

const SolarSystemMap: React.FC<SolarSystemMapProps> = ({
  celestialData,
  onSelectPlanet,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="relative z-10 w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Map Header Info */}
      <div className="absolute top-12 left-24 text-left">
        <h2 className="text-[#e6e8ee] font-display text-4xl tracking-tight">
          Solar System
        </h2>
        <div className="flex items-center gap-3 mt-3">
          <div className="w-10 h-px bg-[#7aa2ff]" />
          <p className="text-[#a1a6b3] text-[9px] font-mono tracking-[0.3em] uppercase">
            Scale: Abstract System Map
          </p>
        </div>
      </div>

      <svg
        className="w-full h-full max-w-4xl max-h-[85vh]"
        viewBox="-400 -400 800 800"
      >
        <defs>
          <radialGradient id="sunGradient">
            <stop offset="0%" stopColor="#f5c07a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f5c07a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Orbit Rings */}
        {celestialData.map((planet) => (
          <circle
            key={`orbit-${planet.id}`}
            cx="0"
            cy="0"
            r={planet.orbit}
            fill="none"
            stroke="#a1a6b3"
            strokeWidth="0.5"
            strokeOpacity="0.1"
          />
        ))}

        {/* The Sun */}
        <circle cx="0" cy="0" r="50" fill="url(#sunGradient)" />
        <circle
          cx="0"
          cy="0"
          r="12"
          fill="#f5c07a"
          className="filter drop-shadow-[0_0_8px_#f5c07a]"
        />

        {/* Planetary Markers */}
        {celestialData
          .filter((p) => p.id !== "sun")
          .map((planet, i) => {
            const angle = (i * (360 / 6) + 45) * (Math.PI / 180);
            const x = Math.cos(angle) * planet.orbit;
            const y = Math.sin(angle) * planet.orbit;

            return (
              <g
                key={planet.id}
                className="cursor-pointer group"
                onClick={() =>
                  planet.hasDetails && onSelectPlanet(planet.id)
                }
              >
                <motion.circle
                  cx={x}
                  cy={y}
                  r={planet.size / 2}
                  fill={planet.color}
                  className="transition-all duration-300 group-hover:brightness-125 shadow-lg"
                />

                {/* Interaction Ring for Detail-Capable Objects */}
                {planet.hasDetails && (
                  <circle
                    cx={x}
                    cy={y}
                    r={planet.size / 2 + 5}
                    fill="none"
                    stroke={planet.color}
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    className="animate-spin-slow"
                  />
                )}

                <text
                  x={x + 18}
                  y={y + 4}
                  fill="#e6e8ee"
                  className="text-[9px] font-mono font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase"
                >
                  {planet.name}
                </text>
              </g>
            );
          })}
      </svg>
    </motion.div>
  );
};

export default SolarSystemMap;

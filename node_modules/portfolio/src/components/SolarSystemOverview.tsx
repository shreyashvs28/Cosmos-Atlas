import { motion } from "framer-motion";
import SunSVG from "../assets/svg/SunSVG";

const planets = [
  { name: "Mercury", size: 6, orbit: 60, speed: 12 },
  { name: "Venus", size: 8, orbit: 80, speed: 18 },
  { name: "Earth", size: 8, orbit: 100, speed: 24 },
  { name: "Mars", size: 7, orbit: 120, speed: 30 },
  { name: "Jupiter", size: 14, orbit: 150, speed: 60 },
  { name: "Saturn", size: 12, orbit: 180, speed: 90 },
  { name: "Uranus", size: 10, orbit: 210, speed: 120 },
  { name: "Neptune", size: 10, orbit: 240, speed: 150 },
];

export default function SolarSystemOverview() {
  return (
    <div className="relative mx-auto flex h-[600px] max-w-content items-center justify-center">
      {/* Sun */}
      <div className="absolute z-10 h-24 w-24">
        <SunSVG className="h-full w-full" />
      </div>

      {/* Orbits + planets */}
      {planets.map((planet) => (
        <motion.div
          key={planet.name}
          className="absolute flex items-center justify-center"
          style={{
            width: planet.orbit * 2,
            height: planet.orbit * 2,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: planet.speed,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Orbit ring */}
          <div className="absolute inset-0 rounded-full border border-starlight/10" />

          {/* Planet */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full bg-starlight"
            style={{
              width: planet.size,
              height: planet.size,
            }}
            title={planet.name}
          />
        </motion.div>
      ))}
    </div>
  );
}

import { motion } from "framer-motion";
import {
  Satellite,
  Globe,
  Radio,
  Database,
  Activity,
} from "lucide-react";

/**
 * Layer 4: Human Exploration
 * Purpose: Show effort, engineering, and human curiosity.
 */

type ExplorationAsset = {
  name: string;
  dist: string;
  speed: string;
  icon: React.ElementType;
};

const Exploration: React.FC = () => {
  const assets: ExplorationAsset[] = [
    { name: "Voyager 1", dist: "23.5B km", speed: "61,000 km/h", icon: Radio },
    {
      name: "James Webb",
      dist: "1.5M km",
      speed: "Stationary (L2)",
      icon: Satellite,
    },
    { name: "Hubble", dist: "540 km", speed: "27,000 km/h", icon: Globe },
    {
      name: "Parker Probe",
      dist: "6.9M km (Sun)",
      speed: "586,000 km/h",
      icon: Activity,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 w-full h-screen bg-[#07090f] p-12 md:p-24 overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto pt-16">
        <header className="mb-20">
          <h2 className="text-[#7aa2ff] text-[10px] font-mono font-bold tracking-[0.6em] uppercase mb-4 italic">
            Layer 04: Human Effort
          </h2>
          <h1 className="text-6xl md:text-8xl font-display font-light tracking-tighter text-[#e6e8ee]">
            Active Missions
          </h1>
          <div className="w-24 h-px bg-[#7aa2ff] mt-8" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.map((asset, i) => (
            <motion.div
              key={asset.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#11131a] border border-white/5 p-8 group hover:border-[#7aa2ff]/50 transition-all"
            >
              <asset.icon
                className="text-[#7aa2ff] mb-12 group-hover:scale-110 transition-transform"
                size={32}
                strokeWidth={1}
              />

              <h3 className="text-[#e6e8ee] font-display text-xl mb-4">
                {asset.name}
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-[#6b7280] text-[8px] font-mono uppercase tracking-widest mb-1">
                    Current Distance
                  </p>
                  <p className="text-[#a1a6b3] text-sm font-mono tracking-tight">
                    {asset.dist}
                  </p>
                </div>
                <div>
                  <p className="text-[#6b7280] text-[8px] font-mono uppercase tracking-widest mb-1">
                    Velocity
                  </p>
                  <p className="text-[#a1a6b3] text-sm font-mono tracking-tight">
                    {asset.speed}
                  </p>
                </div>
              </div>

              <button className="mt-12 text-[9px] font-mono font-bold text-[#7aa2ff] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                Telemetry Data <Radio size={10} />
              </button>
            </motion.div>
          ))}
        </div>

        <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20">
          <div className="space-y-6">
            <Database className="text-[#a1a6b3]" size={24} />
            <h4 className="text-[#e6e8ee] font-display text-2xl">
              Deep Space Network
            </h4>
            <p className="text-[#a1a6b3] text-sm leading-relaxed font-light">
              Global array of giant radio antennas that supports interplanetary
              spacecraft missions, plus a few that orbit Earth.
            </p>
          </div>

          <div className="space-y-6">
            <Globe className="text-[#a1a6b3]" size={24} />
            <h4 className="text-[#e6e8ee] font-display text-2xl">
              Agency Collaboration
            </h4>
            <p className="text-[#a1a6b3] text-sm leading-relaxed font-light">
              NASA, ESA, JAXA, and ISRO maintain shared protocols for orbital
              traffic and debris management in high-value sectors.
            </p>
          </div>

          <div className="space-y-6">
            <Radio className="text-[#a1a6b3]" size={24} />
            <h4 className="text-[#e6e8ee] font-display text-2xl">
              Signal Latency
            </h4>
            <p className="text-[#a1a6b3] text-sm leading-relaxed font-light">
              Communications are governed by the speed of light. Mars signals take
              4–24 minutes; Voyager takes nearly 22 hours.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Exploration;

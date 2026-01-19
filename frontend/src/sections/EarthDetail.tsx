import { motion } from "framer-motion";
import { Compass, Maximize2 } from "lucide-react";

/**
 * Layer 3: Detail Pages (Earth)
 * Purpose: Provide realism, evidence, and reality through texture and data.
 */

type EarthDetailProps = {
  onBack: () => void;
};

type StatItem = {
  label: string;
  val: string;
};

type MissionItem = {
  title: string;
  status: string;
  time: string;
};

const EarthDetail: React.FC<EarthDetailProps> = ({ onBack }) => {
  const stats: StatItem[] = [
    { label: "Mean Radius", val: "6,371.0 km" },
    { label: "Orbital Velocity", val: "107,000 km/h" },
    { label: "Surface Gravity", val: "9.807 m/s²" },
    { label: "Age", val: "4.54 Billion Yrs" },
  ];

  const missions: MissionItem[] = [
    { title: "ISS Observation", status: "Live", time: "14:20 UTC" },
    { title: "Artemis II Track", status: "Active", time: "02:00 UTC" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-20 w-full h-screen bg-[#07090f] overflow-hidden flex flex-col md:flex-row"
    >
      {/* Background Layer: Real Imagery */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090f] via-[#07090f]/60 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=2000"
          alt="Earth Realistic Detail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Primary Data Column */}
      <div className="relative z-20 flex-1 p-12 md:p-24 flex flex-col justify-center">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#a1a6b3] hover:text-[#e6e8ee] transition-colors mb-12 group"
        >
          <Compass size={14} className="group-hover:rotate-90 transition-transform" />
          <span className="text-[9px] font-mono font-bold tracking-[0.4em] uppercase">
            Back to Overview
          </span>
        </button>

        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-8xl font-display font-medium tracking-tighter text-[#e6e8ee] mb-4">
            Earth
          </h1>

          <p className="text-[#7aa2ff] text-[10px] font-mono font-bold tracking-[0.6em] uppercase mb-10">
            Classification: Terrestrial Oasis
          </p>

          <div className="max-w-md text-[#a1a6b3] leading-relaxed font-sans text-lg mb-14 font-light">
            The third planet from the Sun and the only astronomical object known to
            harbor life. A fragile blue sphere amidst the vast indifference of
            space.
          </div>

          <div className="grid grid-cols-2 gap-y-10 gap-x-16 border-t border-white/5 pt-12 max-w-lg">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-[#6b7280] text-[8px] font-mono font-bold uppercase tracking-[0.3em] mb-2">
                  {stat.label}
                </p>
                <p className="text-[#e6e8ee] font-display text-xl tracking-tight">
                  {stat.val}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Exploration & Surface Sidebar */}
      <div className="relative z-20 w-full md:w-[400px] bg-[#11131a]/80 backdrop-blur-3xl border-l border-white/5 p-12 flex flex-col justify-between">
        <div className="space-y-12">
          <div>
            <h3 className="text-[#a1a6b3] font-mono font-bold text-[9px] uppercase tracking-[0.4em] mb-6">
              Exploration Feed
            </h3>

            <div className="space-y-6">
              {missions.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-sm"
                >
                  <div>
                    <p className="text-[#e6e8ee] text-xs font-medium">
                      {item.title}
                    </p>
                    <p className="text-[#6b7280] text-[9px] font-mono mt-1 uppercase tracking-widest">
                      {item.time}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[8px] font-mono text-green-500 font-bold uppercase">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="w-full group overflow-hidden relative py-6 bg-transparent border border-[#a1a6b3]/30 hover:border-[#e6e8ee] transition-colors">
          <motion.div className="absolute inset-0 bg-[#e6e8ee] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative z-10 text-[9px] font-mono font-bold tracking-[0.5em] uppercase text-[#e6e8ee] group-hover:text-[#07090f] transition-colors flex items-center justify-center gap-3">
            Surface Map <Maximize2 size={12} />
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default EarthDetail;
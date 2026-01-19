import { motion } from "framer-motion";
import { Compass, Maximize2, Zap, Target } from "lucide-react";

/**
 * Layer 3: Detail Pages (Mars)
 * Tone: Scientific, dusty, evocative of human potential.
 */

type MarsDetailProps = {
  onBack: () => void;
};

type StatItem = {
  label: string;
  val: string;
};

type MissionItem = {
  title: string;
  status: string;
  site: string;
};

const MarsDetail: React.FC<MarsDetailProps> = ({ onBack }) => {
  const stats: StatItem[] = [
    { label: "Mean Radius", val: "3,389.5 km" },
    { label: "Day Length", val: "24h 37m" },
    { label: "Surface Gravity", val: "3.721 m/s²" },
    { label: "Distance from Sun", val: "227.9M km" },
  ];

  const missions: MissionItem[] = [
    { title: "Perseverance Rover", status: "Active", site: "Jezero Crater" },
    { title: "Ingenuity Flight", status: "Complete", site: "Air" },
    { title: "Hope Orbiter", status: "Active", site: "Orbit" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-20 w-full h-screen bg-[#07090f] overflow-hidden flex flex-col md:flex-row"
    >
      {/* Background Layer: Mars Surface Imagery */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090f] via-[#07090f]/40 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=2000"
          alt="Mars Surface Detail"
          className="w-full h-full object-cover grayscale-[20%] sepia-[30%]"
        />
      </div>

      {/* Primary Data Column */}
      <div className="relative z-20 flex-1 p-12 md:p-24 flex flex-col justify-center">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#a1a6b3] hover:text-[#f5c07a] transition-colors mb-12 group"
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
          <h1 className="text-8xl font-display font-medium tracking-tighter text-[#e6e8ee] mb-4 uppercase">
            Mars
          </h1>

          <p className="text-[#f5c07a] text-[10px] font-mono font-bold tracking-[0.6em] uppercase mb-10">
            Classification: The Rust-Stained Frontier
          </p>

          <div className="max-w-md text-[#a1a6b3] leading-relaxed font-sans text-lg mb-14 font-light">
            A cold, desert world with a thin atmosphere. Mars is the most explored
            object in our solar system beyond Earth, holding the secrets of
            ancient water and the potential for future human habitation.
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

      {/* Surface Exploration Sidebar */}
      <div className="relative z-20 w-full md:w-[400px] bg-[#11131a]/90 backdrop-blur-3xl border-l border-white/5 p-12 flex flex-col justify-between">
        <div className="space-y-12">
          <div>
            <h3 className="text-[#a1a6b3] font-mono font-bold text-[9px] uppercase tracking-[0.4em] mb-8 flex items-center gap-2">
              <Target size={12} className="text-[#f5c07a]" /> Robotic Presence
            </h3>

            <div className="space-y-4">
              {missions.map((item, i) => (
                <div
                  key={i}
                  className="group p-5 bg-white/[0.02] border border-white/5 rounded-sm hover:bg-white/[0.05] transition-all cursor-default"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[#e6e8ee] text-xs font-bold tracking-tight">
                      {item.title}
                    </p>
                    <span className="text-[7px] font-mono px-2 py-0.5 border border-[#f5c07a]/40 text-[#f5c07a] uppercase rounded-full">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-[#6b7280] text-[10px] font-mono uppercase tracking-widest">
                    {item.site}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-[#f5c07a]/5 border border-[#f5c07a]/10 rounded-sm">
            <div className="flex items-center gap-3 mb-3">
              <Zap size={14} className="text-[#f5c07a]" />
              <p className="text-[#e6e8ee] text-[10px] font-mono font-bold uppercase tracking-widest">
                Environment Warning
              </p>
            </div>
            <p className="text-[#a1a6b3] text-[11px] leading-relaxed italic font-light">
              Atmospheric pressure is 1% of Earth's. Global dust storms are a
              recurring seasonal threat to solar-powered assets.
            </p>
          </div>
        </div>

        <button className="w-full group overflow-hidden relative py-6 bg-transparent border border-[#f5c07a]/20 hover:border-[#f5c07a] transition-colors">
          <motion.div className="absolute inset-0 bg-[#f5c07a] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative z-10 text-[9px] font-mono font-bold tracking-[0.5em] uppercase text-[#f5c07a] group-hover:text-[#07090f] transition-colors flex items-center justify-center gap-3">
            Surface Panorama <Maximize2 size={12} />
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default MarsDetail;

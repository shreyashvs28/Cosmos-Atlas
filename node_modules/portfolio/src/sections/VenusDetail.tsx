import { motion } from "framer-motion";
import { Compass, Zap } from "lucide-react";

type VenusDetailProps = {
  onBack: () => void;
};

const VenusDetail: React.FC<VenusDetailProps> = ({ onBack }) => {
  const stats = [
    { label: "Mean Radius", val: "6,051.8 km" },
    { label: "Surface Temp", val: "≈ 462°C" },
    { label: "Day Length", val: "243 Earth days" },
    { label: "Atmosphere", val: "CO₂ (96%)" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-20 w-full h-screen bg-[#07090f] flex flex-col md:flex-row"
    >
      <div className="flex-1 p-12 md:p-24 flex flex-col justify-center">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#a1a6b3] hover:text-[#f5c07a] mb-12"
        >
          <Compass size={14} />
          <span className="text-[9px] font-mono uppercase tracking-widest">
            Back to Overview
          </span>
        </button>
        <div className="absolute inset-0 z-0 opacity-45">
            <div className="absolute inset-0 bg-gradient-to-r from-[#07090f] via-[#07090f]/70 to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1615196534011-1c3c0c7a4c93?auto=format&fit=crop&q=80&w=2000"
                    alt="Venus Radar Surface (False Color)"
                    className="w-full h-full object-cover saturate-125 contrast-110"
                />
            </div>

        <h1 className="text-8xl font-display font-light tracking-tighter text-[#e6e8ee] mb-6">
          Venus
        </h1>

        <p className="text-[#f5c07a] text-[10px] font-mono tracking-[0.6em] uppercase mb-10">
          Classification: Runaway Greenhouse World
        </p>

        <div className="max-w-md text-[#a1a6b3] text-lg leading-relaxed mb-14">
          Often called Earth’s twin by size, Venus followed a radically different
          path. Its dense atmosphere traps heat so efficiently that the surface
          is hot enough to melt lead.
        </div>

        <div className="grid grid-cols-2 gap-10 border-t border-white/5 pt-12">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-[#6b7280] text-[8px] font-mono uppercase tracking-widest mb-2">
                {s.label}
              </p>
              <p className="text-[#e6e8ee] font-display text-xl">{s.val}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-[360px] bg-[#11131a]/80 border-l border-white/5 p-10">
        <div className="space-y-6">
          <Zap className="text-[#f5c07a]" size={20} />
          <p className="text-[#a1a6b3] text-sm leading-relaxed">
            Surface pressure is over 90 times that of Earth. Spacecraft survive
            minutes to hours at best.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default VenusDetail;

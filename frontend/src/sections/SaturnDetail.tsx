import { motion } from "framer-motion";
import { Compass } from "lucide-react";

type SaturnDetailProps = {
  onBack: () => void;
};

const SaturnDetail: React.FC<SaturnDetailProps> = ({ onBack }) => {
  const stats = [
    { label: "Mean Radius", val: "58,232 km" },
    { label: "Density", val: "0.687 g/cm³" },
    { label: "Ring System", val: "Extensive" },
    { label: "Moons", val: "140+" },
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
          className="flex items-center gap-2 text-[#a1a6b3] hover:text-[#e6e8ee] mb-12"
        >
          <Compass size={14} />
          <span className="text-[9px] font-mono uppercase tracking-widest">
            Back to Overview
          </span>
        </button>

        <h1 className="text-8xl font-display font-light tracking-tighter text-[#e6e8ee] mb-6">
          Saturn
        </h1>

        <p className="text-[#e6e8ee] text-[10px] font-mono tracking-[0.6em] uppercase mb-10">
          Classification: Ringed Gas Giant
        </p>

        <div className="max-w-md text-[#a1a6b3] text-lg leading-relaxed mb-14">
          Saturn’s rings are made of ice and rock, forming the most visually
          striking structure in the solar system.
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
    </motion.div>
  );
};

export default SaturnDetail;

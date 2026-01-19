import { motion } from "framer-motion";
import { Compass, Activity } from "lucide-react";

type JupiterDetailProps = {
  onBack: () => void;
};

const JupiterDetail: React.FC<JupiterDetailProps> = ({ onBack }) => {
  const stats = [
    { label: "Mean Radius", val: "69,911 km" },
    { label: "Mass", val: "318 × Earth" },
    { label: "Moons", val: "95+" },
    { label: "Rotation", val: "9h 56m" },
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
          Jupiter
        </h1>

        <p className="text-[#7aa2ff] text-[10px] font-mono tracking-[0.6em] uppercase mb-10">
          Classification: Gas Giant
        </p>

        <div className="max-w-md text-[#a1a6b3] text-lg leading-relaxed mb-14">
          Jupiter is the most massive planet in the solar system. Its gravity
          shapes the orbits of countless objects and shields inner planets from
          frequent impacts.
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
        <Activity className="text-[#7aa2ff]" size={20} />
        <p className="mt-6 text-[#a1a6b3] text-sm leading-relaxed">
          The Great Red Spot is a storm larger than Earth that has raged for
          centuries.
        </p>
      </div>
    </motion.div>
  );
};

export default JupiterDetail;

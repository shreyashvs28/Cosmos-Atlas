import { motion } from "framer-motion";

/**
 * Layer 5: Universe Overview
 * Purpose: Establish scale beyond the Solar System.
 */

const UniverseOverview: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 w-full h-screen bg-[#07090f] p-12 md:p-24 flex items-center"
    >
      <div className="max-w-5xl">
        <p className="text-[#7aa2ff] text-[10px] font-mono font-bold tracking-[0.6em] uppercase mb-6 italic">
          Layer 05: Cosmic Scale
        </p>

        <h1 className="text-7xl md:text-8xl font-display font-light tracking-tighter text-[#e6e8ee] mb-12">
          The Observable Universe
        </h1>

        <div className="max-w-xl text-[#a1a6b3] text-lg leading-relaxed font-light">
          Everything humanity has ever observed exists within a sphere roughly
          93 billion light-years across. Beyond it lies darkness—not empty, but
          unreachable. This atlas ends where observation ends.
        </div>

        <div className="mt-20 grid grid-cols-2 gap-16">
          <div>
            <p className="text-[#6b7280] text-[9px] font-mono uppercase tracking-widest mb-2">
              Galaxies
            </p>
            <p className="text-[#e6e8ee] font-display text-2xl">
              ~2 Trillion
            </p>
          </div>

          <div>
            <p className="text-[#6b7280] text-[9px] font-mono uppercase tracking-widest mb-2">
              Age
            </p>
            <p className="text-[#e6e8ee] font-display text-2xl">
              13.8 Billion Years
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UniverseOverview;

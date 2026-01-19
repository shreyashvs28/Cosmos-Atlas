import { motion } from "framer-motion";

/**
 * Layer 6: Extreme Objects
 * Purpose: Show limits of physics and observation.
 */

const BlackHoleDetail: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 w-full h-screen bg-[#07090f] p-12 md:p-24 flex items-center"
    >
      <div className="max-w-4xl">
        <p className="text-[#f5c07a] text-[10px] font-mono font-bold tracking-[0.6em] uppercase mb-6 italic">
          Extreme Object
        </p>

        <h1 className="text-8xl font-display font-light tracking-tighter text-[#e6e8ee] mb-10">
          Black Hole
        </h1>

        <div className="max-w-xl text-[#a1a6b3] text-lg leading-relaxed font-light mb-16">
          A region of spacetime where gravity is so intense that nothing—not even
          light—can escape. Black holes are not cosmic vacuum cleaners. They are
          consequences of mass, collapse, and geometry.
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div>
            <p className="text-[#6b7280] text-[9px] font-mono uppercase tracking-widest mb-2">
              Event Horizon
            </p>
            <p className="text-[#e6e8ee] font-display text-xl">
              Point of No Return
            </p>
          </div>

          <div>
            <p className="text-[#6b7280] text-[9px] font-mono uppercase tracking-widest mb-2">
              Observation
            </p>
            <p className="text-[#e6e8ee] font-display text-xl">
              Indirect Only
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlackHoleDetail;

import { motion } from "framer-motion";

/**
 * Layer 1: Orientation (Landing)
 * Purpose: Ground the user, establish scale, and build trust.
 */

type LandingProps = {
  onExplore: () => void;
};

const Landing: React.FC<LandingProps> = ({ onExplore }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <h2 className="text-[10px] font-mono font-bold tracking-[0.5em] uppercase text-[#a1a6b3] mb-6 italic">
          Protocol 01: You are here
        </h2>

        <div className="relative inline-block">
          {/* Cosmic Glow Effect */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-[#7aa2ff]/20 blur-3xl"
          />
          <h1 className="text-8xl md:text-[10rem] font-display font-light tracking-tighter text-[#e6e8ee] mb-2 leading-none">
            EARTH
          </h1>
        </div>

        <p className="text-[#6b7280] text-[10px] font-mono tracking-[0.4em] uppercase mt-6">
          Position: Inner Rim • Sector 03
        </p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05, letterSpacing: "0.6em" }}
        whileTap={{ scale: 0.98 }}
        onClick={onExplore}
        className="px-14 py-4 border border-[#a1a6b3]/20 text-[#e6e8ee] text-[10px] font-mono font-bold tracking-[0.4em] uppercase hover:bg-[#e6e8ee] hover:text-[#07090f] transition-all duration-500 backdrop-blur-md"
      >
        Initialize Atlas
      </motion.button>
    </motion.div>
  );
};

export default Landing;

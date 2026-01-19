import { motion } from "framer-motion";

/**
 * Layer 7: Knowledge Base
 * Purpose: Structured scientific reference.
 */

const KnowledgeBase: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 w-full h-screen bg-[#07090f] p-12 md:p-24 overflow-y-auto"
    >
      <div className="max-w-5xl">
        <h1 className="text-6xl font-display font-light tracking-tighter text-[#e6e8ee] mb-16">
          Reference Index
        </h1>

        <div className="space-y-10">
          {[
            "Orbital Mechanics",
            "Stellar Evolution",
            "Planetary Formation",
            "Relativity & Time",
            "Cosmic Microwave Background",
          ].map((topic) => (
            <div
              key={topic}
              className="border border-white/5 p-8 hover:border-[#7aa2ff]/40 transition-all"
            >
              <p className="text-[#e6e8ee] font-display text-xl mb-2">
                {topic}
              </p>
              <p className="text-[#a1a6b3] text-sm leading-relaxed">
                A structured overview of {topic.toLowerCase()} with verified
                scientific sources.
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default KnowledgeBase;

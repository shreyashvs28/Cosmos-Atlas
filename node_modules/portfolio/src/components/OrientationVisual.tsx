import { motion } from "framer-motion";
import EarthSVG from "../assets/svg/EarthSVG";
import SunSVG from "../assets/svg/SunSVG";

const easeSmooth = [0.4, 0, 0.2, 1];

export default function OrientationVisual() {
  return (
    <div className="relative mx-auto mt-20 flex max-w-content items-center justify-between px-6">
      {/* Earth */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: easeSmooth }}
        className="flex flex-col items-center"
      >
        <div className="h-14 w-14">
          <EarthSVG className="h-full w-full" />
        </div>
        <span className="mt-3 text-xs text-starlight-faint">Earth</span>
      </motion.div>

      {/* Distance line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, ease: easeSmooth, delay: 0.2 }}
        className="relative mx-6 flex-1 origin-left"
      >
        <div className="h-px bg-gradient-to-r from-starlight-faint/40 to-starlight-faint/10" />

        <span className="absolute left-1/2 top-3 -translate-x-1/2 text-[10px] tracking-wide text-starlight-faint">
          149.6 million km · 8 light minutes
        </span>
      </motion.div>

      {/* Sun */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: easeSmooth }}
        className="flex flex-col items-center"
      >
        <div className="h-20 w-20">
          <SunSVG className="h-full w-full" />
        </div>
        <span className="mt-3 text-xs text-starlight-faint">Sun</span>
      </motion.div>
    </div>
  );
}

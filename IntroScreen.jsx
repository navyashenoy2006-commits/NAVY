import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { introHeading } from "@/data";

export default function IntroScreen({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="flex flex-col items-center justify-center relative text-center "
    >
      <motion.div >
        <h1 className="text-4xl md:text-5xl font-dancing font-semibold text-rose-500/85 tracking-wide">
          {introHeading}
        </h1>
      </motion.div>

      <motion.button
        onClick={onNext}
        className="mt-8 relative group will-change-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 bg-rose-300/60 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
        <div className="relative w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-rose-100">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-14 h-14 text-rose-400 fill-current" />
          </motion.div>
        </div>
      </motion.button>
      <p className="text-rose-400/70 text-sm font-medium tracking-wide mt-4">
        Tap to open
      </p>

    </motion.div>
  );
};
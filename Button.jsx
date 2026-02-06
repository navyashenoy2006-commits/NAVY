import { motion, } from 'framer-motion';

export function Button({ onClick, children, className = "" }) {
    return (
        <motion.button
            whileHover={{ scale: 1.02, }}
            whileTap={{ scale: 0.97 }}
            onClick={onClick}
            className={`px-8 py-3 bg-linear-to-r from-rose-400 to-rose-500/75 text-white rounded-full font-medium tracking-wide drop-shadow-2xl shadow-xl hover:shadow-rose-400/25 shadow-rose-200 transition-all duration-300 flex items-center gap-2 will-change-transform ${className}`}
        >
            {children}
        </motion.button>
    )
}
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../Button";
import { MoveRight, Smile } from "lucide-react";
import { compliments, complimentsHeading } from "@/data";

const Polaroid = ({ text, colorClass, rotate }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-40 h-48 cursor-pointer perspective-1000 will-change-transform"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            <motion.div
                className="w-full h-full preserve-3d relative will-change-transform"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden bg-white p-3 shadow-inner drop-shadow-xl flex flex-col items-center">
                    <div className={`w-full h-32 ${colorClass} bg-opacity-20 flex items-center justify-center mb-4 overflow-hidden relative`}>
                        <div className="absolute inset-0 opacity-10 bg-black mix-blend-overlay"></div>
                        <Smile className={`w-12 h-12 text-rose-50`} />
                    </div>

                    {/* Cute handwritten area */}
                    <div className="px-2 py-2 bg-white">
                        <div className="flex justify-center space-x-1">
                            <div className="w-8 h-0.5 bg-pink-200 rounded-full"></div>
                            <div className="w-6 h-0.5 bg-purple-200 rounded-full"></div>
                            <div className="w-10 h-0.5 bg-rose-200 rounded-full"></div>
                        </div>
                        <div className="flex justify-center space-x-1 mt-1.5">
                            <div className="w-12 h-0.5 bg-purple-200 rounded-full"></div>
                            <div className="w-4 h-0.5 bg-rose-200 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Back (Message Side) */}
                <div
                    className="absolute inset-0 backface-hidden bg-white p-4 shadow-xl flex flex-col justify-center text-center border-2 border-rose-100 overflow-hiden"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="h-36 overflow-auto flex items-start">
                        <p className="text-sm text-gray-700 font-medium leading-relaxed my-auto">{text}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function ComplimentsScreen({ onNext }) {
    return (
        <motion.div
            className="flex flex-col items-center justify-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h2 className="text-4xl md:text-5xl text-balance font-dancing font-semibold text-rose-500/85 mb-8 z-10 text-center">
                {complimentsHeading}
            </h2>

            <div className="relative w-full max-w-md h-96 flex items-center justify-center">
                <div className="absolute top-0 max-[366px]:left-0 left-3 md:left-14 z-10 -rotate-6">
                    <Polaroid
                        text={compliments[0]}
                        colorClass="bg-amber-400"
                    />
                </div>
                <div className="absolute top-3 md:top-4 max-[366px]:right-0 right-4 md:right-14 z-20 rotate-12">
                    <Polaroid
                        text={compliments[1]}
                        colorClass="bg-purple-400"
                    />
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 -rotate-2">
                    <Polaroid
                        text={compliments[2]}
                        colorClass="bg-rose-400"
                    />
                </div>
            </div>

            <motion.p
                className="text-rose-400/60 text-sm mt-4 animate-pulse font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                Tap the cards to flip them
            </motion.p>

            <Button
                onClick={onNext}
                className="mt-4"
            >
                One more thing <MoveRight size={18} className="mt-0.5" />
            </Button>
        </motion.div>
    );
};
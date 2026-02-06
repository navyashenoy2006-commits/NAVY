import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Heart, MoveRight, Receipt } from "lucide-react";

export default function ScannerScreen({ onNext }) {
    const [stage, setStage] = useState('scanning'); // scanning, printing, done
    const [scanText, setScanText] = useState("Scanning...");

    useEffect(() => {
        // Sequence of scanner texts
        const texts = [
            "Checking smile...",
            "Measuring cuteness...",
            "Detecting sweetness...",
            "Almost done..."
        ];

        let i = 0;
        const interval = setInterval(() => {
            if (i < texts.length) {
                setScanText(texts[i]);
                i++;
            }
        }, 1100);

        // Finish scanning
        const timer = setTimeout(() => {
            clearInterval(interval);
            setStage('printing');
        }, 4800);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    return (
        <motion.div
            className="flex flex-col items-center justify-center relative"
        >
            {stage === 'scanning' ? (
                <div className="flex flex-col items-center">
                    <div className="relative w-72 h-72 flex items-center justify-center">
                        <motion.div
                            className="absolute inset-0 border-4 border-rose-400/50 rounded-full"
                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}

                        />
                        <motion.div
                            className="absolute inset-4 border-4 border-rose-200/40 rounded-full"
                            animate={{ scale: [1, 1.05, 1], rotate: -180 }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />

                        <motion.div
                            className="absolute inset-0 rounded-full overflow-hidden"
                        >
                            <motion.div
                                className="w-full h-1/2 bg-linear-to-b from-transparent to-rose-300/25 border-b-2 border-rose-400"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                style={{ transformOrigin: "bottom center" }}
                            />
                        </motion.div>

                        {/* Icon */}
                        <div className="bg-white/70 backdrop-blur-md p-6 rounded-full shadow-sm z-10">
                            <Heart className="w-12 h-12 fill-rose-400/80 stroke-none" />
                        </div>
                    </div>

                    <motion.p
                        key={scanText}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 text-xl text-gray-600 font-medium"
                    >
                        {scanText}
                    </motion.p>
                </div>
            ) : (
                <motion.div className="flex flex-col items-center">
                    {/* CUTE RECEIPT */}
                    <motion.div
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        className="bg-white w-72 p-6 shadow-2xl relative mb-8"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 95% 98%, 90% 100%, 85% 98%, 80% 100%, 75% 98%, 70% 100%, 65% 98%, 60% 100%, 55% 98%, 50% 100%, 45% 98%, 40% 100%, 35% 98%, 30% 100%, 25% 98%, 20% 100%, 15% 98%, 10% 100%, 5% 98%, 0 100%)"
                        }}
                    >
                        <div className="text-center border-b-2 border-dashed border-gray-200 pb-4 mb-4">
                            <div className="flex justify-center mb-2"><Receipt className="text-rose-300" /></div>
                            <h2 className="font-bold text-gray-500 text-sm tracking-widest">OFFICIAL REPORT</h2>
                            <p className="text-xs text-gray-400">{new Date().toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            })
                            }</p>
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  -z-10">
                            <Heart size={160} className="text-rose-100 fill-current opacity-40" />
                        </div>

                        <div className="space-y-3 font-mono text-sm text-gray-600 mb-6">
                            <div className="flex justify-between">
                                <span>ITEM:</span>
                                <span className="font-bold">YOU</span>
                            </div>
                            <div className="flex justify-between">
                                <span>CUTENESS:</span>
                                <span className="font-bold">UNLIMITED</span>
                            </div>
                            <div className="flex justify-between">
                                <span>SWEETNESS:</span>
                                <span className="font-bold">OVERLOAD</span>
                            </div>
                            <div className="flex justify-between">
                                <span>VIBE:</span>
                                <span className="font-bold">PERFECT</span>
                            </div>
                        </div>

                        <div className="border-t-2 border-dashed border-gray-200 pt-4 text-center">
                            <p className="font-bold text-rose-500/85 text-lg mb-1">TOTAL: 100% LOVELY</p>
                            <p className="text-xs text-gray-400">||| || ||| || ||||</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}>
                        <Button onClick={onNext}>
                            Continue <MoveRight size={18} className="mt-0.5" />
                        </Button>
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    );
};

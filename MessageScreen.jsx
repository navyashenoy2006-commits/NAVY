import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "../Button";
import { message, messageHeading } from "@/data";

export default function MessageScreen({ onNext }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="flex flex-col items-center justify-center p-6"
        >
            {!isOpen ? (
                <motion.button
                    onClick={() => setIsOpen(true)}
                    className="group relative cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    layoutId="envelope"
                >
                    {/* Envelope Visual */}
                    <div className="w-72 h-48 bg-rose-200 rounded-lg shadow-xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 border-t-100 border-r-144 border-l-144 border-t-rose-300/50 border-r-transparent border-l-transparent" />
                        <div className="absolute bottom-0 w-full h-1/2 bg-rose-300/30" />
                        <div className="bg-white/70 backdrop-blur-md  shadow-md rounded-full p-3 relative">
                            <Mail className="text-rose-500 w-10 h-10" />
                        </div>
                    </div>
                    <p className="mt-6 text-rose-500/70 text-sm font-medium text-center animate-pulse">Tap to read letter</p>
                </motion.button>
            ) : (
                <motion.div
                    className="w-full h-full max-w-lg bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg relative shadow-lg"
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >

                    <h3 className="font-dancing text-3xl font-medium text-rose-500/85 mb-4">{messageHeading},</h3>

                    <div className="text-gray-700 leading-relaxed whitespace-pre-wrap max-h-67 overflow-auto">
                        <p>
                            {message}
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}>
                        <Button onClick={onNext} className="mx-auto mt-8">
                            One last thing
                        </Button>
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    );
};
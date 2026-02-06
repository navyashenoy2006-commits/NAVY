"use client"

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Background from "@/components/Background";
import IntroScreen from "@/components/screens/IntroScreen";
import ScannerScreen from "@/components/screens/ScannerScreen";
import ComplimentsScreen from "@/components/screens/ComplimentsScreen";
import MessageScreen from "@/components/screens/MessageScreen";
import OutroScreen from "@/components/screens/OutroScreen";
import Music from "@/components/Music";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [musicOn, setMusicOn] = useState(false)

  const screens = [
    <IntroScreen key="intro" onNext={() => {
      setMusicOn(true)
      setCurrentScreen(1)
    }} />,
    <ScannerScreen key="scanner" onNext={() => setCurrentScreen(2)} />,
    <ComplimentsScreen key="compliments" onNext={() => setCurrentScreen(3)} />,
    <MessageScreen key="message" onNext={() => setCurrentScreen(4)} />,
    <OutroScreen key="outro" />
  ]
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden" >

      <Background />

      <Music shouldPlay={musicOn} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          exit={{ opacity: 0, }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="px-4 py-6 will-change-transform"
        >
          {screens[currentScreen]}
        </motion.div>
      </AnimatePresence>

      {/* Watermark */}
      {/* <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="fixed bottom-4 right-4 text-sm text-black/40 pointer-events-none z-50 font-light">
        @anujbuilds
      </motion.div> */}
    </div >
  );
}

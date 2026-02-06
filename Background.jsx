import { memo, useEffect, useState } from "react"
import { motion } from "framer-motion"

const PETAL_COLORS = [
    "#ffc6c4",
    "#ffd6e0",
    "#fde2ea",
    "#e9d5ff",
    "#ffe4c7",
]


function Background() {
    const [petals, setPetals] = useState([])

    useEffect(() => {
        const petalCount = 20
        const newPetals = Array.from({ length: petalCount }).map((_, i) => ({
            id: `petal-${i}`,
            x: Math.random() * 100,
            delay: Math.random() * 10,
            duration: Math.random() * 10 + 10,
            size: Math.random() * 12 + 8,
            color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
            rotation: Math.random() * 360,
        }))
        setPetals(newPetals)
    }, [])

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none w-full h-full">
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    background: `
                        radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.1), transparent 60%),
                        radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.1), transparent 62%),
                        radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.1), transparent 62%),
                        radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.1), transparent 62%),
                        linear-gradient(180deg, #fff5f7 0%, #fde7ee 100%)
                    `,
                }}
            />

            {petals.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute -top-10"
                    style={{
                        left: `${p.x}%`,
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        borderRadius: "100% 0 100% 0",
                        opacity: 0.8,
                        boxShadow: "0 2px 10px rgba(255, 182, 193, 0.3)"
                    }}
                    initial={{ y: "0", opacity: 0 }}
                    animate={{
                        y: ["-2vh", "110vh"],
                        x: [0, Math.sin(p.delay) * 80, 0],
                        rotate: [p.rotation, p.rotation + 360],
                        opacity: [0.5, 1, 1, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay,
                        x: {
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut"
                        }
                    }}
                />
            ))}
        </div>
    )
}

export default memo(Background)
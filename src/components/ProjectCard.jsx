import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export default function ProjectCard({ imgSrc, rotation, hoverColor }) {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                initial={{ y: 0, rotate: rotation }}
                animate={{ y: [-10, 0, -10] }}
                transition={{ repeat: Infinity, duration: 4, delay: Math.floor(Math.random()*3) }}
                onMouseOver={() =>setIsHovering(true)} onMouseOut={() =>setIsHovering(false)}
                className="relative flex flex-col items-center min-w-[27rem] max-w-[27rem] h-64 rounded-xl"
                style={{ boxShadow: "gray 2px 2px 30px" }}
            >
                <div className="w-full h-full border-2 border-white rounded-xl" style={{ background: `url(${imgSrc})`, backgroundPosition: "center" }}></div>
                <AnimatePresence>
                    {isHovering ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={"w-full h-full absolute px-6 py-4 bg-opacity-90 rounded-xl text-black"} style={{ background: hoverColor }}>
                            <p className="text-2xl pb-2">Jean Portfolio</p>
                            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id elit id nulla vestibulum commodo id quis arcu. Vivamus ultricies id orci necegestas. Aenean tristique hendrerit</p>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    )
}
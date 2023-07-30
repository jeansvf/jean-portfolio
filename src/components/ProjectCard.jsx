import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { AiFillLock } from "react-icons/ai"
import { BiLinkExternal } from "react-icons/bi";

export default function ProjectCard({ locked, imgSrc, rotation, hoverColor, title, description, gitLink, linkedinLink }) {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="sm:min-w-[32rem] sm:max-w-[32rem] max-sm:w-[22rem] mx-6 xl:mb-9 mb-16 xl:mx-28"
        >
            <motion.div
                initial={{ y: 0, rotate: rotation }}
                animate={{ y: [-8, 0, -8] }}
                transition={{ repeat: Infinity, duration: 4, delay: Math.floor(Math.random()*3) }}
                onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}
                className="relative flex flex-col items-center h-52 sm:h-72 rounded-xl"
                style={{ boxShadow: "gray 2px 2px 30px" }}
            >
                {!locked ? (
                    <>
                        <div className="w-full h-full border-2 border-white rounded-xl" style={{ background: `url(${imgSrc})`, backgroundSize: "cover" }}></div>
                        <AnimatePresence>
                            {isHovering ? (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={"w-full h-full absolute px-6 max-sm:py-3 py-4 bg-opacity-90 rounded-xl text-black"} style={{ background: hoverColor }}>
                                    <p className="max-sm:text-xl text-2xl pb-2 font-bold">{title}</p>
                                    <p className="max-sm:text-base text-xl font-semibold">{description}</p>
                                    <div className="absolute flex items-center text-white right-3 bottom-3">
                                        <a href={gitLink} target="_blank" rel="noopener noreferrer" className="mr-2 text-2xl">
                                            <BsGithub />
                                        </a>
                                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-3xl">
                                            <BiLinkExternal />
                                        </a>
                                    </div>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>
                    </>
                ) : (
                    <>
                        <div className="flex items-center justify-center w-full h-full border-2 border-white rounded-xl" style={{ background: `url(${imgSrc})`, backgroundSize: "cover" }}>
                            <AiFillLock className="text-4xl" />
                        </div>
                    </>
                )}
            </motion.div>
        </motion.div>
    )
}
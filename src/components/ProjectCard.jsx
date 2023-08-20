import { BsGithub } from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";
import { AnimatePresence, motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { AiFillLock } from "react-icons/ai"
import { BiLinkExternal } from "react-icons/bi";
import { SiFirebase, SiTailwindcss } from "react-icons/si";

export default function ProjectCard({ locked, imgSrc, rotation, hoverColor, title, description, gitLink, websiteLink }) {
    const [isHovering, setIsHovering] = useState(false)

    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: true })

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
            transition={{ duration: 1 }}
            className="sm:min-w-[32rem] sm:max-w-[32rem] max-sm:w-[21rem] mx-6 xl:mb-9 mb-16 xl:mx-28"
            ref={cardRef}
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
                        <div className="w-full h-full border-2 border-white rounded-xl" style={{ background: `url(${imgSrc})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                        <AnimatePresence>
                            {isHovering ? (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={"w-full h-full absolute px-6 max-sm:py-3 py-4 bg-opacity-90 rounded-xl text-black"} style={{ background: hoverColor }}>
                                    <p className="max-sm:text-xl text-2xl pb-2 font-bold">{title}</p>
                                    <p className="h-[67%] overflow-auto max-sm:text-base text-xl font-semibold">{description}</p>
                                    <div className="absolute flex items-center justify-end w-full text-white right-3 bottom-3">
                                        <div className="flex mr-auto ml-9">
                                            <p className="text-lg">Tech stack:</p>
                                            <GrReactjs className="text-2xl mr-auto mx-1.5" />
                                            <SiFirebase className="text-2xl mr-auto mx-1.5" />
                                            <SiTailwindcss className="text-2xl mr-auto mx-1.5" />
                                        </div>
                                        <a href={gitLink} target="_blank" rel="noopener noreferrer" className="mr-2 text-2xl">
                                            <BsGithub />
                                        </a>
                                        <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="text-3xl">
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
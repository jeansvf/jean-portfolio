import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { BsChevronDown } from "react-icons/bs"

export default function ScrollArrow({ element, title }) {
    const [isHoveringArrow, setIsHoveringArrow] = useState(false)

    return (
        <AnimatePresence>
                <motion.button
                    type="button"
                    onClick={() => element.current.scrollIntoView({ behavior: 'smooth' })}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .5 }}
                    onMouseOver={() => setIsHoveringArrow(true)}
                    onMouseOut={() => setIsHoveringArrow(false)}
                    className='absolute cursor-none bottom-0 left-1/2 -translate-x-1/2 text-xl font-righteous mb-2'
                >
                    <motion.div
                        animate={{ y: [-10, 0, -10] }}
                        transition={{ repeat: Infinity, duration: 1, delay: .5 }}
                        className='flex flex-col items-center min-h-[2.5rem]'
                    >
                        <AnimatePresence>
                            {isHoveringArrow ? (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className='text-[#969696] text-sm'
                                >
                                    {title}
                                </motion.p>
                            ) : null}
                        </AnimatePresence>
                        <div className="absolute bottom-0">
                            <BsChevronDown />
                        </div>
                    </motion.div>
                </motion.button>
        </AnimatePresence>
    )
}
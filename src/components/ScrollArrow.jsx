import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { BsChevronDown } from "react-icons/bs"

export default function ScrollArrow({ scrollPosition, maxScrollValue, element }) {
    const [isHoveringArrow, setIsHoveringArrow] = useState(false)

    return (
        <AnimatePresence>
            {scrollPosition < maxScrollValue ? (
                <motion.div
                    onClick={() => element.current.scrollIntoView({ behavior: 'smooth' })}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: .5 }}
                    onMouseOver={() => setIsHoveringArrow(true)}
                    onMouseOut={() => setIsHoveringArrow(false)}
                    className='absolute bottom-0 left-1/2 -translate-x-1/2 h-[3rem] text-xl mb-2'
                >
                    <motion.div
                        initial={{ y: 0 }}
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
                                className='text-[#969696] text-sm'>
                                    Projects
                                </motion.p>
                            ) : null}
                        </AnimatePresence>
                        <div className="absolute bottom-0">
                            <BsChevronDown />
                        </div>
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    )
}
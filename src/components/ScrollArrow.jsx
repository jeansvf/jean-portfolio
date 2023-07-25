import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { BsChevronDown } from "react-icons/bs"

export default function ScrollArrow({ scrollPosition, element }) {
    const [isHoveringArrow, setIsHoveringArrow] = useState(false)

    useEffect(() => console.log(element), [element])

    return (
        <>
            <AnimatePresence>
                {scrollPosition < 200 ? (
                    <motion.div
                        onClick={() => element.current.scrollIntoView({ behavior: 'smooth' })}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: .5 }}
                        className='absolute left-1/2 px-8 pt-8 -translate-x-1/2 bottom-3 text-xl'
                        onMouseOver={() => setIsHoveringArrow(true)}
                        onMouseOut={() => setIsHoveringArrow(false)}
                    >
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [-10, 0, -10] }}
                            transition={{ repeat: Infinity, duration: 1, delay: .5 }}
                            className='flex flex-col items-center'
                        >
                            <AnimatePresence>
                                {isHoveringArrow ? (
                                    <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className='text-[#969696] text-sm'>
                                        My Projects
                                    </motion.p>
                                ) : null}
                            </AnimatePresence>
                            <BsChevronDown />
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    )
}
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BsChevronDown, BsGithub, BsLinkedin } from 'react-icons/bs'

function App() {

    const [mouseX, setMouseX] = useState(-100)
    const [mouseY, setMouseY] = useState(-100)
    const [isHoveringArrow, setIsHoveringArrow] = useState(false)

    useEffect(() => {
        document.addEventListener("mousemove", (event) => {
            setMouseX(event.clientX)
            setMouseY(event.clientY)
        })
        document.addEventListener("contextmenu", (event) => event.preventDefault())
    }, [])
    return (
        <main className="w-full pt-44 pl-36 text-white font-righteous">
            {/* <div className="absolute w-10 h-10 z-30 rounded-full pointer-events-none bg-white shadow-black shadow-2xl" style={{ left: mouseX, top: mouseY, translate: "-50% -50%", mixBlendMode: "exclusion" }}></div> */}
            
            <div className="absolute w-10 h-10 z-30 rounded-full pointer-events-none bg-white shadow-black shadow-2xl" style={{ left: mouseX, top: mouseY, translate: "-50% -50%", mixBlendMode: "exclusion" }}></div>
            
            <h1 className="text-[5rem] leading-[1.2]">Welcome! I’m <span className="text-gradient-to-right">Jean</span>, a<br/>Front-end Web Developer</h1>
            <h2 className='text-[#635F5F] font-normal text-[1.3rem] pl-1'>I don’t know what could be a good subtitle</h2>
            <div className='flex mt-5 ml-4'>
                <motion.a
                    href='https://www.linkedin.com/in/jean-silva-192319254/'
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ rotate: -180, x: -310 }}
                    animate={{ rotate: 360, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeIn", type: "spring" }}
                    whileHover={{ scale: 1.1, transition: { duration: .1 } }} className='flex items-center justify-center w-14 h-14 mr-6 bg-white rounded-[1.15rem] text-black text-3xl cursor-none'
                >
                    <BsGithub />
                </motion.a>
                <motion.a
                    href='https://github.com/jeansvf'
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ rotate: -180, x: -310 }}
                    animate={{ rotate: 360, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeIn", type: "spring" }}
                    whileHover={{ scale: 1.1, transition: { duration: .1 } }}
                    className='flex items-center justify-center w-14 h-14 bg-white rounded-[1.15rem] text-black text-3xl cursor-none'
                >
                    <BsLinkedin />
                </motion.a>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .8 }}
                className='absolute left-1/2 px-8 pt-8 -translate-x-1/2 bottom-3 text-xl'
                onMouseOver={() => setIsHoveringArrow(true)}
                onMouseOut={() => setIsHoveringArrow(false)}
            >
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [-10, 0, -10] }}
                    transition={{ repeat: Infinity, duration: 1, delay: .8 }}
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
        </main>
    )
}

export default App
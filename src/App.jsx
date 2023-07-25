import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import SocialMedia from './components/SocialMedia'
import ScrollArrow from './components/ScrollArrow'
import ProjectCard from './components/ProjectCard'

function App() {
    const [mouseX, setMouseX] = useState(-200)
    const [mouseY, setMouseY] = useState(-200)

    const [backgroundSize, setBackgroundSize] = useState(0)
    const [backgroundX, setBackgroundX] = useState(0)
    const [backgroundY, setBackgroundY] = useState(300)

    const [scrollPosition, setScrollPosition] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState("#0B0B0B")

    const firstSectionRef = useRef()

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollPosition(window.scrollY)
            window.scrollY > 550 ? setBackgroundColor("#000") : setBackgroundColor("#0B0B0B")
        })
    }, [])

    const lightTopRight = () => {
        const intervalX = setInterval(() => {
            setBackgroundX((prevCount) => prevCount == 1000 ? (clearInterval(intervalX), lightLeft(), prevCount) : prevCount + 10)
        }, 15)
        
        const intervalY = setInterval(() => {
            setBackgroundY((prevCount) => prevCount == 0 ? (clearInterval(intervalY), prevCount) : prevCount - 5)
        }, 15)
    }

    const lightLeft = () => {
        setTimeout(() => {    
            const intervalX = setInterval(() => {
                setBackgroundX((prevCount) => prevCount <= -140 ? (clearInterval(intervalX), lightWelcome(), prevCount) : prevCount - 5)
            }, 15)
            
            const intervalY = setInterval(() => {
                setBackgroundY((prevCount) => prevCount >= 80 ? (clearInterval(intervalY), prevCount) : prevCount + 1)
            }, 20)
        },  100)
    }
    
    const lightWelcome = () => {
        setTimeout(() => {
            const intervalX = setInterval(() => {
                setBackgroundX((prevCount) => prevCount >= 120 ? (clearInterval(intervalX), lightExplosion(), prevCount) : prevCount + 2)
            }, 15)
            
            const intervalY = setInterval(() => {
                setBackgroundY((prevCount) => prevCount <= 50 ? (clearInterval(intervalY), prevCount) : prevCount - 2)
            }, 15)    
        }, 300)
    }

    const lightExplosion = () => {
        setTimeout(() => {
            const invervalBackgroundSize = setInterval(() => {
                setBackgroundSize((prevCount) => prevCount >= 160 ? (clearInterval(invervalBackgroundSize), prevCount) : prevCount + 1)
            }, 20)

            const intervalX = setInterval(() => {
                setBackgroundX((prevCount) => prevCount <= -800 ? (clearInterval(intervalX), prevCount) : prevCount - 10)
            }, 20)
            
            const intervalY = setInterval(() => {
                setBackgroundY((prevCount) => prevCount <= -800 ? (clearInterval(intervalY), prevCount) : prevCount - 10)
            }, 20)
        }, 250)
    }

    useEffect(() => {
        document.addEventListener("mousemove", (event) => {
            setMouseX(event.clientX)
            setMouseY(event.clientY)
        })
        document.addEventListener("contextmenu", (event) => event.preventDefault())

        // turn the flashlight on
        setTimeout(() => {
            setBackgroundSize(20)
        }, 500)

        // first maneuver to the top right
        setTimeout(() => {
            lightTopRight()
        }, 1000)
    }, [])

    return (
        <motion.main
            className="overflow-hidden w-screen h-full text-white font-righteous"
            animate={{ backgroundColor }}
            transition={{ duration: .5 }}
        >
            <div
                className="overflow-hidden w-full h-screen pl-36 pt-44 text-white font-righteous z-20"
                style={{
                    background: "url(https://static.vecteezy.com/system/resources/previews/021/911/748/large_2x/white-circle-free-png.png)",
                    backgroundSize: `${backgroundSize}rem`,
                    backgroundRepeat: "no-repeat",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    backgroundPositionX: backgroundX,
                    backgroundPositionY: backgroundY,
                }}
            >
                <div className="fixed w-8 h-8 z-30 rounded-full pointer-events-none bg-white shadow-black shadow-2xl" style={{ left: mouseX, top: mouseY, translate: "-50% -50%", mixBlendMode: "exclusion" }}></div>
                
                <h1 className="text-[5rem] w-fit leading-[1.2] text-transparent">
                    Welcome! I’m&nbsp;
                    {backgroundSize > 150 ? (
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }} className='relative' style={{ background: "linear-gradient(to right, #26F2FF, #CD40FF)", backgroundClip: "text", WebkitBackgroundClip: "text" }}>Jean</motion.span>
                    ) : (
                        <span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }}>Jean</span>
                    )},
                    a<br/>Front-end Web Developer
                </h1>
                
                {backgroundSize > 150 ? (
                    <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }} className='relative text-[1.3rem] pl-1 text-[#635F5F]'>I don’t know what could be a good subtitle</motion.h2>
                ) : (
                    <h2 className='text-[1.3rem] pl-1 text-transparent'>I don’t know what would be a good subtitle</h2>
                )}

                <SocialMedia backgroundSize={backgroundSize} />
            </div>

            <div ref={firstSectionRef} className='flex justify-center w-full h-screen'>
                <motion.h2
                    initial={{ opacity: 0, y: -12 }}
                    whileInView={{ opacity: 1, y: -0 }}
                    transition={{ delay: .3, duration: .6 }}
                    className='text-[4.5rem] mt-20'
                >
                    Projects
                </motion.h2>
            </div>

            {backgroundSize > 150 ? <ScrollArrow scrollPosition={scrollPosition} element={firstSectionRef} /> : null}
        </motion.main>
    )
}

export default App
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import SocialMedia from './components/SocialMedia'
import ScrollArrow from './components/ScrollArrow'
import ProjectCard from './components/ProjectCard'
import MainTitle from './components/MainTitle'
import ProjectsSection from './components/ProjectsSection'
import AboutMeSection from './components/AboutMeSection'
import Footer from './components/Footer'

function App() {
    const [mouseX, setMouseX] = useState(-200)
    const [mouseY, setMouseY] = useState(-200)

    const [backgroundSize, setBackgroundSize] = useState(0)
    const [backgroundX, setBackgroundX] = useState(0)
    const [backgroundY, setBackgroundY] = useState(300)

    const [scrollPosition, setScrollPosition] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState("#0B0B0B")

    const projectsSectionRef = useRef()
    const aboutMeSectionRef = useRef()
    const footerRef = useRef()

    // TODO: AppContext

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollPosition(window.scrollY)
            
            window.scrollY < 550 ? setBackgroundColor("#0B0B0B") : window.scrollY > 1500 ? setBackgroundColor("#030A0B") : setBackgroundColor("#070707")
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

        // first maneuver to top right
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
            <div className="fixed w-8 h-8 z-50 rounded-full pointer-events-none bg-white shadow-black shadow-2xl" style={{ left: mouseX, top: mouseY, translate: "-50% -50%", mixBlendMode: "exclusion" }}></div>
            
            <MainTitle backgroundSize={backgroundSize} backgroundX={backgroundX} backgroundY={backgroundY} mouseX={mouseX} mouseY={mouseY} scrollPosition={scrollPosition} projectsSectionRef={projectsSectionRef} />
            
            <ProjectsSection projectsSectionRef={projectsSectionRef} scrollPosition={scrollPosition} aboutMeSectionRef={aboutMeSectionRef} />

            <AboutMeSection aboutMeSectionRef={aboutMeSectionRef} scrollPosition={scrollPosition} footerRef={footerRef} />

            <Footer footerRef={footerRef} />
        </motion.main>
    )
}

export default App
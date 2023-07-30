import { animate, motion, useMotionValue } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import MainTitle from './components/MainTitle'
import ProjectsSection from './components/ProjectsSection'
import AboutMeSection from './components/AboutMeSection'
import Footer from './components/Footer'
import topRightSwoosh from './assets/sound-effects/swoosh1.mp3'

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
    // TODO: add link to project cards

    let countX = useMotionValue(0)
    let countY = useMotionValue(300)
    let countSize = useMotionValue(20)
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollPosition(window.scrollY)
            window.scrollY < 550 ? setBackgroundColor("#0B0B0B") : window.scrollY > 1500 ? setBackgroundColor("#030A0B") : setBackgroundColor("#070707")
        })

    }, [])

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
    
    const lightTopRight = () => {
        animate(countX, 1000, {
            duration: 1.1,
            onUpdate(latest) {
                setBackgroundX(latest)
            },
            onComplete() {
                lightLeft()
            }
        })
        
        animate(countY, 0, {
            duration: 1,
            onUpdate(latest) {
                setBackgroundY(latest)
            }
        })
        
        // const intervalX = setInterval(() => {
        //     setBackgroundX((prevCount) => prevCount == 1000 ? (clearInterval(intervalX), /* lightLeft(), */ prevCount) : prevCount + 10)
        // }, 15)
        
        // const intervalY = setInterval(() => {
        //     setBackgroundY((prevCount) => prevCount == 0 ? (clearInterval(intervalY), prevCount) : prevCount - 5)
        // }, 15)
    }

    const lightLeft = () => {
        animate(countX, -180, {
            duration: 1,
            onUpdate(latest) {
                setBackgroundX(latest)
            },
            onComplete() {
                lightWelcome()
            } 
        })
        
        animate(countY, 80, {
            duration: 1,
            onUpdate(latest) {
                setBackgroundY(latest)
            }
        })
       
        // setTimeout(() => {    
        //     const intervalX = setInterval(() => {
        //         setBackgroundX((prevCount) => prevCount <= -140 ? (clearInterval(intervalX), lightWelcome(), prevCount) : prevCount - 5)
        //     }, 15)
            
        //     const intervalY = setInterval(() => {
        //         setBackgroundY((prevCount) => prevCount >= 80 ? (clearInterval(intervalY), prevCount) : prevCount + 1)
        //     }, 20)
        // },  100)
    }
    
    const lightWelcome = () => {
        setTimeout(() => {
            animate(countX, 120, {
                duration: .7,
                onUpdate(latest) {
                    setBackgroundX(latest)
                },
                onComplete() {
                    lightExplosion()
                }
            })
            
            animate(countY, 50, {
                duration: .6,
                onUpdate(latest) {
                    setBackgroundY(latest)
                }
            })
        }, 200)

        // setTimeout(() => {
        //     const intervalX = setInterval(() => {
        //         setBackgroundX((prevCount) => prevCount >= 120 ? (clearInterval(intervalX), lightExplosion(), prevCount) : prevCount + 2)
        //     }, 15)
            
        //     const intervalY = setInterval(() => {
        //         setBackgroundY((prevCount) => prevCount <= 50 ? (clearInterval(intervalY), prevCount) : prevCount - 2)
        //     }, 15)    
        // }, 300)
    }

    const lightExplosion = () => {
        setTimeout(() => {
            animate(countSize, 160, {
                duration: 1,
                onUpdate(latest) {
                    setBackgroundSize(latest)
                }
            })

            animate(countX, -800, {
                duration: 1.2,
                onUpdate(latest) {
                    setBackgroundX(latest)
                }
            })

            animate(countY, -800, {
                duration: 1.2,
                onUpdate(latest) {
                    setBackgroundY(latest)
                }
            })
        }, 250)
        
        // setTimeout(() => {
        //     const invervalBackgroundSize = setInterval(() => {
        //         setBackgroundSize((prevCount) => prevCount >= 160 ? (clearInterval(invervalBackgroundSize), prevCount) : prevCount + 1)
        //     }, 20)

        //     const intervalX = setInterval(() => {
        //         setBackgroundX((prevCount) => prevCount <= -800 ? (clearInterval(intervalX), prevCount) : prevCount - 10)
        //     }, 20)
            
        //     const intervalY = setInterval(() => {
        //         setBackgroundY((prevCount) => prevCount <= -800 ? (clearInterval(intervalY), prevCount) : prevCount - 10)
        //     }, 20)
        // }, 250)
    }

    return (
        <motion.main
            className="overflow-hidden w-screen h-full text-white font-righteous"
            animate={{ backgroundColor }}
            transition={{ duration: .5 }}
        >
            <div className="fixed w-8 h-8 z-50 max-sm:hidden rounded-full pointer-events-none bg-white shadow-black shadow-2xl" style={{ left: mouseX, top: mouseY, translate: "-50% -50%", mixBlendMode: "exclusion" }}></div>
            
            <MainTitle backgroundSize={backgroundSize} backgroundX={backgroundX} backgroundY={backgroundY} mouseX={mouseX} mouseY={mouseY} scrollPosition={scrollPosition} projectsSectionRef={projectsSectionRef} />

            {backgroundSize > 150 ? (
                <>
                    <ProjectsSection projectsSectionRef={projectsSectionRef} scrollPosition={scrollPosition} aboutMeSectionRef={aboutMeSectionRef} />
                    <AboutMeSection aboutMeSectionRef={aboutMeSectionRef} scrollPosition={scrollPosition} footerRef={footerRef} />
                    <Footer footerRef={footerRef} />
                </>
                ) : null}
        </motion.main>
    )
}

export default App
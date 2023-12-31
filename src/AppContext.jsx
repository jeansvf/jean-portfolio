import { animate, useMotionValue } from "framer-motion"
import { createContext, useContext, useEffect, useRef, useState } from "react"

const AppContextProvider = createContext()

export default function AppContext({ children }) {
    const [mouseX, setMouseX] = useState(-200)
    const [mouseY, setMouseY] = useState(-200)

    const [backgroundSize, setBackgroundSize] = useState(0)
    const [backgroundX, setBackgroundX] = useState(0)
    const [backgroundY, setBackgroundY] = useState(window.innerWidth > 600 ? 14 : 40)

    const [scrollPosition, setScrollPosition] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState("#0B0B0B")

    const projectsSectionRef = useRef()
    const aboutMeSectionRef = useRef()
    const footerRef = useRef()

    let countX = useMotionValue(0)
    let countY = useMotionValue(window.innerWidth > 600 ? 14 : 40)
    let countSize = useMotionValue(20)

    const value = {
        mouseX,
        mouseY,
        backgroundSize,
        backgroundX,
        backgroundY,
        scrollPosition,
        backgroundColor,
        projectsSectionRef,
        aboutMeSectionRef,
        footerRef,
    }

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
            setBackgroundSize(window.innerWidth > 600 ? 16.6 : 25)
        }, 500)

        // first maneuver to top right
        setTimeout(() => {
            lightTopRight()
        }, 1000)
    }, [])
    
    const lightTopRight = () => {
        animate(countX, 57.4, {
            duration: 1.1,
            onUpdate(latest) {
                setBackgroundX(latest)
            },
            onComplete() {
                lightLeft()
            }
        })
        
        animate(countY, (window.innerWidth > 600 ? 0 : 10), {
            duration: 1,
            onUpdate(latest) {
                setBackgroundY(latest)
            }
        })
    }

    const lightLeft = () => {
        animate(countX, -10.3, {
            duration: 1,
            onUpdate(latest) {
                setBackgroundX(latest)
            },
            onComplete() {
                lightWelcome()
            } 
        })
        
        animate(countY, (window.innerWidth > 600 ? .2 : 24), {
            duration: 1,
            onUpdate(latest) {
                setBackgroundY(latest)
            }
        })
    }
    
    const lightWelcome = () => {
        setTimeout(() => {
            animate(countX, 7, {
                duration: .7,
                onUpdate(latest) {
                    setBackgroundX(latest)
                },
                onComplete() {
                    lightExplosion()
                }
            })
            
            animate(countY, window.innerWidth > 600 ? 2.8 : 16, {
                duration: .6,
                onUpdate(latest) {
                    setBackgroundY(latest)
                }
            })
        }, 200)
    }

    const lightExplosion = () => {
        setTimeout(() => {
            animate((window.innerWidth > 600 ? countSize : 25), (window.innerWidth > 600 ? 200 : 230), {
                duration: 1,
                onUpdate(latest) {
                    setBackgroundSize(latest)
                }
            })

            animate(countX, -80, {
                duration: 1.2,
                onUpdate(latest) {
                    setBackgroundX(latest)
                }
            })

            animate(countY, -50, {
                duration: 1.2,
                onUpdate(latest) {
                    setBackgroundY(latest)
                }
            })
        }, 250)
    }

    return (
        <AppContextProvider.Provider value={value}>
            { children }
        </AppContextProvider.Provider>
    )
}

export const useAppContext = () => useContext(AppContextProvider)
import { animate, useMotionValue } from "framer-motion"
import { createContext, useContext, useEffect, useRef, useState } from "react"

const AppContextProvider = createContext()

export default function AppContext({ children }) {
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

    let countX = useMotionValue(0)
    let countY = useMotionValue(300)
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
    }

    return (
        <AppContextProvider.Provider value={value}>
            { children }
        </AppContextProvider.Provider>
    )
}

export const useAppContext = () => useContext(AppContextProvider)
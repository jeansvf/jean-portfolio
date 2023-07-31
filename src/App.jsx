import { motion } from 'framer-motion'
import { useAppContext } from './AppContext'
import MainTitle from './components/MainTitle'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
import AboutMeSection from './components/AboutMeSection'

function App() {
    const { backgroundColor, mouseX, mouseY, backgroundSize } = useAppContext()
    
    return (
        <motion.main
            className="overflow-hidden w-screen h-full text-white font-righteous"
            animate={{ backgroundColor }}
            transition={{ duration: .5 }}
        >
            <div className="fixed w-8 h-8 z-50 max-sm:hidden rounded-full pointer-events-none bg-white shadow-black shadow-2xl" style={{ left: mouseX, top: mouseY, translate: "-50% -50%", mixBlendMode: "exclusion" }}></div>
            
            <MainTitle />

            {backgroundSize > 150 ? (
                <>
                    <ProjectsSection />
                    <AboutMeSection />
                    <Footer />
                </>
            ) : null}
        </motion.main>
    )
}

export default App
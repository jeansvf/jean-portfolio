import { motion } from "framer-motion";
import SocialMedia from "./SocialMedia";
import ScrollArrow from "./ScrollArrow";
import { useAppContext } from "../AppContext";

export default function MainTitle() {
    const { backgroundSize, backgroundX, backgroundY, scrollPosition, projectsSectionRef } = useAppContext()

    return (
        <div
            className="overflow-hidden w-full h-screen min-h-[40rem] max-sm:pl-[3vw] pl-[6vw] pt-[7.35vw] max-md:pt-[5rem] text-white font-righteous z-20"
            style={{
                background: "url(https://static.vecteezy.com/system/resources/previews/021/911/748/large_2x/white-circle-free-png.png)",
                backgroundSize: `${backgroundSize}vw`,
                backgroundRepeat: "no-repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                backgroundPositionX: `${backgroundX}vw`,
                backgroundPositionY: `${backgroundY}vw`,
            }}
        >
            <h1 className="lg:text-[5.6vw] 2xl:text-[500%] sm:text-[7vw] text-[10vw] w-fit leading-[1.2] text-transparent">
                Welcome! I’m&nbsp;
                {backgroundSize > 150 ? <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }} className='relative' style={{ background: "linear-gradient(to right, #26F2FF, #CD40FF)", backgroundClip: "text", WebkitBackgroundClip: "text" }}>Jean</motion.span>
                : <span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }}>Jean</span>},
                a<br/>Front-end Web Developer
            </h1>
            
            {backgroundSize > 150 ? (
                <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }} className='relative font-inter font-normal max-smtext-[4vw] lg:text-[1.3vw] 2xl:text-[130%] pl-0.5 pr-4 text-[#635F5F]'>My passion is to use modern technologies to build web applications</motion.h2>
            ) : <h2 className='font-inter font-normal max-sm:text-[4vw] lg:text-[1.3vw] 2xl:text-[130%] pl-0.5 pr-4 text-transparent'>My passion is to use modern technologies to build web applications</h2>}
            
            <SocialMedia backgroundSize={backgroundSize} />
            
            {backgroundSize > 150 ? (
                <ScrollArrow scrollPosition={scrollPosition} element={projectsSectionRef} maxScrollValue={200} title="projects" />
            ) : null}
        </div>
    )
}
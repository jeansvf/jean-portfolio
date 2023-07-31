import { motion } from "framer-motion";
import SocialMedia from "./SocialMedia";
import ScrollArrow from "./ScrollArrow";
import { useAppContext } from "../AppContext";

export default function MainTitle() {
    const { backgroundSize, backgroundX, backgroundY, scrollPosition, projectsSectionRef,  } = useAppContext()

    return (
        <div
            className="overflow-hidden w-full pl-4 sm:pl-8 md:pl-14 lg:pl-24 xl:pl-36 pt-28 max-sm:pt-20 md:pt-36 lg:pt-44 h-screen text-white font-righteous z-20"
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
            <h1 className="text-[3rem] md:text-[3.6rem] lg:text-[4rem] xl:text-[5rem] w-fit leading-[1.2] text-transparent">
                Welcome! I’m&nbsp;
                {backgroundSize > 150 ? <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }} className='relative' style={{ background: "linear-gradient(to right, #26F2FF, #CD40FF)", backgroundClip: "text", WebkitBackgroundClip: "text" }}>Jean</motion.span>
                : <span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }}>Jean</span>},
                a<br/>Front-end Web Developer
            </h1>
            
            {backgroundSize > 150 ? (
                <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }} className='relative font-inter font-normal text-[1rem] xl:text-[1.3rem] pl-0.5 text-[#635F5F]'>My passion is to use modern technologies to build web applications</motion.h2>
            ) : <h2 className='font-inter font-normal text-[1rem] xl:text-[1.3rem] pl-0.5 text-transparent'>My passion is to use modern technologies to build web applications</h2>}
            
            <SocialMedia backgroundSize={backgroundSize} />
            
            {backgroundSize > 150 ? (
                <ScrollArrow scrollPosition={scrollPosition} element={projectsSectionRef} maxScrollValue={200} title="projects" />
            ) : null}
        </div>
    )
}
import { motion } from "framer-motion";
import SocialMedia from "./SocialMedia";
import ScrollArrow from "./ScrollArrow";

export default function MainTitle({ backgroundSize, backgroundX, backgroundY, mouseX, mouseY, scrollPosition, firstSectionRef }) {
    return (
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
            <h1 className="text-[5rem] w-fit leading-[1.2] text-transparent">
                Welcome! I’m&nbsp;
                {backgroundSize > 150 ? <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }} className='relative' style={{ background: "linear-gradient(to right, #26F2FF, #CD40FF)", backgroundClip: "text", WebkitBackgroundClip: "text" }}>Jean</motion.span>
                : <span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }}>Jean</span>},
                a<br/>Front-end Web Developer
            </h1>
            
            {backgroundSize > 150 ? (
                <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }} className='relative text-[1.3rem] pl-1 text-[#635F5F]'>I don’t know what could be a good subtitle</motion.h2>
            ) : <h2 className='text-[1.3rem] pl-1 text-transparent'>I don’t know what would be a good subtitle</h2>}
            
            <SocialMedia backgroundSize={backgroundSize} />
            
            {backgroundSize > 150 ? (
                <ScrollArrow scrollPosition={scrollPosition} element={firstSectionRef} maxScrollValue={200} />
            ) : null}
        </div>
    )
}
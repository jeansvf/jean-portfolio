import { motion } from "framer-motion";
import ScrollArrow from "./ScrollArrow";

export default function AboutMeSection({ aboutMeSectionRef, scrollPosition, footerRef }) {
    return (
        <div ref={aboutMeSectionRef} className='relative flex flex-col items-center w-full min-h-[100vh] mt-12 font-inter'>
            <div className="relative">
                <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: .2 }} className="max-sm:text-[4rem] text-[4.5rem] font-bold mt-20 ">about me</motion.h3>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: .2, duration: .6, ease: "easeInOut" }}
                    className="absolute bottom-3.5 h-1.5 bg-white"
                ></motion.div>
            </div>
            <div className="flex max-xl:flex-col max-xl:items-center xl:justify-around w-[90%] mt-16">
                <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .4, duration: .6 }} className="max-xl:w-[30rem] xl:w-[20.5rem] max-sm:w-[21rem] mb-14 text-lg text-center">
                    <p className="mb-4 text-4xl font-semibold">Schedule 🎯</p>
                    <p className="text-xl">I’m the type of guy who <p className="inline text-[#FF4545]">keeps everything scheduled</p>, so that I can plan my tasks and squeeze the most out of my time for my work.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .6, duration: .6 }} className="max-xl:w-[30rem] w-[20.5rem] max-sm:w-[21rem] mb-14 text-lg text-center">
                    <p className="mb-4 text-4xl font-semibold">Hobbies 🌟</p>
                    <p className="text-xl">My hobbies boil down to <p className="inline text-[#FFED4E]">always looking to learn new things</p>, I am a curious guy and I imagine that that’s the reason that programming has fit so well into my life, everyday I try my best to learn new things and become a better software engineer.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .8, duration: .6 }} className="max-xl:w-[30rem] w-[20.5rem] max-sm:w-[21rem] mb-14 text-lg text-center">
                    <p className="mb-4 text-4xl font-semibold">Health 🧠</p>
                    <p className="text-xl">I am a very healthy person who likes to practice good habits every day, programming can be stressful sometimes, so I always make sure to <p className="inline text-[#F257FF]">prioritize mental health to avoid the burnout</p> of sitting in front of a screen for several hours every day.</p>
                </motion.div>
            </div>
                <ScrollArrow scrollPosition={scrollPosition} maxScrollValue={999999} element={footerRef} title="contact" />
        </div>
    )
}
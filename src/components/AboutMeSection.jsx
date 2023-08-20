import { motion, useInView } from "framer-motion";
import ScrollArrow from "./ScrollArrow";
import { useAppContext } from "../AppContext";
import { useRef } from "react";

export default function AboutMeSection() {
    const { aboutMeSectionRef, scrollPosition, footerRef } = useAppContext()

    const titleRef = useRef(null)
    const isTitleInView = useInView(titleRef, { once: true })
    
    const scheduleRef = useRef(null)
    const isScheduleInView = useInView(scheduleRef, { once: true })

    const hobbiesRef = useRef(null)
    const isHobbiesInView = useInView(hobbiesRef, { once: true })
    
    const healthRef = useRef(null)
    const isHealthInView = useInView(healthRef, { once: true })

    return (
        <div ref={aboutMeSectionRef} className='relative flex flex-col items-center w-full min-h-[100vh] mt-12 pb-12 font-inter'>
            <div className="relative">
                <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: isTitleInView ? 1 : 0 }} transition={{ delay: .2 }} ref={titleRef} className="max-sm:text-[4rem] text-[4.5rem] font-bold mt-20 ">about me</motion.h3>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isTitleInView ? "100%" : "0" }}
                    transition={{ delay: .2, duration: .6, ease: "easeInOut" }}
                    ref={titleRef}
                    className="absolute bottom-3.5 h-1.5 bg-white"
                ></motion.div>
            </div>
            <div className="flex max-xl:flex-col max-xl:items-center xl:justify-around w-[90%] mt-16">
                <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: isScheduleInView ? 1 : 0, x: isScheduleInView ? 0 : -12 }} transition={{ delay: .4, duration: .6 }} ref={scheduleRef} className="max-xl:w-[30rem] xl:w-[20.5rem] max-sm:w-[21rem] mb-14 text-lg text-center">
                    <p className="mb-4 text-4xl font-semibold">Schedule 🎯</p>
                    <p className="text-xl">I’m the type of guy who <span className="inline text-[#FF4545]">keeps everything scheduled</span>, so that I can plan my tasks and squeeze the most out of my time for my work.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: isHobbiesInView ? 1 : 0, x: isHobbiesInView ? 0 : -12 }} transition={{ delay: .6, duration: .6 }} ref={hobbiesRef} className="max-xl:w-[30rem] w-[20.5rem] max-sm:w-[21rem] mb-14 text-lg text-center">
                    <p className="mb-4 text-4xl font-semibold">Hobbies 🌟</p>
                    <p className="text-xl">My hobbies boil down to <span className="inline text-[#FFED4E]">always looking to learn new things</span>, I am a curious guy when it comes to technology and I imagine that that’s the reason that programming fit so well into my life, everyday I try my best to become a better software engineer.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: isHealthInView ? 1 : 0, x: isHealthInView ? 0 : -12 }} transition={{ delay: .8, duration: .6 }} ref={healthRef} className="max-xl:w-[30rem] w-[20.5rem] max-sm:w-[21rem] mb-14 text-lg text-center">
                    <p className="mb-4 text-4xl font-semibold">Health 🧠</p>
                    <p className="text-xl">I am a very healthy person who likes to practice good habits every day, programming can be stressful sometimes, so I always make sure to <span className="inline text-[#F257FF]">prioritize mental health to avoid the burnout</span> of sitting in front of a screen for several hours every day.</p>
                </motion.div>
            </div>
                <ScrollArrow scrollPosition={scrollPosition} maxScrollValue={999999} element={footerRef} title="contact" />
        </div>
    )
}
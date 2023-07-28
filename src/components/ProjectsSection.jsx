import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ScrollArrow from "./ScrollArrow";

export default function ProjectsSection({ projectsSectionRef, scrollPosition, aboutMeSectionRef }) {
    return (
        <div ref={projectsSectionRef} className='relative flex flex-col items-center w-full h-screen'>
            <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: .3, duration: .6 }}
                className='text-[4.5rem] mt-20 text-center relative flex flex-col underline underline-offset-8 font-inter font-bold'
            >
                projects
            </motion.h2>

            <div className="flex flex-col items-center py-10">
                <div className="flex justify-between w-[70vw] pb-12">
                    <ProjectCard rotation={-4} imgSrc="" hoverColor="#FF7373" />
                    <ProjectCard rotation={-7} imgSrc="" hoverColor="linear-gradient(to right, #26F2FF, #CD40FF)" />
                </div>
                <ProjectCard rotation={7} imgSrc="" hoverColor="#FF7373" />

            </div>
            
            <ScrollArrow scrollPosition={scrollPosition} maxScrollValue={999999} element={aboutMeSectionRef} title="about me" />
        </div>
    )
}
import { motion, useInView } from "framer-motion";
import { useAppContext } from "../AppContext";
import { useRef } from "react";
import ScrollArrow from "./ScrollArrow";
import ProjectCard from "./ProjectCard";
import jeanPortfolioImg from "../assets/project-images/jean-portfolio-min2.jpg";
import focusPlaceImg from "../assets/project-images/focusplace-min2.jpg";

export default function ProjectsSection() {
    const { projectsSectionRef, scrollPosition, aboutMeSectionRef } = useAppContext()

    const titleRef = useRef(null)
    const isInView = useInView(titleRef, { once: true })
    
    return (
        <div ref={projectsSectionRef} className='relative flex flex-col items-center w-full font-inter mt-14'>
            <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 12 }}
                transition={{ delay: .3, duration: .6 }}
                ref={titleRef}
                className='max-sm:text-[4rem] text-[4.5rem] mt-8 mb-16 text-center relative flex flex-col underline underline-offset-8 font-bold'
            >   
                projects
            </motion.h2>

            <div className="flex flex-col items-center py-10 w-full">
                <div className="flex max-xl:flex-col max-xl:items-center justify-center w-full pb-5">
                    <ProjectCard rotation={-4} imgSrc={focusPlaceImg} title="Focusplace" description="This app was the most fun I've ever had while programming, I keep adding new features and fixes to make it better. Focusplace is a platform to improve focus and track your study/work." gitLink="https://github.com/jeansvf/productivity-project" websiteLink="https://focusplace.co/" hoverColor="#FF7373" />
                    <ProjectCard locked={true} rotation={7} />
                </div>
                <ProjectCard rotation={-7} imgSrc={jeanPortfolioImg} title="Jean Portfolio" description="When I first started programming I loved the idea of having my own website to show my work. I created it in a way that look simple but informative." gitLink="https://github.com/jeansvf/jean-portfolio" websiteLink="https://jeansvf.com/" hoverColor="linear-gradient(to right, #26F2FF, #CD40FF)" />
            </div>
            
            <ScrollArrow scrollPosition={scrollPosition} maxScrollValue={999999} element={aboutMeSectionRef} title="about me" />
        </div>
    )
}
import ScrollArrow from "./ScrollArrow";

export default function AboutMeSection({ aboutMeSectionRef, scrollPosition, footerRef }) {
    return (
        <div ref={aboutMeSectionRef} className='relative flex flex-col items-center w-full h-screen font-inter'>
            <h3 className="text-[4.5rem] font-bold mt-20 underline underline-offset-[10px]">about me</h3>
            
            <div className="flex justify-around w-[90%] mt-16">
                <div className="w-[19%] text-lg text-center">
                    <p className="mb-4 text-4xl font-semibold">Schedule 🎯</p>
                    <p className="text-xl">I’m the type of guy who <p className="inline text-[#FF4545]">keeps everything scheduled</p>, so that I can plan my tasks and squeeze the most out of my time for my work</p>
                </div>
                <div className="w-[19%] text-lg text-center">
                    <p className="mb-4 text-4xl font-semibold">Hobbies 🌟</p>
                    <p className="text-xl">My hobbies boil down to <p className="inline text-[#FFED4E]">always looking to learn new things</p>, I am a curious guy and I imagine that that’s the reason that programming has fit so well into my life, everyday I try my best to learn new things and become a better software engineer</p>
                </div>
                <div className="w-[19%] text-lg text-center">
                    <p className="mb-4 text-4xl font-semibold">Health 🧠</p>
                    <p className="text-xl">I am a very healthy person who likes to practice good habits every day, programming can be stressful sometimes, so I always make sure to <p className="inline text-[#F257FF]">prioritize mental health to avoid the burnout</p> of sitting in front of a screen for several hours every day</p>
                </div>
            </div>
            <ScrollArrow scrollPosition={scrollPosition} maxScrollValue={999999} element={footerRef} title="contact" />
        </div>
    )
}
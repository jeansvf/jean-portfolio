import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function SocialMedia({ backgroundSize }) {
    return (
        <div className='flex ml-4 h-16 mt-5 '>
            {/* check background size to get the end of the animation */}
            {backgroundSize > 150 ? (
                <>
                    <motion.a
                        href='https://www.linkedin.com/in/jean-silva-192319254/'
                        target="_blank"
                        rel="noopener noreferrer"
                        transition={{ duration: .1 }}
                        whileHover={{ scale: 1.1, transition: { duration: .1 } }}
                        className='flex items-center justify-center w-14 h-14 mr-6 bg-white rounded-[1.15rem] text-black text-3xl cursor-none'
                    >
                        <BsGithub />
                    </motion.a>
                    <motion.a
                        href='https://github.com/jeansvf'
                        target="_blank"
                        rel="noopener noreferrer"
                        transition={{ duration: .1 }}
                        whileHover={{ scale: 1.1, transition: { duration: .1 } }}
                        className='flex items-center justify-center w-14 h-14 bg-white rounded-[1.15rem] text-black text-3xl cursor-none'
                    >
                        <BsLinkedin />
                    </motion.a>
                </>
            ) : (
                <>
                    <motion.a
                        href='https://www.linkedin.com/in/jean-silva-192319254/'
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ rotate: -180, x: -310 }}
                        animate={{ rotate: 360, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeIn", type: "spring", delay: 4.2 }}
                        className='flex items-center justify-center w-14 h-14 mr-6 bg-white rounded-[1.15rem] text-black text-3xl cursor-none'
                    >
                        <BsGithub />
                    </motion.a>
                    <motion.a
                        href='https://github.com/jeansvf'
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ rotate: -180, x: -310 }}
                        animate={{ rotate: 360, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeIn", type: "spring", delay: 4.2 }}
                        className='flex items-center justify-center w-14 h-14 bg-white rounded-[1.15rem] text-black text-3xl cursor-none'
                    >
                        <BsLinkedin />
                    </motion.a>
                </>
            )}
        </div>
    )
}
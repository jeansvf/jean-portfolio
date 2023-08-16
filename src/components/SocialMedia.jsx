import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useAppContext } from "../AppContext";

export default function SocialMedia() {
    const { backgroundSize } = useAppContext()

    return (
        <div className='flex h-16 ml-4 mt-5 max-sm:ml-2 max-sm:mt-3'>
            {backgroundSize > 150 ? (
                <>
                    <motion.a
                        href='https://github.com/jeansvf'
                        target="_blank"
                        rel="noopener noreferrer"
                        transition={{ duration: .1 }}
                        whileHover={{ scale: 1.1, transition: { duration: .1 } }}
                        className='flex items-center justify-center max-sm:w-7 max-sm:h-7 mr-6 bg-white rounded-2xl max-sm:rounded-lg md:rounded-[1.15rem] text-black text-2xl md:text-3xl max-sm:text-xl cursor-none max-md:w-[3rem] max-md:h-[3rem] max-lg:w-14 max-lg:h-14 lg:w-14 lg:h-14'
                    >
                        <BsGithub />
                    </motion.a>
                    <motion.a
                        href='https://www.linkedin.com/in/jean-silva-192319254/'
                        target="_blank"
                        rel="noopener noreferrer"
                        transition={{ duration: .1 }}
                        whileHover={{ scale: 1.1, transition: { duration: .1 } }}
                        className='flex items-center justify-center max-sm:w-7 max-sm:h-7 bg-white rounded-2xl max-sm:rounded-lg md:rounded-[1.15rem] text-black text-2xl md:text-3xl max-sm:text-xl cursor-none max-md:w-[3rem] max-md:h-[3rem] max-lg:w-14 max-lg:h-14 lg:w-14 lg:h-14'
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
                        className='flex items-center justify-center max-sm:w-7 max-sm:h-7 w-11 h-11 md:w-14 md:h-14 mr-6 bg-white rounded-2xl max-sm:rounded-lg md:rounded-[1.15rem] text-black text-2xl md:text-3xl max-sm:text-xl cursor-none max-md:w-[3rem] max-md:h-[3rem] max-lg:w-14 max-lg:h-14 lg:w-14 lg:h-14'
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
                        className='flex items-center justify-center max-sm:w-7 max-sm:h-7 w-11 h-11 md:w-14 md:h-14 bg-white rounded-2xl max-sm:rounded-lg md:rounded-[1.15rem] text-black text-2xl md:text-3xl max-sm:text-xl cursor-none max-md:w-[3rem] max-md:h-[3rem] max-lg:w-14 max-lg:h-14 lg:w-14 lg:h-14'
                    >
                        <BsLinkedin />
                    </motion.a>
                </>
            )}
        </div>
    )
}
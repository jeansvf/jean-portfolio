import { motion } from "framer-motion";
import { BiRightArrowAlt } from "react-icons/bi";
import LoadingAnimation from "./LoadingAnimation";

export default function SubmitButton({ setShowSubmitButton, isLoading }) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1,
                transition: {
                    delay: .8
                }
            }}
            exit={{
                opacity: 0,
                transition: {
                    delay: .5
                }
            }}
            className="absolute bottom-0 right-3 mb-3 w-10 h-10 bg-gradient-to-br from-[#26F2FF] to-[#CD40FF] rounded-lg shadow-white shadow-2xl"
            onFocus={() => setShowSubmitButton(true)}
            onBlur={() => setShowSubmitButton(false)}
        >
            <input type="submit" className="w-full h-full text-transparent" value="." />
            {isLoading ? (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-1 text-[1.6rem] pointer-events-none">
                    <LoadingAnimation />
                </div>
            ) : (
                <BiRightArrowAlt className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[1.6rem] pointer-events-none" />
            )}
        </motion.div>
    )
}
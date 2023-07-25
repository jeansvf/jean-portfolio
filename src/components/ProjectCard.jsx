import { motion } from "framer-motion";

export default function ProjectCard({ imgSrc }) {
    return (
        <motion.div
        whileInView={{ scale: .3 }}
        transition={{ delay: 1 }}
        className="flex flex-col items-center w-[30rem] h-80 rounded-xl bg-gradient-to-br from-[#141414] to-[#0A0A0A]"
        style={{ boxShadow: "black 0 2px 6px" }}>
            <div className="w-[91%] h-64 mt-5 border border-white rounded-xl" style={{ background: `url(${imgSrc})` }}></div>
            <p className="">Placeholder.com</p>
        </motion.div>
    )
}
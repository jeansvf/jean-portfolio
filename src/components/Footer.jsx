import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { useAppContext } from "../AppContext";

export default function Footer() {
    const { footerRef } = useAppContext()

    return (
        <footer ref={footerRef} className="relative flex justify-start w-full h-48 pl-2.5 sm:pl-14 bg-[#0c0c0c] font-inter">
            <div className="w-[58rem] mt-10">
                <p className="ml-1 text-4xl font-bold">Get in touch!</p>
                <div className="h-[1px] w-[16rem] sm:w-[30rem] mt-1.5 mb-0.5 bg-white"></div>
                <div className="flex w-fit items-center ml-1.5 text-lg hover:text-blue-300">
                    <a href="mailto:jeansvf.contact@gmail.com" className="mr-1 font-normal">jeansvf.contact@gmail.com</a>
                    <BiLinkExternal className="text-xl" />
                </div>
            </div>
            <div className="flex ml-auto self-end mb-8 mr-8 text-[1.7rem]">
                <a className="mr-4" href="https://github.com/jeansvf" target="_blank" rel="noopener noreferrer">
                    <BsGithub />
                </a>
                <a href="https://www.linkedin.com/in/jean-silva-192319254/" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin />
                </a>
            </div>
        </footer>
    )
}
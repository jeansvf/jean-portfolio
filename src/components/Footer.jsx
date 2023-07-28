import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

export default function Footer({ footerRef }) {
    return (
        <footer ref={footerRef} className="relative flex justify-start w-full h-48 pl-14 bg-[#131313] font-inter">
            <div className="w-1/2 mt-10">
                <p className="ml-2 text-4xl">Contact</p>
                <div className="h-0.5 w-full mt-1.5 mb-0.5 bg-white"></div>
                <div className="flex items-end ml-2 mr-1 text-xl hover:text-blue-300">
                    <a href="mailto:jeansvf.contact@gmail.com" className="underline cursor-none mr-1">jeansvf.contact@gmail.com</a>
                    <BiLinkExternal className="text-2xl" />
                </div>
            </div>
            <div className="flex ml-auto self-end mb-8 mr-8 text-3xl">
                <a className="cursor-none mr-4" href="https://github.com/jeansvf" target="_blank" rel="noopener noreferrer">
                    <BsGithub />
                </a>
                <a className="cursor-none" href="https://www.linkedin.com/in/jean-silva-192319254/" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin />
                </a>
            </div>
        </footer>
    )
}
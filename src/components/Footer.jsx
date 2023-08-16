import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { useAppContext } from "../AppContext";
import { useState } from "react";
import EmailForm from "./EmailForm";

export default function Footer() {
    const { footerRef } = useAppContext()

    const [showEmailForm, setShowEmailForm] = useState(false)

    return (
        <footer ref={footerRef} className="relative flex justify-start w-full h-48 pl-2.5 sm:pl-14 bg-[#131313] font-inter">
            {!showEmailForm ? (
                <div className="w-[58rem] mt-10">
                <p className="ml-1 text-4xl font-bold">Get in touch!</p>
                <div className="h-[1px] w-[16rem] sm:w-[30rem] mt-1.5 mb-0.5 bg-white"></div>
                <div onClick={() => setShowEmailForm(true)} className="flex w-fit items-center ml-1.5 text-lg text-white hover:text-blue-300">
                    <p className="mr-0.5 font-normal underline underline-offset-2">Email form</p>
                    <BiRightArrowAlt className="text-2xl pointer-events-none" />
                </div>
            </div>
            ) : (
                <EmailForm setShowEmailForm={setShowEmailForm} />
            )}
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
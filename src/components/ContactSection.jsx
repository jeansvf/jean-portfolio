import { BiRightArrowAlt } from "react-icons/bi"

export default function ContactSection({ setShowContactForm }) {
    return (
        <div className="w-[58rem] mt-10">
            <p className="ml-1 text-4xl font-bold">Get in touch!</p>
            <div className="h-[1px] w-[16rem] sm:w-[30rem] mt-1.5 mb-0.5 bg-white"></div>
            <div onClick={() => setShowContactForm(true)} className="flex w-fit items-center ml-1.5 text-lg text-white hover:text-blue-300">
                <p className="mr-0.5 font-normal underline underline-offset-2">Contact form</p>
                <BiRightArrowAlt className="text-2xl pointer-events-none" />
            </div>
        </div>
    )
}
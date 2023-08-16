import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useAppContext } from "../AppContext";
import { useState } from "react";
import ContactForm from "./ContactForm";
import EmailSent from "./EmailSent";
import ContactSection from "./ContactSection";

export default function Footer() {
    const { footerRef } = useAppContext()

    const [showContactForm, setShowContactForm] = useState(false)
    const [emailSent, setEmailSent] = useState(false)

    return (
        <footer ref={footerRef} className="relative flex justify-start w-full h-48 max-md:h-56 pl-14 max-md:pl-5 bg-[#131313] font-inter">
            <div className="flex max-md:flex-col justify-center w-full h-full">
                {!showContactForm && !emailSent ? <ContactSection setShowContactForm={setShowContactForm} /> : null}

                {emailSent ? <EmailSent /> : null}

                {showContactForm && !emailSent ? <ContactForm setEmailSent={setEmailSent} /> : null}
                <div className="flex ml-auto self-end mb-6 mr-8 text-[1.7rem]">
                    <a className="mr-4" href="https://github.com/jeansvf" target="_blank" rel="noopener noreferrer">
                        <BsGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/jean-silva-192319254/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    )
}
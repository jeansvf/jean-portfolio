import { AnimatePresence, motion } from "framer-motion";
import { PiUserFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import emailjs from "@emailjs/browser"
import SubmitButton from "./SubmitButton";

export default function ContactForm({ setEmailSent }) {
    const [showSubmitButton, setShowSubmitButton] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [messageInfo, setMessageInfo] = useState({
        name: "",
        email: "",
        message: "",
        error: "",
    })

    const submitForm = () => {
        switch(true) {
            case (!messageInfo.name):
                setMessageInfo({...messageInfo, error: "Invalid name"})
                return
            case (!messageInfo.email):
                setMessageInfo({...messageInfo, error: "Invalid email"})
                return
            case (!messageInfo.message):
                setMessageInfo({...messageInfo, error: "Invalid message"})
                return
        }

        setIsLoading(true)
        
        const templateParams = {
            from_name: messageInfo.name,
            message: messageInfo.message,
            email: messageInfo.email,
        }

        emailjs.send("service_4zreeqm", "template_0j6nzci", templateParams, "_5AFddRUV8pCwaNDs")
        .catch((err) => setMessageInfo({...messageInfo, error: err}))
        .then(() => setEmailSent(true))
    }

    return (
        <motion.form className="flex items-center py-6 h-full font-ubuntu" onSubmit={(e) => {
            e.preventDefault()
            submitForm()
        }}>
            <div className="flex flex-col w-full h-full">
                <div className="relative w-full h-full mb-5 rounded-2xl max-md:w-full" style={{ boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    <PiUserFill className="absolute ml-3 top-1/2 -translate-y-1/2 text-2xl text-[#aaaaaa] pointer-events-none" />
                    <input onChange={(e) => setMessageInfo({ ...messageInfo, name: e.target.value})} className="w-full h-full pl-11 rounded-2xl bg-[#2F2F2F] text-xl placeholder:text-[#aaaaaa]" placeholder="Name" type="text" />
                </div>
                <div className="relative w-full h-full rounded-2xl max-md:w-full" style={{ boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    <MdEmail className="absolute ml-3 top-1/2 -translate-y-1/2 text-2xl text-[#aaaaaa] pointer-events-none" />
                    <input onChange={(e) => setMessageInfo({ ...messageInfo, email: e.target.value})} className="w-full h-full pl-11 rounded-2xl bg-[#2F2F2F] text-xl placeholder:text-[#aaaaaa]" placeholder="Email" type="email" />
                </div>
            </div>
            <div className="relative w-full h-full mx-6 rounded-2xl text-xl overflow-hidden max-lg:w-full">
                <textarea onChange={(e) => setMessageInfo({ ...messageInfo, message: e.target.value})} onFocus={() => setShowSubmitButton(true)} onBlur={() => setShowSubmitButton(false)} className="w-full h-full px-4 py-3 rounded-2xl bg-[#2F2F2F] placeholder:text-[#aaaaaa] resize-none" style={{ boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)" }} id="scrollbar-hidden" placeholder="Message"></textarea>
                <AnimatePresence>
                    {showSubmitButton ? (
                        <SubmitButton setShowSubmitButton={setShowSubmitButton} isLoading={isLoading} />
                    ) : null}
                </AnimatePresence>
            </div>
        </motion.form>
    )
}
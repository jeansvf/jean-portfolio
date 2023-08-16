import { GoCheckCircle } from "react-icons/go"
import CheckMarkSvg from "./CheckMarkSvg"

export default function EmailSent() {
    return (
        <div className="flex items-center my-auto text-9xl font-ubuntu">
            <CheckMarkSvg />
            <div>
                <span className="block ml-7 text-6xl font-medium">Sent.</span>
                <span className="block ml-7 text-xl font-normal">Thanks for stopping by!</span>
            </div>
        </div>
    )
}
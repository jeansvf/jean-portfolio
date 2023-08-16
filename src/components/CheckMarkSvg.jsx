import { GoCheckCircle } from "react-icons/go"

export default function CheckMarkSvg() {
    return (
        <svg width="130" height="130" viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#26F2FF" />
                    <stop offset="100%" stopColor="#CD40FF" />
                </linearGradient>
            </defs>
            <GoCheckCircle fill="url(#myGradient)" />
        </svg>
    )
}
import { Lightbulb } from "lucide-react"

interface Props {
    label: string,
    tip: string 
}

const Tip = ({label, tip}: Props) => {
    return (
        <div className="flex w-full space-x-2">
            <Lightbulb color="rgb(124 58 237 / 0.9)" />

            <p className="w-full text-sm"><span className="font-semibold text-white">{label}</span>: <span className="font-normal text-gray-400">{tip}</span></p>
        </div>
    )
}

export default Tip
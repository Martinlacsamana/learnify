import { LucideIcon } from "lucide-react"
import { JSX } from "react"

interface Props {
    icon: LucideIcon
    color: string,
    feature: string,
    summary: string
}

const FeatureSummary = ({icon: Icon, color, feature, summary}: Props) => {

    // Determine class color during compilation
    const colorClass = {
        'purple': 'bg-custom-purple',
        'teal': 'bg-custom-teal'
    }[color]
    
    return (
        <div className="flex flex-col text-left space-y-4 p-6 bg-custom-gray/80 border border-2 border-custom-gray rounded-md">
            
           
            <Icon className={`${colorClass} p-2 rounded-md`} size={48}/>
            
            <h2 className="text-lg text-white font-semibold pt-1">{feature}</h2>
            <p className="text-sm text-gray-300">{summary}</p>
        </div>
    )

}

export default FeatureSummary
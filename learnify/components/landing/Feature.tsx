
interface Props {
    feature: string,
    description: string,
    items: string[],
    reverse: boolean,
    color: string
}

const Feature = ({feature, description, items, reverse, color}: Props) => {
    const colorClasses = {
        'purple': {
            text: 'text-custom-purple',
            bg: 'bg-custom-purple/20'
        },
        'teal': {
            text: 'text-custom-teal',
            bg: 'bg-custom-teal/20'
        }
    }[color] || {
        text: 'text-custom-purple',
        bg: 'bg-custom-purple/20'
    }

    return (
        <div className={`flex ${reverse ? 'flex-row-reverse' : ''} min-h-[350px] gap-14`}>
            <div className="w-1/2 flex flex-col gap-6 text-left justify-center">
                <h2 className="text-3xl font-bold text-white">{feature}</h2>
                <p className="text-gray-300">{description}</p>
                <ul className="space-y-2">
                    {items.map((item, i) => (
                        <li key={i} className="flex gap-1 items-center">
                            <span className={`w-5 h-5 rounded-full ${colorClasses.text} ${colorClasses.bg} flex items-center justify-center mr-2`}>
                            ✓
                            </span>
                            <p className="text-white font-semibold text-base">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* IMAGE FOR FEATURE 1 */}
            <div className="flex w-1/2 bg-zinc-800/80 rounded-lg items-center justify-center">
                <p className="">Brain Dump Interface here</p>

            </div>

        </div>
    )


}

export default Feature
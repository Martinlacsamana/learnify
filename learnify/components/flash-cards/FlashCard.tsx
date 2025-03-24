import { FlashCard as FlashCardType } from "@/types/models";

interface Props {
    card: FlashCardType;
}

const FlashCard = ({card}: Props) => {
    
    return (
        <div className="flex flex-col w-[500px] gap-6">
            {/* CardContent */}
             <div className=" p-6 bg-gradient-to-br from bg-custom-purple/20 to bg-custom-purple/60 border border-custom-purple rounded-lg shadow-lg">
                <div className="flex justify-between px-4 mb-4">
                    <div className="text-sm font-semibold border border-custom-purple px-2 py-0.5 rounded-xl">Conceptual</div>
                    <div className="text-sm text-white border border-custom-teal px-2 py-0.5 rounded-xl">Completed</div>
                </div>
                
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Code this up next Martin?</h2>
                    {/* <p className="text-gray-300">{card.answer}</p> */}
                </div>

                <div className="w-full text-center">
                    <p>Tap to reveal answer</p>
                </div>
            </div>


            {/* Chat-Interface for each Card */}
            <div className="w-full border border-b-0 rounded-t-md">
                <div className="flex w-full p-2 justify-center text-white">
                    <p>Ask about this concept</p>
                    <span>^</span>
                </div>

            </div>




        </div>
       
    )
}

export default FlashCard;

import { FlashCards as FlashCardsArray } from "@/dummy-data/data"
import FlashCard from "@/components/flash-cards/FlashCard";

const FlashCards = () => {
    const data = FlashCardsArray[0];


    return (
        <div className="flex w-full min-h-[80vh] justify-center items-center">
           
               
            <FlashCard card={data}/>
               
          
        </div>
    )

}



export default FlashCards
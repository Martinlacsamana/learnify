import { FlashCards as FlashCardsArray } from "@/dummy-data/data"
import FlashCard from "@/components/flash-cards/FlashCard";

const FlashCards = () => {
    const data = FlashCardsArray;



    return (
        <div>
            {data.map((card) => (
                <FlashCard card={card}/>
            ))}

        </div>
    )

}



export default FlashCards
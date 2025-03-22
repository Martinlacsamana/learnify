export type FlashCardType = "conceptual" | "technical";

export interface FlashCard {
    id: number,
    type: FlashCardType,
    question: string,
    answer: string,
    topic: string
}



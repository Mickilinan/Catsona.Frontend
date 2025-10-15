import cat2 from "../assets/questionImages/cat2.png";
import cat3 from "../assets/questionImages/cat3.png";
import cat4 from "../assets/questionImages/cat4.png";
import cat5 from "../assets/questionImages/cat5.png";
import sittingCat from "../assets/questionImages/sittingCat.png";

export type QuestionMedia = {
    image?: string;
}

export const questionImages: Record<string, QuestionMedia> = {
    "cat2": { image: cat2 },
    "cat3": { image: cat3 },
    "cat4": { image: cat4 },
    "cat5": { image: cat5 },
    "sittingCat": { image: sittingCat },
}
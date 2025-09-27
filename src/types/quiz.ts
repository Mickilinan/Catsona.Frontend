export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
}

export interface SavedAnswer {
    questionId: number;
    selectedOptionIndex: number;
}

export interface CatPersona {
    id: number;
    name: string;
    description: string;
    typicalBehaviours: string[];
    exampleQuote: string;
}

export interface QuizResult {
    persona: CatPersona;
    scores: Record<string, number>;
}
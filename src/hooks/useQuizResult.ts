import { useCallback, useState } from "react";
import type { SavedAnswer, QuizResult } from "../types/quiz";
import { api } from "@/services/api";

export const useQuizResult = () => {
    const [result, setResult] = useState<QuizResult | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const calculateResult = useCallback (async (answers: SavedAnswer[]) => {
        try {
            setLoading(true);
            setError(null);

            const submissionData = {
                Answers: answers.map(answer => ({
                    questionId: answer.questionId,
                    optionIndex: answer.selectedOptionIndex
                }))
            };

            const response = await api.post<QuizResult>('api/quiz/submit', submissionData);

            setResult(response.data);

        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to calculate result");
        } finally {
            setLoading(false);
        }

        
    }, []);

    return {
        result,
        loading,
        error,
        calculateResult
    };
};
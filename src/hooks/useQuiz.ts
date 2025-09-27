import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { QuizQuestion } from "../types/quiz";
import { useNavigate } from "react-router-dom";

export const useQuiz = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.get<QuizQuestion[]>("api/quiz");
      setQuestions(response.data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load quiz questions"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleStartOver = () => {
    localStorage.removeItem("quizAnswers");
    navigate("/quiz");
  };

  return {
    questions,
    loading,
    error,
    refetch: () => {
      setLoading(true);
      fetchQuestions();
    },
    handleStartOver,
  };
};

import { useEffect, useState } from "react";
import type { QuizQuestion, SavedAnswer } from "../types/quiz";

export interface QuizGameState {
  currentQuestionIndex: number;
  answers: SavedAnswer[];
  isCompleted: boolean;
}

export const useQuizGame = (questions: QuizQuestion[]) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<SavedAnswer[]>([]);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isCompleted = answers.length === questions.length;

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev: number) => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev: number) => prev - 1);
    }
  };

  const handleAnswer = (optionIndex: number) => {
    setAnswers((prev) => {
      const newAnswers = [
        ...prev.filter((a) => a.questionId !== currentQuestion.id),
        { questionId: currentQuestion.id, selectedOptionIndex: optionIndex },
      ];
      localStorage.setItem("quizAnswers", JSON.stringify(newAnswers));
      return newAnswers;
    });
  };

  useEffect(() => {
    const saved = localStorage.getItem('quizAnswers');
    if (saved) {
        setAnswers(JSON.parse(saved));
    }
}, []);

  const getCurrentAnswer = () => {
    return answers.find((a) => a.questionId === currentQuestion.id);
  };

  return {
    currentQuestionIndex,
    answers,
    isCompleted,
    currentQuestion,
    isLastQuestion,
    handleNextQuestion,
    handlePreviousQuestion,
    handleAnswer,
    getCurrentAnswer,
  };
};

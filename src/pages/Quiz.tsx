import { useQuiz } from "../hooks/useQuiz";
import { useQuizGame } from "../hooks/useQuizGame";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";


export default function Quiz() {
  const navigate = useNavigate();
  const { questions, loading, error, refetch } = useQuiz();
  const {
    currentQuestionIndex,
    currentQuestion,
    isLastQuestion,
    isCompleted,
    handleNextQuestion,
    handlePreviousQuestion,
    handleAnswer,
    getCurrentAnswer,
  } = useQuizGame(questions);

 

  return (
    <>
      {loading && (
        <div className="text-delft-blue text-xl">
          Loading your purrfect questions...
        </div>
      )}

      {error && (
        <div className="text-burnt-sienna mb-4">
          <p className="text-lg mb-2">Oops! Something went wrong</p>
          <p className="text-sm">{error}</p>
          <Button onClick={refetch} className="mt-4">
            Try Again
          </Button>
        </div>
      )}

      {!loading && !error && questions?.length > 0 && currentQuestion && (
        <div className="space-y-8">
          {/* Progress indicator */}
          <div className="flex justify-between items-center text-delft-blue/70">
            <span>
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <div className="h-2 w-full max-w-xs mx-4 bg-delft-blue/20 rounded-full">
              <div
                className="h-full bg-cambridge-blue rounded-full transition-all"
                style={{
                  width: `${
                    ((currentQuestionIndex + 1) / questions.length) * 100
                  }%`,
                }}
              />
            </div>
          </div>

          {/* Current question */}
          <div className="bg-white/50 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl text-delft-blue mb-4">
              {currentQuestion.question}
            </h2>
            <ul className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected =
                  getCurrentAnswer()?.selectedOptionIndex === index;
                return (
                  <li
                    key={option}
                    onClick={() => handleAnswer(index)}
                    className={`p-3 bg-white rounded border cursor-pointer transition-colors
                                            ${
                                              isSelected
                                                ? "border-burnt-sienna bg-burnt-sienna/10 text-burnt-sienna"
                                                : "border-cambridge-blue/20 hover:border-cambridge-blue"
                                            }`}
                  >
                    {option}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between pt-4">
            <Button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              variant="outline"
              className="btn-primary"
            >
              Previous
            </Button>
            <Button
              onClick={() => {
                if (isLastQuestion) {
                  navigate('/result');
                } else {
                  handleNextQuestion();
                }
              }}
              disabled={isLastQuestion && !isCompleted}
              className="btn-primary"
            >
              {isLastQuestion ? "Show Result" : "Next"}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

import { useQuiz } from "../hooks/useQuiz";
import { useQuizGame } from "../hooks/useQuizGame";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Mascot } from "@/components/Mascot";
import { getCatSize, getCatVerticalPosition, getQuestionAlt, getQuestionMedia } from "@/lib/utils";

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
          <div className="relative flex justify-between items-center text-delft-blue/70">
          <span>
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>


       
           
            <div className="h-2 w-full max-w-xs mx-4 bg-delft-blue/20 rounded-full relative">
              <div
                className="h-full bg-burnt-sienna rounded-full transition-all"
                style={{
                  width: `${
                    ((currentQuestionIndex + 1) / questions.length) * 100
                  }%`,
                }}
              />

                   
<div className={`block absolute ${getCatVerticalPosition(currentQuestion.id)} left-0 transform -translate-x-1/2 z-10`}
            style={{
              left: `${((currentQuestionIndex + 1) / questions.length) * 100 - 14}%`
            }}>
              <Mascot
               media={getQuestionMedia(currentQuestion.id)}
               alt={getQuestionAlt(currentQuestion.id)}
               className={`${getCatSize(currentQuestion.id)} object-contain`}

              />
            </div>
            </div>
          </div>

          <div className="bg-eggshell/70 rounded-2xl p-6 ">
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
                    className={`w-full rounded-xl  bg-cambridge-blue/20 px-5 py-3 text-delft-blue transition-colors duration-150 cursor-pointer
                                            ${
                                              isSelected
                                                ? "border-cambridge-blue/50 bg-cambridge-blue/60 ring-2 ring-cambridge-blue/30"
                                                : "border-delft-blue/25 bg-cambridge-blue/20 hover:bg-cambridge-blue/10"
                                            }`}
                  >
                    {option}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-between pt-4">
            <Button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="btn-primary"
            >
              Previous
            </Button>
            <Button
              onClick={() => {
                if (isLastQuestion) {
                  navigate("/result");
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

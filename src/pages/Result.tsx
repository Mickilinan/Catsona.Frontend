import { useQuizResult } from "../hooks/useQuizResult";
import { useQuizGame } from "../hooks/useQuizGame";
import { useQuiz } from "../hooks/useQuiz";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import StartOverDialog from "@/components/StartOverDialog";

export default function Result() {
  const navigate = useNavigate();
  const { questions, handleStartOver } = useQuiz();
  const { answers } = useQuizGame(questions);
  const { result, loading, error, calculateResult } = useQuizResult();

  useEffect(() => {
    if (answers.length > 0) {
      calculateResult(answers);
    }
  }, [answers, calculateResult]);

  if (answers.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-2xl text-delft-blue mb-4">
          You need to complete the quiz first!
        </h2>
        <Button onClick={() => navigate("/quiz")}>Take Quiz</Button>
      </div>
    );
  }

  if (loading) {
    return <div>Calculating your purrfect result...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!result) {
    return <div>No result available</div>;
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl text-delft-blue mb-4">
        Your Catsona is: {result.persona.name}!
      </h2>
      <p className="text-lg text-delft-blue/70 mb-4">
        {result.persona.description}
      </p>

      <Button onClick={() => navigate("/")} className="btn-primary mr-4">
        Home
      </Button>

      <StartOverDialog onConfirm={handleStartOver}>
  <Button className="btn-primary mt-6">
    Take Quiz Again
  </Button>
</StartOverDialog>
    </div>
  );
}

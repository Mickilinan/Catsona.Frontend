import { useQuizResult } from "../hooks/useQuizResult";
import { useQuizGame } from "../hooks/useQuizGame";
import { useQuiz } from "../hooks/useQuiz";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import StartOverDialog from "@/components/StartOverDialog";
import { personaMedia } from "@/assets/personaImages";
import Lottie from "lottie-react";

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
        <h2 className="text-2xl text-delftBlue mb-4">
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
    <div className="max-w-3xl mx-auto text-center p-6">
      <h2 className="text-4xl font-bold text-delft-blue mb-3">
        Your Catsona is:{" "}
        <span className="text-burnt-sienna">{result.persona.name}</span>!
      </h2>
      <div className="mb-6">
        {personaMedia[result.persona.name]?.lottie ? (
          <div className="w-48 h-48 mx-auto">        
            <p className="text-sm text-delft-blue/60">
              <Lottie
                animationData={personaMedia[result.persona.name].lottie}
                className="w-48 h-48 mx-auto"
                loop={true}
                autoplay={true}
              />
            </p>
          </div>
        ) : personaMedia[result.persona.name]?.image ? (
          <img
            src={personaMedia[result.persona.name].image}
            alt={result.persona.name}
            className="w-48 h-48 mx-auto object-cover"
          />
        ) : (
          <div className="w-48 h-48 mx-auto bg-cambridge-blue/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">🐱</span>
          </div>
        )}
      </div>
      <p className="text-lg text-delft-blue/80 mb-6">
        {result.persona.description}
      </p>

      <blockquote className="border-l-4 border-burnt-sienna/60 pl-4 italic text-delft-blue/80 mb-6">
        “{result.persona.exampleQuote}”
      </blockquote>

      <div className="text-left bg-eggshell/70 rounded-xl p-5 border border-burnt-sienna/10 mb-8">
        <h3 className="text-xl font-semibold text-delft-blue mb-2">
          Typical behaviours
        </h3>
        <ul className="list-disc pl-6 space-y-1 text-delft-blue/90">
          {result.persona.typicalBehaviours.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center gap-3">
        <Button onClick={() => navigate("/")} className="btn-secondary">
          Home
        </Button>

        <StartOverDialog onConfirm={handleStartOver}>
          <Button
            className="btn-primary"
            title="Clear saved answers and retake the quiz"
          >
            Reset & Re-purr
          </Button>
        </StartOverDialog>
      </div>
    </div>
  );
}

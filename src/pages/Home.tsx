import homeCats from "/src/assets/catPersonas/homeCats.png";
import StartOverDialog from "@/components/StartOverDialog";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/hooks/useQuiz";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { handleStartOver } = useQuiz();

  return (
    <>
      <div className="mb-12">
        <img
          src={homeCats}
          alt="Two cats representing Catsonas"
          className="w-[250px] h-[250px] mx-auto mb-8 rounded-full shadow-2xl border-4 border-burnt-sienna/20"
        />
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-delft-blue leading-tight">
          Discover your <span className="text-burnt-sienna">Catsona</span> 🐾
        </h1>
        <p className="text-xl md:text-2xl text-delft-blue/70 leading-relaxed max-w-2xl mx-auto mb-8">
          Five quick questions. Zero fluff. Maximum purrs.
        </p>
      </div>

      <div className="space-y-6">
        <Button
          onClick={() => navigate("/quiz")}
          className="btn-secondary text-xl px-12 py-4 h-auto font-semibold mr-4"
        >
          Let's Purr-sonalize
        </Button>

        {localStorage.getItem("quizAnswers") && (
          <StartOverDialog onConfirm={handleStartOver}>
          <Button
            className="btn-primary text-xl px-12 py-4 h-auto font-semibold"
            aria-label="Start over and clear current quiz progress"
          >
           Reset & Re-purr
          </Button>
          </StartOverDialog>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-delft-blue/60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cambridge-blue rounded-full"></div>
            <span>Cat-approved</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-sunset rounded-full"></div>
            <span>Human-friendly</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-burnt-sienna rounded-full"></div>
            <span>Ad-free</span>
          </div>
        </div>
      </div>
    </>
  );
}

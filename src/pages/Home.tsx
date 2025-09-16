import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Catsona! 🐾</h1>
      <p className="mb-8 text-lg">Find out your inner cat persona by taking our fun quiz.</p>
      <Button onClick={() => navigate("/quiz")}>Start Quiz</Button>
    </div>
  );
}

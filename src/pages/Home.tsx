import homeCats from "@/assets/catPersonas/homeCats.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-eggshell flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background elements - flyttade dem FÖRE huvudinnehållet */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-sunset/40 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-cambridge-blue/40 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 -translate-y-1/2 left-5 w-32 h-32 bg-burnt-sienna/40 rounded-full blur-2xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <img 
            src={homeCats} 
            alt="Two cats representing Catsonas" 
            className="w-32 h-32 mx-auto mb-8 rounded-full shadow-2xl border-4 border-burnt-sienna/20" 
          />
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-delft-blue leading-tight">
            Welcome to <span className="text-burnt-sienna">Catsona</span>! 🐾
          </h1>
          <p className="text-xl md:text-2xl text-delft-blue/70 leading-relaxed max-w-2xl mx-auto mb-8">
            Find out which cat persona matches your unique character!
          </p>
        </div>

        <div className="space-y-6">
          <Button 
            onClick={() => navigate("/quiz")}
            className="btn-primary text-xl px-12 py-4 h-auto font-semibold"
          >
            Start Your Cat Journey 
          </Button>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-delft-blue/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cambridge-blue rounded-full"></div>
              <span>Quick & Fun</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sunset rounded-full"></div>
              <span>Personality Based</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-burnt-sienna rounded-full"></div>
              <span>100% Free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
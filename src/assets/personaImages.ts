import purrplex from "@/assets/catPersonas/purrplex.json";
import midnightwhisker from "@/assets/catPersonas/midnightwhisker.png";
import pawsnreflect from "@/assets/catPersonas/pawsnreflect.png";
import boximusprime from "@/assets/catPersonas/boximusprime.json";
import zoomolog from "@/assets/catPersonas/zoomolog.png";

export type PersonaMedia = {
    lottie?: object;
    image?: string;
}


export const personaMedia: Record<string, PersonaMedia> = {
    "The Purrplex":          { lottie: purrplex },
    "Paws N' Reflect":       { image: pawsnreflect },         
    "Boximus Prime":         { lottie: boximusprime },
    "The Zoomolog":          { image: zoomolog },
    "The Midnight Whisker":  { image: midnightwhisker },
  };
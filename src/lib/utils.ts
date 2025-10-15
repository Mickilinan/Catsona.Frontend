
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { questionImages, type QuestionMedia } from "../assets/questionImages";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getQuestionMedia = (questionId: number): QuestionMedia => {
  const questionKey = `cat${questionId}`;
  return questionImages[questionKey] || questionImages["sittingCat"];
};

export const getQuestionAlt = (questionId: number): string => {
  return `Cat illustration for question ${questionId}`;
};

export const getCatVerticalPosition = (questionId: number): string => {
  const positions: Record<number, string> = {
    1: "-top-16",    
    2: "-top-[5.3rem]",   
    3: "-top-[5.6rem]",   
    4: "-top-[3.5rem]",    
    5: "-top-24",  
  };
  return positions[questionId] || "-top-8";
};

export const getCatSize = (questionId: number): string => {
  const sizes: Record<number, string> = {
    1: "w-24 h-24",      
    2: "w-24 h-24",      
    3: "w-32 h-32",      
    4: "w-24 h-24",     
    5: "w-32 h-32",      
  };
  return sizes[questionId] || "w-16 h-16";
};
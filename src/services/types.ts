import type { SavedAnswer } from "../types/quiz";

export interface ApiResponse<T> {
    data: T;
    status: number;
    message?: string;
}

export interface SubmissionDto {
    answers: SavedAnswer[];
}
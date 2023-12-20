import { Word } from "./Word";

export interface WordService {
    getWord(word: string): Word;
    getId(id: number): Word | null;
}
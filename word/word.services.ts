import { Word } from "./Word";

export interface WordService {
    add(name: string, email: string, password: string): Word;
    getId(id: number): Word | null;
}
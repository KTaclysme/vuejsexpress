// Word.controller.ts
import { WordService } from "./word.services";
import { Word } from "./Word";

export class WordController {
    constructor(private wordService: WordService) {}

    addWord(name: string, email: string, password: string): Word {
        return this.wordService.add(name, email, password);
    }

    getWordById(id: number): Word | null {
        return this.wordService.getId(id);
    }
}
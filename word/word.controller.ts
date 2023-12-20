// Word.controller.ts
import { WordService } from "./word.services";
import { Word } from "./Word";

export class WordController {
    constructor(private wordService: WordService) {}

    // TO DO FAIRE UN AFFICHAGE POUR LES MOTS, AJOUTER, MODIFIER ET SUPPRIMER
    // Regarder comment faire sans parametre... 
    getWordbyWord(word: string): Word { 
        return this.wordService.getWord(word);
    }

    getWordById(id: number): Word | null {
        return this.wordService.getId(id);
    }

    delWord(id: number) : Word | null {
        return this.wordService.getId(id);
    }
}

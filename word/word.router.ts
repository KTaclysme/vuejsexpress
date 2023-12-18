import { Router } from "express";
import { WordController } from "./word.controller";

// mission de rediriger les requêtes dédiées aux utilisateurs vers les bonnes méthodes du WordController
// Les requetes sur les routes
export class WordRouter {
    router = Router();

    constructor(private wordController: WordController) {
        this.configureRoutes();
    }

    private configureRoutes(): void {
        this.router.get('/:id', (req, res, next) => {
            try {
                const result = this.wordController.getWordById(
                    parseInt(req.params.id)
                );
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        });

        this.router.post('/add-word', (req, res, next) => {
            try {
                const { name, email, password } = req.body;
                const result = this.wordController.addWord(name, email, password);
                res.status(201).json(result);
            } catch (error) {
                next(error);
            }
        });
    } 
}
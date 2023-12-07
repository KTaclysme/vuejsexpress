import { Router } from "express";
import { UserController } from "./user.controller";

// mission de rediriger les requêtes dédiées aux utilisateurs vers les bonnes méthodes du UserController
// Les requetes sur les routes
export class UserRouter {
    router = Router();

    constructor(private userController: UserController) {
        this.configureRoutes();
    }

    private configureRoutes(): void {
        this.router.get('/:id', (req, res, next) => {
            try {
                const result = this.userController.getById(
                    parseInt(req.params.id)
                );
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        });

        this.router.post('/add-user', (req, res, next) => {
            try {
                const result = this.userController.add(req.body.username);
                res.status(201).json(result);
            } catch (error) {
                next(error);
            }
        });
    }
}
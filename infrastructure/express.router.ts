import { Router } from "express";
import { UserService } from "../user/user.services";
import { UserController } from "../user/user.controller";
import { UserRouter } from "../user/user.router";
import { WordController } from "../word/word.controller";
import { WordRouter } from "../word/word.router";
import { WordService } from "../word/word.services";

// chargé de rediriger les requêtes HTTP vers les bons routeurs métiers
// Liens entreExpress, model et controller
// A modifier que si il y a autre chose que User 
export class ExpressRouter {
    router = Router();

    private userController!: UserController;
    private userRouter!: UserRouter;
    private wordController!: WordController;
    private wordRouter!: WordRouter;

    constructor(private userService: UserService, private wordService: WordService) {
        this.configureControllers();
        this.configureRouters();
        this.configureRoutes();
    }

    private configureControllers(): void {
        this.userController = new UserController(this.userService);
        this.wordController = new WordController(this.wordService);
    }

    private configureRouters(): void {
        this.userRouter = new UserRouter(this.userController);
        this.wordRouter = new WordRouter(this.wordController);
    }

    private configureRoutes(): void {
        this.router.use('/user', this.userRouter.router);
        this.router.use('/word', this.wordRouter.router);
    }
}


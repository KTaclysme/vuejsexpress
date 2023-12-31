import { Router } from "express";
import { UserService } from "../user/user.services";
import { UserController } from "../user/user.controller";
import { UserRouter } from "../user/user.router";


// chargé de rediriger les requêtes HTTP vers les bons routeurs métiers
// Liens entreExpress, model et controller
// A modifier que si il y a autre chose que User 
export class ExpressRouter {
    router = Router();

    private userController!: UserController;
    private userRouter!: UserRouter;

    constructor(private userService: UserService) {
        this.configureControllers();
        this.configureRouters();
        this.configureRoutes();
    }

    private configureControllers(): void {
        this.userController = new UserController(this.userService);
    }

    private configureRouters(): void {
        this.userRouter = new UserRouter(this.userController);
    }

    private configureRoutes(): void {
        this.router.use('/user', this.userRouter.router);
    }
}


import { Router } from "express";
import { UserService } from "../user/user.services";
import { UserController } from "../user/user.controller";
import { UserRouter } from "../user/user.router";

// chargé de rediriger les requêtes HTTP vers les bons routeurs métiers
export class ExpressRouter {
    router = Router();

    private userController!: UserController
    private userRouter!: UserRouter

    constructor(private userService: UserService) {
        this.configureControllers();

        this.configureRouters();

        this.configureRoutes();
    }


    private configureRoutes() {
        this.router.use('/user', this.userRouter.router);
    }

    private configureControllers() {
        this.userController = new UserController(this.userService);
    }

    private configureRouters(): void {
        this.userRouter = new UserRouter(this.userController);
    }
}


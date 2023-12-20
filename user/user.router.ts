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
                const result = this.userController.getUserById(
                    parseInt(req.params.id)
                );
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        });

        this.router.post('/add-user', (req, res, next) => {
            try {
                const { name, email, password } = req.body;
                const result = this.userController.addUser(name, email, password);
                res.status(201).json(result);
            } catch (error) {
                next(error);
            }
        });

        this.router.get('/user',  (req, res, next) => {
            try {
                const { name, email } = req.body;
                const users = this.userController.displayUser(name, email);
                res.json(users);
            } catch (error) {
                next(error);
            }
        });

        this.router.post("/del-user", (req,res,next) => {
            try {
                const { name, email, password } = req.body;
                const result = this.userController.delUser(name, email, password);
                res.status(201).json(result);
            } catch (error) {
                next(error);
            }
        })

        this.router.post("/update-user", (req,res,next) => {
            try {
                const {id, name, email, password } = req.body;
                const result = this.userController.updUser(id, name, email, password);
                res.status(201).json(result);
            } catch (error) {
                next(error);
            }
        })
    } 
}
import { ExpressServer } from "./express-server";
import * as dotenv from 'dotenv';
import { ExpressRouter } from "./express.router";
import { UserService } from "../user/user.services";
import { UserJSONService } from "../user/user.services";

//CONFIGURATION DE L'APPLICATION
export class ExpressApplication {
    private server!: ExpressServer;
    private expressRouter!: ExpressRouter;
    private port!: string;
    private userService!: UserService;



    constructor() {
        this.configureApplication();
    }

   bootstrap(): void {
        this.server.bootstrap();
    }

    private configureApplication(): void {
        this.configureEnvironment();
        this.configureServerPort();
        this.configureServices();
        this.configureExpressRouter();
        this.configureServer();
    }

    //Configuration de l'environnement en allant chercher des infos dans .env (port)
    private configureEnvironment(): void {
        dotenv.config({
            path: '.env'
        })
    }

    //'port' est initialisé et on va le chercher dans la classe getPort
    private configureServerPort(): void {
        this.port = this.getPort();
    }
    
    private configureServices(): void {
        this.userService = new UserJSONService();
    }

    // Vérifier s'il y a un port si il y en a pas erreur sinon 'port' est défini
    private getPort(): string {
        const port = process.env.PORT;
        if (!port) {
            throw new Error('None port in dotenv')
        }
        return port;
    } 
    

    private configureExpressRouter(): void {
        this.expressRouter = new ExpressRouter(this.userService);
    }

    private configureServer() {
        this.server = new ExpressServer(this.expressRouter, this.port);
    }
  
}
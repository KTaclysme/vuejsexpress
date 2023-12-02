import { ExpressServer } from "./express-server";
import * as dotenv from 'dotenv'
import { ExpressRouter } from "./express.router";
import { UserService } from "../user/user.interface";
import { UserJSONService } from "../user/user.json-service";

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
    private configureEnvironment(): void {
        dotenv.config({
            path: '.env'
        })
    }

    private configureServerPort(): void {
        this.port = this.getPort();
    }
    
    private configureServices(): void {
        this.userService = new UserJSONService();
    }

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
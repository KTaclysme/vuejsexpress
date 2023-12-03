import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import { ExpressRouter } from './express.router';

// configurer et lancer le serveur express qui va être utilisé pour réceptionner des requêtes HTTP
export class ExpressServer {
    private express = express();

    constructor(
        private expressRouter: ExpressRouter,
        private port: string,
        ) {
            this.configureImport();
            this.configureRoutes();
        }

    private configureImport(): void {
        this.express.use(cors({
            origin: 'http://localhost:5173',
            optionsSuccessStatus: 200
        }));
        this.express.use(bodyParser.json());
    }

    //Toutes les routes sur /api => ExpressRouter
    private configureRoutes(): void {
        this.express.use('/api', this.expressRouter.router);
    }

    //Ecoute sur le port
    bootstrap(): void {
        this.express.listen (this.port, () => {
            console.log(`> Listening on port ${this.port}`)
        })
    }
}

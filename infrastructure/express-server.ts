import bodyParser from 'body-parser';
import cors, { CorsOptions } from 'cors';
import express from 'express';
import { ExpressRouter } from './express.router';

// Configuration des imports et surtout de la route api réservé aux api 
// Pas nécessaire d'y toucher 
export class ExpressServer {
    private express = express();

    constructor(
        private expressRouter: ExpressRouter,
        private port: string,
    ) {
        this.configureServer();
    }

    bootstrap(): void {
        this.express.listen(this.port, () => {
            console.log(`> Listening on port ${this.port}`);
        });
    }

    private configureServer(): void {
        this.configureCorsPolicy();
        this.configureBodyParser();
        this.configureRoutes();
    }

    private configureCorsPolicy(): void {
        const corsOptions: CorsOptions = {
            origin: '*',
        };
        
        this.express.use(cors(corsOptions));
    }

    private configureBodyParser(): void {
        this.express.use(bodyParser.json());
    }

    private configureRoutes(): void {
        this.express.use('/api', this.expressRouter.router);
    }
  }
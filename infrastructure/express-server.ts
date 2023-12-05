import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ExpressRouter } from './express.router';
import { MongoClient, ObjectId } from 'mongodb';

export class ExpressServer {
  private express: Application;
  private db: any; // Ajout d'une propriété pour stocker la connexion à la base de données

  constructor(
    private expressRouter: ExpressRouter,
    private port: string,
  ) {
    this.express = express();
    this.configureImport();
    this.configureRoutes();
  }

  private configureImport(): void {
    this.express.use(cors({
      origin: 'http://localhost:5173',
      optionsSuccessStatus: 200
    }));
    this.express.use(bodyParser.json());
    // Connexion à la base de données MongoDB
    // this.connectToDatabase();
  }

  private configureRoutes(): void {
    this.express.use('/api', this.expressRouter.router);

    this.express.post('/inscription', async (req: Request, res: Response) => {
      const { nom, prenom, sexe, date_de_nais, mail, mdp } = req.body;

      const utilisateur = {
        nom,
        prenom,
        sexe,
        date_de_nais,
        mail,
        mdp
      };

      const result = await this.db.collection('utilisateur').insertOne(utilisateur);

      res.send({ message: 'Inscription réussie', insertedId: result.insertedId });
    });

    this.express.post('/connexion', async (req: Request, res: Response) => {
      const { mail, mdp } = req.body;

      const user = await this.db.collection('utilisateur').findOne({ mail, mdp });

      if (user) {
        res.send({ message: 'Connexion réussie', userId: user._id });
      } else {
        res.status(401).send({ error: 'Adresse mail ou mot de passe invalide' });
      }
    });
  }

//   private async connectToDatabase(): Promise<void> {
//     const client = new MongoClient('mongodb://localhost:27017');

//     try {
//       await client.connect();
//       this.db = client.db('UserVue');
//       console.log('Connected to the database');
//     } catch (error) {
//       console.error('Error connecting to the database:', error);
//     }
//   }

  bootstrap(): void {
    this.express.listen(this.port, () => {
      console.log(`> Listening on port ${this.port}`);
    });
  }
}

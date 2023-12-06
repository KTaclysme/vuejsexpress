import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs/promises';

export class ExpressServer {
  private express: Application;

  constructor(
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
  }

  private configureRoutes(): void {
    this.express.post('/inscription', this.handleInscriptionRequest.bind(this));
    this.express.post('/connexion', this.handleConnexionRequest.bind(this));
  }

  private async handleInscriptionRequest(req: Request, res: Response): Promise<void> {
    const { nom, prenom, sexe, date_de_nais, mail, mdp } = req.body;
  
    try {
      const users = await this.readUsersFromJson();
  
      // Vérifier si l'e-mail existe déjà
      const existingUser = users.find((user: any) => user.mail === mail);
      if (existingUser) {
         res.json({ error: 'Adresse mail déjà utilisée' });
      }
  
      // Ajouter le nouvel utilisateur
      const newUser = { nom, prenom, sexe, date_de_nais, mail, mdp };
      users.push(newUser);
  
      // Enregistrer les utilisateurs mis à jour dans le fichier JSON
      await this.writeUsersToJson(users);
  
      res.json({ message: 'Inscription réussie', insertedId: newUser.mail });
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
    return; // Ajoutez cette ligne pour s'assurer que la fonction retourne une promesse void
  }
  
  
  private async handleConnexionRequest(req: Request, res: Response): Promise<void> {
    const { mail, mdp } = req.body;

    try {
      const users = await this.readUsersFromJson();

      const user = users.find((u: any) => u.mail === mail && u.mdp === mdp);

      if (user) {
        res.json({ message: 'Connexion réussie', userId: user.mail });
      } else {
        res.status(401).json({ error: 'Adresse mail ou mot de passe invalide' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  private async readUsersFromJson(): Promise<any[]> {
    try {
      const content = await fs.readFile('registered.json', 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      console.error('Error reading users from JSON:', error);
      return [];
    }
  }

  private async writeUsersToJson(users: any[]): Promise<void> {
    try {
      await fs.writeFile('registered.json', JSON.stringify(users, null, 2));
    } catch (error) {
      console.error('Error writing users to JSON:', error);
    }
  }

  bootstrap(): void {
    this.express.listen(this.port, () => {
      console.log(`> Listening on port ${this.port}`);
    });
  }
}

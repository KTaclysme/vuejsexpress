// // auth.controller.ts
// import { Request, Response } from 'express';
// import { UserController } from './user.controller';
// import { UserJSONService } from './user.services';

// const userService = new UserJSONService();
// const userController = new UserController(userService);

// export class AuthController {
//     static async handleConnexion(req: Request, res: Response): Promise<void> {
//         try {
//             const { email, password } = req.body;

//             if (!email || !password) {
//                 return res.status(400).json({ error: 'Les champs email et mot de passe sont requis' });
//             }

//             const isValidCredentials = await userController.validateCredentials(email, password);

//             if (isValidCredentials) {
//                 res.status(200).json({ message: 'Connexion réussie' });
//             } else {
//                 res.status(400).json({ error: 'Email ou mot de passe incorrect' });
//             }
//         } catch (error) {
//             console.error('Erreur lors de la connexion :', error);
//             res.status(500).json({ error: 'Erreur lors de la connexion', message: error.message });
//         }
//     }
// }

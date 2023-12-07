// user.services.ts
import fs from 'fs';
import path from 'path';

const usersFilePath = path.resolve(__dirname, 'users.json');

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export class UserJSONService {
    private users: User[] = [];

    constructor() {
        // Chargez les utilisateurs depuis le fichier JSON lors de l'initialisation
        this.loadUsers();
    }

    private loadUsers(): void {
        try {
            const data = fs.readFileSync(usersFilePath, 'utf-8');
            this.users = JSON.parse(data);
        } catch (error) {
            console.error('Erreur lors du chargement des utilisateurs :', error);
        }
    }

    private saveUsers(): void {
        try {
            fs.writeFileSync(usersFilePath, JSON.stringify(this.users, null, 2));
        } catch (error) {
            console.error('Erreur lors de la sauvegarde des utilisateurs :', error);
        }
    }

    async getByEmail(email: string): Promise<User | null> {
        return this.users.find((user) => user.email === email) || null;
    }

    addUser(user: User): void {
        this.users.push(user);
        this.saveUsers();
    }
}

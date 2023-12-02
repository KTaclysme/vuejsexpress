import { User } from "./user";

// Tous ce qui va toucher l'utilisateur
export interface UserService {
    add(username: string): User;
    getById(id: number): User | null;
}
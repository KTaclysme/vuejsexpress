// user.services.ts
import { User } from "./User";

export interface UserService {
    add(name: string, email: string, password: string): User;
    getId(id: number): User | null;
    getemail(email: string): User | null;
    display(name: string, email: string): User | null;
    delete(name: string, email: string, password: string): User;
    update(id: number, name: string, email: string, password: string): User
}

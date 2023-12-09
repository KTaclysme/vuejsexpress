// user.services.ts
import { User } from "./User";

export interface UserService {
    add(name: string, email: string, password: string): User;
    getId(id: number): User | null;
    getname(name: string): User | null;
    getemail(email: string): User | null;
    getpassword(password: string): User | null;
}

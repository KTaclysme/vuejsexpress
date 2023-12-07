// user.services.ts
import { User } from "./User";
export interface UserService {
    getid(id: number): User | null ;
    getname(name: string): User;
    getemail(email: string): User | null;
    getpassword(password: string): User;
}

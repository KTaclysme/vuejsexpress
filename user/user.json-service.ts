import { User } from "./user";
import { UserService } from "./user.interface";

export class UserJSONService implements UserService {
    add(username: string): User {
        throw new Error("Method not implemented.");
    }
    getById(id: number): User | null {
        throw new Error("Method not implemented.");
    }
}
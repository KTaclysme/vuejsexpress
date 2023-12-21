// user.controller.ts
import { UserService } from "./user.services";
import { User } from "./User";

export class UserController {
    constructor(private userService: UserService) {}

    addUser(name: string, email: string, password: string): User {
        return this.userService.add(name, email, password);
    }

    getUserById(id: number): User | null {
        return this.userService.getId(id);
    }

    getUserByEmail(email: string): User | null {
        return this.userService.getemail(email);
    }

    displayUser(name: string, email: string): User | null {
        return this.userService.display(name, email);
    }
    delUser(name: string, email: string, password: string): User {
        return this.userService.delete(name, email, password);
    }

    updUser(id: number, name: string, email: string, password: string): User {
        return this.userService.update(id, name, email, password);
    }
}

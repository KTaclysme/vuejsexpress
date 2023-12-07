// user.controller.ts
import { UserService } from "./user.services";
import { User } from "./User";

export class UserController {
    constructor(private userService: UserService) {}

    getUserById(id: number): User | null {
        return this.userService.getid(id);
    }

    getUserByName(name: string): User {
        return this.userService.getname(name);
    }

    getUserByEmail(email: string): User | null {
        return this.userService.getemail(email);
    }

    getUserByPassword(password: string): User {
        return this.userService.getpassword(password);
    }
}

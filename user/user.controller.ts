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

    getUserByName(name: string): User | null {
        return this.userService.getname(name);
    }

    getUserByEmail(email: string): User | null {
        return this.userService.getemail(email);
    }

    getUserByPassword(password: string): User | null{
        return this.userService.getpassword(password);
    }
}

// user.controller.ts
import { Request, Response } from 'express';
import { UserService } from './user.services';

export class UserController {
    constructor(private userService: UserService) {}

    async validateCredentials(email: string, password: string): Promise<boolean> {
        const user = await this.userService.getByEmail(email);
        if (!user) {
            return false; // L'utilisateur n'a pas été trouvé
        }

        return user.password === password;
    }
}

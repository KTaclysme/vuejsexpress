import { negativeNumber, notDefined, spaces } from "../src/utils";
import { User } from "./user";
import { UserService } from "./user.interface";

export class UserController {
    constructor(private userService: UserService) {}

    add(username: string): User{
        if(notDefined(username)) {
            throw new Error('Given username is not defined. ');
        }

        if(spaces(username)) {
            throw new Error('Can\'t have any spaces in the name');
        }

        return this.userService.add(username);
    }

    getById(id: number): User | null {
        if(negativeNumber(id)) {
            throw new Error('Can\'t be negativ');
        }

        return this.userService.getById(id);
    }
}
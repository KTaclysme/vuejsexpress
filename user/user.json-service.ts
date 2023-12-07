import { existsSync, readFileSync, writeFileSync } from 'fs';
import { User } from './User';
import { UserService } from './user.services';

const DEFAULT_USER_ID = 0;

export class UserJSONService implements UserService {
    private readonly userJsonPath = './src/user/users.json';

    constructor() {
        this.writeDefaultUsersJsonFile();
    }

    add(name: string): User {
        const users = this.getUsersFromJsonFile();

        this.throwWhennameExists(users, name);

        const newId = this.generateUniqueId(users);
        const newUser = new User(newId, name);

        users.push(newUser);
        this.overrideUsers(users);

        return newUser;
    }

    getId(id: number): User | null {
        const users = this.getUsersFromJsonFile();

        const existingUser = users.find((user) => user.id == id);
        return existingUser || null;
    }

    private writeDefaultUsersJsonFile(): void {
        if (!existsSync(this.userJsonPath)) {
            writeFileSync(this.userJsonPath, JSON.stringify([]));
        }
    }

    private getUsersFromJsonFile(): User[] {
        const buffer = readFileSync(this.userJsonPath);
        const users = JSON.parse(buffer.toString()) as User[];
        return users;
    }

    private throwWhennameExists(users: User[], name: string): void {
        const nameAlreadyExists = users.some((user) =>
            areSameStrings(user.name, name),
        );
        if (nameAlreadyExists) {
            throw new Error(
                `Given name "${name}" points to an existing user.`,
            );
        }
    }

    private generateUniqueId(users: User[]): number {
        if (isArrayEmpty(users)) {
            return DEFAULT_USER_ID;
        }

        const userIds = users.map((user) => user.id);
        return Math.max(...userIds) + 1;
    }

    private overrideUsers(users: User[]): void {
        writeFileSync(this.userJsonPath, JSON.stringify(users));
    }
}

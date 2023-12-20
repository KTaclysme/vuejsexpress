import { areSameStrings, isArrayEmpty } from '../src/utils';
import { existsSync, readFileSync, writeFileSync,mkdirSync  } from 'fs';
import { User } from './User';
import { UserService } from './user.services';

const DEFAULT_USER_ID = 0;

export class UserJSONService implements UserService {
    private readonly userJsonPath = './registered.json';

    constructor() {
        this.writeDefaultUsersJsonFile();
    }

    add(name: string, email: string, password: string): User {
        const users = this.getUsersFromJsonFile();

        const newId = this.generateUniqueId(users);
        const newUser = new User(newId, name, email, password);

        users.push(newUser);
        this.overrideUsers(users);

        return newUser;
    }

    delete(name: string, email: string, password: string): User {
        const users = this.getUsersFromJsonFile();
    
        // Recherche d'un utilisateur correspondant aux critères name, email et password
        const matchingUserIndex = users.findIndex((user) => 
            areSameStrings(user.name, name) &&
            areSameStrings(user.email, email) &&
            areSameStrings(user.password, password)
        );
        const deletedUser = users.splice(matchingUserIndex, 1)[0];
        this.overrideUsers(users);
        return deletedUser;
    }

    getId(id: number): User | null {
        const users = this.getUsersFromJsonFile();

        const existingUser = users.find((user) => user.id == id);
        return existingUser || null;
    }

    getname(name: string): User | null {
        const users = this.getUsersFromJsonFile();

        return null;
    }

    getemail(email: string): User | null {
        const users = this.getUsersFromJsonFile();

        const existingUser = users.find((user) => areSameStrings(user.email, email));
        return existingUser || null;
    }

    getpassword(password: string): User | null {
        const users = this.getUsersFromJsonFile();

        return null;
    }

    
    //TODO
    display(name: string, email: string): User | null {
        const users = this.getUsersFromJsonFile();
        return users;
    }
    
    update(id: number, name: string, email: string, password: string): User{
        const users = this.getUsersFromJsonFile();

        const userIndex = users.findIndex((user) => user.id === id);
        users[userIndex].name = name;
        users[userIndex].email = email;
        users[userIndex].password = password;
        this.overrideUsers(users);
        return users[userIndex];

    }


    private getUsersFromJsonFile(): User[] {
        if (existsSync(this.userJsonPath)) {
            const reader = readFileSync(this.userJsonPath);
            const users = JSON.parse(reader.toString()) as User[];
            return users;
        } else {
            return [];
        }
    }

    private writeDefaultUsersJsonFile(): void {
        if (!existsSync(this.userJsonPath)) {
            const dir = this.userJsonPath.substring(0, this.userJsonPath.lastIndexOf('/'));
            if (!existsSync(dir)) {
                mkdirSync(dir, { recursive: true });
            }

            writeFileSync(this.userJsonPath, JSON.stringify([]));
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

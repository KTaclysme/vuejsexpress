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

    getemail(email: string): User | null {
        const users = this.getUsersFromJsonFile();

        const existingUser = users.find((user) => areSameStrings(user.email, email));
        return existingUser || null;
    }


    display(name: string, email: string): User | null {
        const users = this.getUsersFromJsonFile();
        console.log('Searching for user by name and email:', name, email);
    
        const matchingUser = users.find(user => user.name === name && user.email === email);
        console.log('Matching user:', matchingUser); 
    
        return matchingUser || null;
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
          console.log('Utilisateurs chargés depuis le fichier JSON :', users);
          return users;
        } else {
          console.log("Le fichier JSON d'utilisateurs n'existe pas.");
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

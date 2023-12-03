
// Tous ce qui va toucher l'utilisateur

export class User {
    constructor(
        public id : number,
        public username : string,
    ) {}
}
export interface UserService {
    add(username: string): User;
    getById(id: number): User | null;
}

export class UserJSONService implements UserService {
    add(username: string): User {
        throw new Error("Method not implemented.");
    }
    getById(id: number): User | null {
        throw new Error("Method not implemented.");
    }
}
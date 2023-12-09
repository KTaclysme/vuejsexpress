export interface User {
    id: number;
    name: string;
    email: string;
}
export class User {
       constructor(public id: number, public name: string, public email: string, public password: string) {}
    }
    

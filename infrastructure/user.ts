// External dependencies
import { ObjectId } from "mongodb";

// Class Implementation
export default class User {
    constructor(public name: string, public firstname: string, public sexe: string, public age: Date, public id?: ObjectId) {}
}

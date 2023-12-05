// External dependencies
import { ObjectId } from "mongodb";

// Class Implementation
export default class User {
    constructor(public lastname: string, public firstname: string, public birthdate: Date, public id?: ObjectId) {}
}

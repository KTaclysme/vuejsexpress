// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from 'dotenv';

// Global Variables
export const collections: { Users?: mongoDB.Collection } = {}

// Initialize Connection
export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

  try {
    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const usersCollection: mongoDB.Collection = db.collection(process.env.USERS);

    collections.Users = usersCollection;

    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${usersCollection.collectionName}`);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

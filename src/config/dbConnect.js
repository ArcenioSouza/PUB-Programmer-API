import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const user = process.env.DB_USER_ADMIN;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

mongoose.connect(`mongodb+srv://${user}:${password}@${database}.gec0m.mongodb.net/PubDatabase?retryWrites=true&w=majority`)

let db = mongoose.connection;

export default db;
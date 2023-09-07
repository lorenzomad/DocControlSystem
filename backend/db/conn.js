import { MongoClient } from "mongodb";

const connectionString = process.env.CONNECTION_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("documents_library");

export default db;
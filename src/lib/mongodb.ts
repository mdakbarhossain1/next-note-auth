import { MongoClient } from 'mongodb';

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);
const dbName = 'note-app';

export async function connectToDB() {
  if (!client.topology?.isConnected()) await client.connect();
  const db = client.db(dbName);
  return { db, client };
}

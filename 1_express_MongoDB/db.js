import mongodb from "mongodb";
import "dotenv/config";

const MongoClient = mongodb.MongoClient;

const password = process.env.MONGODB_PASSWORD;
const collections = process.env.MONGODB_COLLECTIONS;

const mongoGet = async (data) => {
  const client = await MongoClient.connect(
    `mongodb+srv://tidyp:${password}@cluster0.ewn8ins.mongodb.net/${collections}?retryWrites=true&w=majority&appName=AtlasApp`
  );
  const db = client.db();
  const collection = db.collection('testcollection')
  // await collection.find(data).next().then((result) => { console.log(result) })
  await collection.find(data).toArray().then((result) => { console.log(result) })
  client.close()
};

const mongoPost = async (data) => {
  const client = await MongoClient.connect(
    `mongodb+srv://tidyp:${password}@cluster0.ewn8ins.mongodb.net/${collections}?retryWrites=true&w=majority&appName=AtlasApp`
  );
  const db = client.db();
  const collection = db.collection('testcollection')
  await collection.insertOne(data).then((result) => { console.log(result) })
  client.close()
};

export default { mongoGet, mongoPost };

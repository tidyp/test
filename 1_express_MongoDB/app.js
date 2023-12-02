import express from "express";
import db from "./db.js";
import mongodb from "mongodb";
const app = express();

db.mongoPost({ name: "A book", price: 14.99 });
// const data = db.mongoGet({price: 13.99})
const data = db.mongoGet({
  _id: new mongodb.ObjectId("6565c4347622136dfba04747"),
});
console.log(data);

app.listen(4000, () => {
  console.log("Server started on port 4000");
});

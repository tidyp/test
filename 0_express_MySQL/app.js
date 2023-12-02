import express from "express";
import db from "./db.js";

const app = express();

db.execute("SELECT * FROM orders")
  .then(([rows, fieldData]) => {
    console.log(rows, fieldData);
  })
  .catch((err) => {
    console.log(err);
  });

const getDate = async (req, res) => {
  const a = await db.execute("SELECT * FROM orders LIMIT 5");
  console.log(a);
};
getDate();

app.listen(4000, () => {
  console.log("Server started on port 4000");
});

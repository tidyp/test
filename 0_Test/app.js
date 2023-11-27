import express from "express";
import mysql from "mysql2/promise";
import db from "./db.js";

const app = express();

const getDate = async (req, res) => {
  const a = await db.execute("SELECT * FROM orders");
  console.log(a);
};
getDate();

app.listen(4000, () => {
  console.log("Server started on port 4000");
});

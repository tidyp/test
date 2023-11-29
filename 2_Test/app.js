import express from "express";
import modelProduct from "./models/product.js";

import "dotenv/config";

const app = express();
const Product = [
  // {
  //   title: "apple",
  //   price: 123,
  //   description: "aaaaaaaaaple",
  // },
  // {
  //   title: "banana",
  //   price: 456,
  //   description: "bbbbbbanana",
  // },
];

// create
modelProduct.create(Product);

// get: all
const getDatas = async () => {
  try {
    const datas = modelProduct.find();
    datas.then((data) => {
      console.log(data);
    });
  } catch (error) {
    console.error(error);
  }
};
getDatas();


// read
const getData = async () => {
  try {
    const data = await modelProduct.findById('656725ce526b151fb4c7b305');
    console.log(`print: ${data}`);
  } catch (error) {
    console.error(error);
  }
};
getData();

// delete
const delData = async () => {
  try {
    const data = await modelProduct.findByIdAndDelete('656725ce526b151fb4c7b305');
    console.log(`print: ${data}`);
  } catch (error) {
    console.error(error);
  }
};
delData();


app.listen(4000, () => {
  console.log("Server started on port 4000");
});

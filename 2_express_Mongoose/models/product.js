import mongoose from "mongoose";
import "dotenv/config";

const password = process.env.MONGODB_PASSWORD;
const collections = process.env.MONGODB_COLLECTIONS;

mongoose
  .connect(
    `mongodb+srv://tidyp:${password}@cluster0.ewn8ins.mongodb.net/${collections}?retryWrites=true&w=majority&appName=AtlasApp`
  )
  .then(console.log("db연결"))
  .catch((err) => console.log("db연결실패", err));

// schema 생성
const Schema = mongoose.Schema;

// productSchema
const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

// 모델생성
const modelsProduct = mongoose.model("Product", productSchema);
export default modelsProduct;

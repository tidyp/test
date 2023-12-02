import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import "dotenv/config";

const app = express();
const port = 3000;

const password = process.env.MONGODB_PASSWORD;
const collections = process.env.MONGODB_COLLECTIONS;

const MONGODB_URL = `mongodb+srv://tidyp:${password}@cluster0.ewn8ins.mongodb.net/${collections}?retryWrites=true&w=majority&appName=AtlasApp`;

app.use(
  session({
    secret: "my-secret",
    resave: false, // 요청이 올때마다 세션 저장: false
    saveUninitialized: true, // 저장할 필요가 없는 요청 세션 저장: false
    store: MongoStore.create({ mongoUrl: MONGODB_URL }),
  })
);


// 미들웨어
// 랜더링되는 모든 뷰에 이 필드가 설정됨.
app.use((req, res, next) => { 
  res.locals.Islogin = Islogin,
  res.locals.csrfToken = csrfToken()
  next()
 })

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`start server ${port}...`);
});

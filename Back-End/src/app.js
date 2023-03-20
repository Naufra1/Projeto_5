import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { userRoute } from "./router/user.js";
import { admRoute } from "./router/adm.js";
import { newsRoute } from "./router/news.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

//Rotas
userRoute(app);
admRoute(app);
newsRoute(app)

export default app;

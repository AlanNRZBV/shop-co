import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import * as mongoose from "mongoose";
import path from "path";

dotenv.config();

const app: Express = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use("/assets", express.static(path.join(__dirname, "assets")));

const run = async () => {
  await mongoose.connect(process.env.DATABASE_URL!);

  app.listen(process.env.PORT, () => {
    console.log(`shop-co server started on ${process.env.PORT} port`);
  });

  process.on("exit", () => {
    mongoose.disconnect();
  });
};

void run();

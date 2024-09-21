import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { rootRouter } from "./routes/index";
dotenv.config();

const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:8000",
    "https://reversifi-sdk.vercel.app/"
  ],
};

app
  .use(express.json())
  .use(cors(corsOptions))
  .use("/api", rootRouter());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server is running test test test");
});

app.listen(port, async () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
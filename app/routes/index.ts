import cors from "cors";
import express, { Router } from "express";
import { EscrowRouter } from "./escrow.router";

export const rootRouter = () => {
  const router = Router();

  router.use(express.json());
  router.use(cors());

  router.use("/escrow", EscrowRouter())

  return router;
};
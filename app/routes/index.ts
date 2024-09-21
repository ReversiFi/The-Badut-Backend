import cors from "cors";
import express, { Router } from "express";
import { EscrowRouter } from "./escrow.router";
import { OrderRouter } from "./order.router";

export const rootRouter = () => {
  const router = Router();

  router.use(express.json());
  router.use(cors());

  router.use("/escrow", EscrowRouter())
  router.use("/order", OrderRouter())

  return router;
};
import { Router } from "express";
import { EscrowController } from "../controllers/escrow.controller";
import { OrderController } from "../controllers/order.controller";


export const OrderRouter = () => {
  const router = Router();
  const orderController = new  OrderController();

  router.get("/", () => {
    console.log("test");
  });

  router.post("/createOrder", orderController.createOrder);
  router.get("/getOrder/:orderId", orderController.getOrder);

  return router;
}
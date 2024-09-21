import { Router } from "express";
import { EscrowController } from "../controllers/escrow.controller";

export const EscrowRouter = () => {
  const router = Router();
  const escrowController = new EscrowController();

  router.get("/", () => {
    console.log("test");
  });

  router.post("/addEscrowFactory", escrowController.addEscrowFactory);
  router.post("/deleteEscrowFactory", escrowController.deleteEscrowFactory);
  router.get("/getFactoryEscrow/:address", escrowController.getOrganizationEscrowFactory);


  return router;
};
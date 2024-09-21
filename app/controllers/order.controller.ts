import { Request, Response } from "express";
import { supabase } from "../services/supabase";

export class OrderController {
    createOrder = async(req: Request, res: Response) => {
        try {
            const {organization_wallet, escrow_address, order_id} = req.body

            if(!organization_wallet || !escrow_address || !order_id) {
                return res.status(400).json({ message: "Invalid params" });
            }

            const { data, error } = await supabase
              .from("orders")
              .insert({
                organization_wallet: organization_wallet,
                escrow_address: escrow_address,
                order_id: order_id
              })
              .select("*")

              if (error) {
                return res.status(400).json({ message: error });
              }

              return res.status(200).json({ data });
        }catch(e){
            console.log(e);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    getOrder = async(req: Request, res: Response) => {
        try {
            const { orderId } = req.params;

            if (!orderId) {
                return res.status(400).json({ message: "Invalid params" });
              }

              const { data, error } = await supabase
              .from("orders")
              .select("*")
              .eq("order_id", orderId);

              if (error) {
                return res.status(400).json({ message: error });
              } 

              return res.status(200).json({ data });
            
        }
        catch(e){
            console.log(e);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}
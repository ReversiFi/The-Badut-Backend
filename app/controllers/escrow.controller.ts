import { Request, Response } from "express";
import { supabase } from "../services/supabase";

export class EscrowController {
    addEscrowFactory = async(req: Request, res: Response) => { 
        try {
            const {organization_address, escrow_factory} = req.body

            if(!organization_address || !escrow_factory) {
                return res.status(400).json({ message: "Invalid params" });
            }

            const { data, error } = await supabase
              .from("escrow_factory")
              .insert({
                organization_address: organization_address,
                escrow_factory: escrow_factory
              }).select("*")

              console.log(data)
              return res.status(200).json({ data });
        }catch(e){
            console.log(e);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    getOrganizationEscrowFactory = async(req: Request, res: Response) => {
        try {
            const { address } = req.params;

            if (!address) {
                return res.status(400).json({ message: "Invalid params" });
              }

              const { data, error } = await supabase
              .from("escrow_factory")
              .select("*")
              .eq("escrow_factory", address);
        }catch(e){
            console.log(e);
            return res.status(500).json({ message: "Internal server error" });
        }   
    }
}
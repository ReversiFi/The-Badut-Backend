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
                organization_wallet: organization_address,
                escrow_factory: escrow_factory
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
    deleteEscrowFactory = async(req: Request, res: Response) => {
        try {
            const { address } = req.body;

            if (!address) {
                return res.status(400).json({ message: "Invalid params" });
              }

              const { data, error } = await supabase
              .from("escrow_factory")
              .delete()
              .eq("escrow_factory", address);

              return res.status(200).json({msg: "Delete success"});
              
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
              .eq("organization_wallet", address);

              if (error) {
                return res.status(400).json({ message: error });
              }

              return res.status(200).json({data});
        }catch(e){
            console.log(e);
            return res.status(500).json({ message: "Internal server error" });
        }   
    }
}
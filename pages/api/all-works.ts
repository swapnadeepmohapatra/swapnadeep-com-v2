import connectDB from "../../middleware/database";
import Works from "../../models/Works";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const rec = await Works.find({}).sort([["_id", "asc"]]);
    res.status(200).json({ works: rec || [] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default connectDB(handler);

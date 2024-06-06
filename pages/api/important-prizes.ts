import connectDB from "../../middleware/database";
import Prize from "../../models/Prizes";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const rec = await Prize.find({ important: true }).sort([["_id", "asc"]]);
    res.status(200).json({ prizes: rec || [] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default connectDB(handler);

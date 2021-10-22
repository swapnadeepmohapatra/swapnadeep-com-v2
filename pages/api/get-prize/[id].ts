import connectDB from "../../../middleware/database";
import Prize from "../../../models/Prizes";

import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  try {
    const prize = await Prize.findById(id);
    res.status(200).json({ prize });
  } catch (error) {
    res.status(500).json({ error: "Not Found" });
  }
}

export default connectDB(handler);

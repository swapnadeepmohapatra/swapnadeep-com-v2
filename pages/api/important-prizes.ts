import connectDB from "../../middleware/database";
import Prize from "../../models/Prizes";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const rec = await Prize.find({ important: true });

  res.status(200).json({ prizes: rec });
}

export default connectDB(handler);

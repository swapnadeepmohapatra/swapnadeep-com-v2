import connectDB from "../../middleware/database";
import Works from "../../models/Works";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const rec = await Works.find({});

  res.status(200).json({ works: rec });
}

export default connectDB(handler);

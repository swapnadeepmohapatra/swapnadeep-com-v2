import connectDB from "../../middleware/database";
import Talks from "../../models/Talks";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const rec = await Talks.find({});

  res.status(200).json({ talks: rec });
}

export default connectDB(handler);

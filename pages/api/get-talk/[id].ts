import connectDB from "../../../middleware/database";
import Talks from "../../../models/Talks";

import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  try {
    const talk = await Talks.findById(id);
    res.status(200).json({ talk });
  } catch (error) {
    res.status(500).json({ error: "Not Found" });
  }
}

export default connectDB(handler);

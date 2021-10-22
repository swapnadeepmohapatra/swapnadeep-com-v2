import connectDB from "../../../middleware/database";
import Projects from "../../../models/Projects";

import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  try {
    const project = await Projects.findById(id);
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ error: "Not Found" });
  }
}

export default connectDB(handler);

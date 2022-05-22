import connectDB from "../../middleware/database";
import Projects from "../../models/Projects";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const rec = await Projects.find({ important: true }).sort([["_id", "asc"]]);

  res.status(200).json({ projects: rec });
}

export default connectDB(handler);

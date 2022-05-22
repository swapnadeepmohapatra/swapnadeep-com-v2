import connectDB from "../../middleware/database";
import Blogs from "../../models/Blogs";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const rec = await Blogs.find({}).sort([["_id", "asc"]]);

  res.status(200).json({ blogs: rec });
}

export default connectDB(handler);

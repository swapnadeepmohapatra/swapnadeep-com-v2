import connectDB from "../../middleware/database";
import Blog from "../../models/Blogs";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const rec = await Blog.find({ important: true });

  res.status(200).json({ blogs: rec });
}

export default connectDB(handler);

import connectDB from "../../middleware/database";
import Blog from "../../models/Blogs";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const rec = await Blog.find({ important: true }).sort([["_id", "asc"]]);
    res.status(200).json({ blogs: rec || [] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default connectDB(handler);

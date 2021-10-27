import connectDB from "../../../middleware/database";
import Slides from "../../../models/Slides";

import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const slug = req.query.slug;
  try {
    const slides = await Slides.find({ slug: slug });
    res.status(200).json({ slide: slides[0] });
  } catch (error) {
    res.status(500).json({ error: "Not Found" });
  }
}

export default connectDB(handler);

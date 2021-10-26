import connectDB from "../../middleware/database";
import Puzzle from "../../models/Puzzle";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const puz = new Puzzle({
    done: true,
    time: Date.now(),
    date: `${new Date().getDate()}/${
      new Date().getUTCMonth() + 1
    }/${new Date().getFullYear()}`,
  });
  await puz.save();

  res.status(200).json({ message: "Added" });
}

export default connectDB(handler);

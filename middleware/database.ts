import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

const connectDB =
  (handler: any) => async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState) {
      return handler(req, res);
    }

    await mongoose.connect(
      "mongodb+srv://swapnadeep:dbpass@cluster0.xd7t4.mongodb.net/portfolio?retryWrites=true&w=majority"
    );
    return handler(req, res);
  };

export default connectDB;

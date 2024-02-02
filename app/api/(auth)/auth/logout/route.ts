import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// TODO : create login logic
export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  return NextResponse.json("logout");
};

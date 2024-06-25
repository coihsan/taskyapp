import { clerkClient, getAuth } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { userId } = getAuth(req);

  const user = userId ? await clerkClient.users.getUser(userId) : null;

  return res.status(200).json({});
}

export default handler;
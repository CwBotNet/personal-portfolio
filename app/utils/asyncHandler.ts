import { NextApiRequest, NextApiResponse } from "next";

type AsyncHandler = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: (error?: any) => void
) => Promise<void>;

const asyncHandler =
  (handler: AsyncHandler) =>
  (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    return Promise.resolve(
      handler(req, res, (err) => {
        if (err) {
          console.error("Async Handler Error:", err);
          res.status(500).json({ message: "internal server Error" });
        }
      })
    );
  };

export { asyncHandler };

import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "../../../libs/mongoose";
import { deletePdfFromCourse } from "../../../controllers/courses.controllers";
dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "DELETE":
      return deletePdfFromCourse(req, res);
  }
}

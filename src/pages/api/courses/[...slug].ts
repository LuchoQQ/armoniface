import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '../../../libs/mongoose';
import { deleteCourse, getCourseById } from '../../../controllers/courses.controllers';
dbConnect()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    switch (method) {
        case "GET":
            return getCourseById(req, res)
        case "DELETE":
            return deleteCourse(req, res)
    }
}
import { NextApiRequest, NextApiResponse } from 'next';
import { createCourse, getCoursesFromDB } from '../../../controllers/courses.controllers';
import { dbConnect } from '../../../libs/mongoose';

dbConnect()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    switch (method) {
        case "GET":
            return getCoursesFromDB(req, res)
        case "POST":
            return createCourse(req, res)
    }
}
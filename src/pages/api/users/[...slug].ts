import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '../../../libs/mongoose';
import { addCourseToUser, createUser, deleteCourseFromUser, deleteUserFromDB, getAllUsersFromDB, getCoursesOfUserById, getUserById, validateUser } from '../../../controllers/users.controller';
dbConnect()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const param = req?.query?.slug
    const id = param?.[0]
    const course = param?.[1]
    const courseId = param?.[2]
    switch (method) {
        case "GET":
            if (course) {
                return getCoursesOfUserById(req, res)
            }
            return getUserById(req, res)

        case "POST":
            if (id === 'auth') {
                return validateUser(req, res)
            }
            if (courseId !== undefined) {
                return addCourseToUser(req, res)
            }
        case "DELETE":
            if (course !== undefined) {
                return deleteCourseFromUser(req, res)
            }
            return deleteUserFromDB(req, res)

    }
}
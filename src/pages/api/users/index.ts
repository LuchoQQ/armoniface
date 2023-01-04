import { NextApiRequest, NextApiResponse } from 'next';
import { createUser, getAllUsersFromDB } from '../../../controllers/users.controller';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    switch (method) {
        case "GET":
            return getAllUsersFromDB(req, res)

        case "POST":
            return createUser(req, res)
    }
}
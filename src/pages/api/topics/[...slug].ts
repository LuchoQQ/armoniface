import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '../../../libs/mongoose';
import { deleteTopic } from '../../../controllers/topic.controllers';
dbConnect()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    switch (method) {
        case "DELETE":
            return deleteTopic(req, res)
    }
}
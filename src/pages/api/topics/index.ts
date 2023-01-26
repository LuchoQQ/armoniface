import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '../../../libs/mongoose';
import { getTopics, createTopic } from '../../../controllers/topic.controllers'


dbConnect()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    switch (method) {
        case "GET":
            return getTopics(req, res)
        case "POST":
            return createTopic(req, res)
    }
}
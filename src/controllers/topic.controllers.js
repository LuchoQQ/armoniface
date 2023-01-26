import Topic from "../models/Topic";

export const getTopics = async (req, res) => {
    try {
        const topics = await Topic.find();
        return res.status(200).json(topics);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const createTopic = async (req, res) => {
    const { title } = req.body;

    try {
        const topic = await Topic.create({
            title,
        });

        return res.status(201).json({
            status: "ok",
            message: "topic created sucessfull",
            ...topic._doc,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const deleteTopic = async (req, res) => {
    const id = req.query.slug[0];

    try {
        const topic = await Topic.findByIdAndDelete(id);

        return res.status(200).json({
            status: "ok",
            message: "topic deleted sucessfull",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

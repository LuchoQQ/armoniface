import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: false,
    }
);

export default mongoose.models.Topic || mongoose.model("Topic", topicSchema);

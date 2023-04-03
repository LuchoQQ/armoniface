import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        topic: {
            type: String,
            required: true,
            trim: true,
        },
        url: {
            type: String,
            required: true,
            trim: true,
        },
        coursePdf: {
            type: [{ pdfTitle: String, pdfUrl: String }],
            required: false,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Course || mongoose.model("Course", courseSchema);

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        courses: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Course",
            },
        ],
        role: {
            type: String,
            default: "user",
            required: true,
        },
        avatar: {
            type: String,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);


export default mongoose.models.User || mongoose.model("User", userSchema);
import Course from "../models/Course.js";

export const getCoursesFromDB = async (req, res) => {
    try {
        const courses = await Course.find();
        return res.status(200).json(courses);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getCourseById = async (req, res) => {
    const id = req.query.slug[0];
    try {
        const course = await Course.findById(id);
        if (course === null)
            return res.status(404).json({ message: "Course not found" });
        return res.status(200).json(course);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


export const createCourse = async (req, res) => {
    const { title, url, description, topic } = req.body;
    try {
        const course = await Course.create({
            title,
            url,
            topic,
            description,
        });
        return res.status(201).json({
            status: "ok",
            message: "user created sucessfull",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};



export const deleteCourse = async (req, res) => {
    const id = req.query.slug[0];
    try {
        const course = await Course.findByIdAndDelete(id);
        if (course === null)
            return res.status(404).json({ message: "Course not found" });
        return res.status(200).json(course);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

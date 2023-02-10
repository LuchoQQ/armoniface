import User from "../models/User";
import { hashPassword, comparePassword } from "../libs/bcrypt";
import Course from "../models/Course";
export const getAllUsersFromDB = async (req, res) => {
    try {
        const users = await User.find().select({
            name: 1,
            email: 1,
            role: 1,
            avatar: 1,
            createdAt: 1,
        });
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.create({
            name,
            email,
            password: await hashPassword(password),
        });
        if (user === null)
            return res.status(404).json({ message: "user not found" });
        return res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            createdAt: user.createdAt,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req, res) => {
    const id = req.query.slug[0];
    try {
        const user = await User.findById(id).select({
            name: 1,
            email: 1,
            role: 1,
            avatar: 1,
            createdAt: 1,
            courses: 1,
        });
        if (user === null)
            return res.status(404).json({ message: "user not found" });
        return res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCoursesOfUserById = async (req, res) => {
    const id = req.query.slug[0];
    try {
        const user = await User.findById(id).populate("courses");
        return res.status(200).json(user.courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteCourseFromUser = async (req, res) => {
    const id = req.query.slug[0];

    const courseId = req.query.slug[1];

    try {
        const user = await User.findById(id);
        if (user === null)
            return res.status(404).json({ message: "user not found" });
        const course = await Course.findById(courseId);
        if (course === null)
            return res.status(404).json({ message: "course not found" });

        user.courses.pull(courseId);
        await user.save();
        return res.status(200).json({ message: "course deleted" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteUserFromDB = async (req, res) => {
    const id = req.query.slug[0];

    try {
        const user = await User.findByIdAndDelete(id);
        if (user === null)
            return res.status(404).json({ message: "user not found" });
        return res.status(200).json({
            status: "ok",
            message: "user deleted sucessfull",
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const addCourseToUser = async (req, res) => {
    const id = req.query.slug[0];
    const course = req.query.slug[2];
    try {
        const courseId = await Course.findById(course);
        if (courseId === null) {
            return res.status(404).json({ message: "course not found" });
        }
        const userId = await User.findById(id);

        if (userId === null) {
            return res.status(404).json({ message: "user not found" });
        }
        userId.courses.push(courseId);
        await userId.save();
        return res.status(200).json(userId);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// validate

export const validateUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            email,
        })
        if (!user) {
            return res.status(404).json({
                status: "error",
                message: "user not found",
            });
        }
        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                status: "error",
                message: "invalid password",
            });
        }
        res.status(200).json({
            status: "ok",
            id: user._id,
            name: user.name,
            email: user.email,
            courses: user.courses,
            role: user.role,
            avatar: user.avatar,
            createdAt: user.createdAt,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

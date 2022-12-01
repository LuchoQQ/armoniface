import axios from "axios";
import { User } from "../types";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const API = {

    // USERS METHODS
    getUsers: async () => {
        try {
            return await axios.get(`${SERVER_URL}/users`);
        } catch (error) {
            return error;
        }
    },
    getUserById: async (pid: string | string[]) => {
        try {
            return await axios.get(`${SERVER_URL}/users/${pid}`);
        } catch (error) {
            return error
        }
    },
    createUser: async (values: {
        name: string;
        email: string;
        password: string;
    }) => {
        try {
            return await axios.post(`${SERVER_URL}/users`, values);
        } catch (error) {
            return error;
        }
    },
    deleteUser: async (id: string) => {
        try {
            return await axios.delete(`${SERVER_URL}/users/${id}`);
        } catch (error) {
            return error;
        }
    },

    // user and courses methods
    getMyCoursesByUserId: async (id: string | string[]) => {
        try {
            return await axios.get(`${SERVER_URL}/users/courses/${id}`);
        } catch (error) {
            return error;
        }
    },
    addCourseToUser: async (id: any, course: any) => {
        try {
            return await axios.post(`${SERVER_URL}/users/courses`, { id, course });

        } catch (error) {
            return error;
        }
    },
    deleteCourseFromUser: async (id: string, courseId: string) => {
        try {
            return await axios.delete(`${SERVER_URL}/users/${id}/courses/${courseId}`)
        } catch (error) {
            return error;
        }
    },

    // COURSES METHODS
    getCourses: async () => {
        try {
            return await axios.get(`${SERVER_URL}/courses/`);
        } catch (error) {
            return error;
        }
    },



}

export default API
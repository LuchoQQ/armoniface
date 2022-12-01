export interface User {
    _id: string;
    name: string
    email: string;
    role: string
    avatar: string;
    createdAt: string;
}

export interface Course {
    _id: string;
    title: string;
    description: string;
    url: string;
}

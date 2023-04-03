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
    url: string;
    topic: string
    coursePdf?: {pdfTitle: string, pdfUrl: string}[];
}

export interface Topic {
    _id: string;
    title: string;
}

export interface Pdf {
    _id?: string;
    pdfTitle: string;
    pdfUrl: string;
}
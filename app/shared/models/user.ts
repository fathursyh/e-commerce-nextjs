export interface User {
    id: string,
    name: string,
    email: string,
    phone: string,
    role: "customer" | "admin",
    createdAt: Date | string,
    updatedAt: Date | string
}

export interface LoginPayload {
    email: string,
    password: string,
}

export interface RegisterPayload {
    email: string,
    name: string,
    password: string,
    password_confirmation: string,
    phone: string,
}
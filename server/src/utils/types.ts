/********** BASICS */
export interface ErrorResponse{
    message: string
}
export interface IndexParameter<T> {
    document?: T,
    query?: T,
    update?: T
}
/********** USER */
export interface UserDocument {
    name: string,
    email: string,
    username: string,
    role: string,
    password: string,
    _id?: string
}
export interface UserQuery {
    name?: string,
    email?: string,
    username?: string,
    role?: string,
    password?: string,
    _id?: string
}
/********** JOB */
export interface JobDocument {
    createdBy: string,
    stakeholder: string[],
    job: string,
    jobProgress?: string,
    permission?: string[],
    createdAt?: Date,
    dueDate?: Date,
    isAlert?: boolean,
    _id?: string,
}
export interface JobQuery {
    _id?: string,
    createdBy?: string,
    stakeholder?: string[],
    job?: string,
    jobProgress?: string,
    permission?: string[],
    createdAt?: Date,
    isAlert?: boolean,
    dueDate?: Date,
}
/********** RESET PASSS */

export interface ResetPassData {
    username?: string,
    email?: string,
    token?: string
}
export interface ResetPassDocument {
    username?: string,
    email?: string,
    token?: string,
    _id?: string
}
export interface ResetPassQuery {
    username?: string,
    email?: string,
    token?: string,
    _id?: string
}

export interface ErrorResponse {
    message: string;
}

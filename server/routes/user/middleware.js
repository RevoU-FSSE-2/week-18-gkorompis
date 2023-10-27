import { restrictRegistration, hashPassword, permitRole, authenticateToken, setXRequestIdHeader } from "../../middlewares/index.js";
export const userPostMiddlewares = [
    setXRequestIdHeader,
    restrictRegistration,
    hashPassword
];
export const userGetMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'member']),
];
export const userGetOneMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'member']),
];
export const userPutMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'officer', 'member']),
];
export const userDeleteMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin']),
];
export const userDeleteManyMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin']),
];

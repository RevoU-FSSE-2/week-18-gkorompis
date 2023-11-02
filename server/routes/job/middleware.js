import { permitRole, authenticateToken, restrictCreate, setXRequestIdHeader } from "../../middlewares/index.js";
export const jobsPostMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'member'], "jobs"),
    restrictCreate
];
export const jobsGetMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'member'], "jobs"),
];
export const jobsGetOneMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'member'], "jobs"),
];
export const jobsPutMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'officer'], "job"),
];
export const jobsDeleteMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin'], "job"),
];
export const jobsDeleteManyMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin'], "job"),
];

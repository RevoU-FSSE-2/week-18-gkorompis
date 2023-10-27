import dontenv from 'dotenv'
dontenv.config();

export const MONGODB_SECRET = process.env.MONGODB_SECRET;
export const SECRET_KEY = process.env.SECRET_KEY;
export const SECRET_REFRESH_KEY = process.env.SECRET_REFRESH_KEY;
export const BASE_URL = process.env.BASE_URL
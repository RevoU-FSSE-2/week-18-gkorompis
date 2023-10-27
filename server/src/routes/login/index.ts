import express from "express";
import { loginController } from "../../controller/index.js";
import { loginPostMiddlewares, refreshPostMiddlewares } from "./middlewares.js";

export const app = express();
app.use(express.json());
const loginRoute = express.Router();

const {
    loginPostController,
    refreshPostController
} = loginController;
/**
 * @openapi
 * paths:
 *   /login/auth:
 *     post:
 *       summary: login
 *       tags: 
 *          - 2. Login
 *       description: |
 *         This endpoint allows you to login.
 *         To login, provide login details username and password.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             example:
 *               username: "user1"
 *               password: "asdfASDF01"
 *       responses:
 *         '200':
 *           description: Successful login
 *           content:
 *             application/json:
 *               example:
 *                 token: "64f23f8794701a7f79ce8863"
 *                 refreshToken: "64f23f8794701a7f79ce8863"
 *         '500':
 *           description: Internal Server Error - Internal server error
 */

/**
 * @openapi
 * paths:
 *   /login/refresh:
 *     post:
 *       summary: refresh token
 *       tags: 
 *          - 2. Login
 *       description: |
 *         This endpoint allows you to refresh your token
 *         Requires cookies stored from previous login
 *       responses:
 *         '200':
 *           description: Successful refresh
 *           content:
 *             application/json:
 *               example:
 *                 token: "64f23f8794701a7f79ce8863"
 *                 refreshToken: "64f23f8794701a7f79ce8863"
 *         '400':
 *           descritption: Bad request - bad request.
 *         '401':
 *           description: Invalid - Invalid refresh token.
 *         '500':
 *           description: Internal Server Error - Internal server error.
 */

// routes
loginRoute.post("/auth",loginPostMiddlewares ,loginPostController);
loginRoute.post("/refresh", refreshPostMiddlewares ,refreshPostController);


export default loginRoute;
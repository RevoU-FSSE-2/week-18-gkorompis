import express from "express";
import { logoutController } from "../../controller/index.js";
import { logoutPostMiddlewares } from "./middlewares.js";
const app = express();
app.use(express.json());
const logoutRoute = express.Router();
const { logoutPostController } = logoutController;
/**
 * @openapi
 * /logout:
 *  post:
 *      summary: endpoint to logout session
 *      tags:
 *          - 5. Logout
 *      description: |
 *          Clear session cookies
 *      responses:
 *          '200':
 *              description: Success
 *          '500':
 *              description: Internal server error
 */
// routes
logoutRoute.post("/", logoutPostMiddlewares, logoutPostController);
export default logoutRoute;

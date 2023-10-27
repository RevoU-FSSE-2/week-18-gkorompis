import express from "express";
import { resetController } from "../../controller/index.js";
import { resetPasswordTokenMiddlewares, resetPasswordRequestMiddlewares } from "./middlewares.js";
const app = express();
app.use(express.json());
const resetRoute = express.Router();
const { resetPasswordRequestController, resetPasswordController } = resetController;
/**
 * @openapi
 * /resetToken/password/request:
 *  post:
 *      summary: Request reset password
 *      tags:
 *          - 4. Reset Password
 *      description: |
 *          Create request link to reset password
 *          Requires at request body: registered email and corressponding username
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      description: request body for resetToken request
 *                      properties:
 *                          username:
 *                              type: string
 *                              description: registered username
 *                          email:
 *                              type: string
 *                              description: registered email
 *                      example:
 *                          username: "lorem"
 *                          email: "lorem@email.com"
 *      responses:
 *          '200':
 *              description: success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              resetLink:
 *                                  type: string
 *                                  description: url to reset password
 *                      example:
 *                          resetLink: "http://localhost:5001/resetToken/password/token/sometoken"
 *          '500':
 *              description: Internal server error - unexpected error
 *
 */
/**
 * @openapi
 * /resetToken/password/token/{token}:
 *  post:
 *      summary: Reset password
 *      tags:
 *          - 4. Reset Password
 *      description: |
 *          Endpoint to reset password. Requires request body: newPassword, reNewPassword
 *      parameters:
 *          - in: path
 *            name: token
 *            description: insert token here
 *            required: true
 *            schema:
 *              type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      description: request body
 *                      properties:
 *                          newPassword:
 *                              type: string
 *                              description: new password
 *                          reNewPassword:
 *                              type: string
 *                              description: re new password
 *                  example:
 *                      newPassword: "randomAlphaNumereric"
 *                      reNewPassword: "randomAlphaNumeric"
 *      responses:
 *          '200':
 *              description: success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          description: response
 *                          properties:
 *                              responseUpdate:
 *                                  type: object
 *                                  description: update information
 *                      example:
 *                          responseUpdate: "randommatch"
 *          '500':
 *              description: Internal server error
 */
// routes
resetRoute.post("/password/request", resetPasswordRequestMiddlewares, resetPasswordRequestController);
resetRoute.post("/password/token/:token", resetPasswordTokenMiddlewares, resetPasswordController);
export default resetRoute;

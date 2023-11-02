"use strict";
/**
 * @openapi
 * paths:
 *   /user:
 *     post:
 *       summary: create new user
 *       tags:
 *          - 1. User
 *       description: |
 *         This endpoint allows you to register a new user.
 *         To register, provide user details including name, email, username, role, and a password.
 *         Available roles: member (default), admin, officer.
 *         Passwords must be alphanumeric and at least 8 characters long.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             example:
 *               name: "lorem"
 *               email: "lorem@email.com"
 *               username: "lorem_ipsum"
 *               role: "admin"
 *               password: "revouREVOU2023"
 *       responses:
 *         '200':
 *           description: Successful registration
 *           content:
 *             application/json:
 *               example:
 *                 acknowledged: true
 *                 insertedId: "64f23f8794701a7f79ce8863"
 *         '400':
 *           description: Bad Request - Bad request at request body!
 *         '409':
 *           description: Conflict - Username or email already registered
 *         '500':
 *           description: Internal Server Error - Internal server error
 */
//GET all user
/**
 * @openapi
 * /user:
 *   get:
 *     summary: retrieve all users
 *     tags:
 *       - 1. User
 *     description: |
 *       Retrieve a list of all users.
 *       Requires authorization with a valid bearer token (JWT).
 *       Query parameters can be used to filter results based on string fields.
 *     parameters:
 *       - in: header
 *         name: authorization
 *         description: Insert your JWT token here.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful retrieval of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The unique identifier for the user request.
 *                   name:
 *                     type: string
 *                     description: name.
 *                   email:
 *                     type: string
 *                     description: email.
 *                   username:
 *                     type: string
 *                     description: username.
 *                   role:
 *                     type: string
 *                     description: role.
 *                   password:
 *                     type: string
 *                     description: password.
 *             example:
 *               - _id: "64f0ebd9331d3c99b2d510b3"
 *                 name: "lorem_name"
 *                 email: "lorem@email.com"
 *                 username: "lorem_username"
 *                 role: "admin"
 *                 password: "hashed"
 *       '400':
 *         description: Bad Request - Invalid request
 *       '401':
 *         description: Invalid - Invalid access
 *       '500':
 *         description: Internal Server Error - An unexpected error occurred
 *     security:
 *       - bearerAuth: []  # Requires a valid bearer token (JWT) for authorization
 */
//GET one user
/**
 * @openapi
 * /user/one/{id}:
 *   get:
 *     summary: retrieve one user
 *     tags:
 *       - 1. User
 *     description: |
 *       Retrieve one user.
 *       Requires authorization with a valid bearer token (JWT).
 *       Requires object id in request params.
 *     parameters:
 *       - in: header
 *         name: authorization
 *         description: Insert your JWT token here.
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         description: Insert object id here.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful retrieval of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The unique identifier for the user request.
 *                   name:
 *                     type: string
 *                     description: name.
 *                   email:
 *                     type: string
 *                     description: email.
 *                   username:
 *                     type: string
 *                     description: username.
 *                   role:
 *                     type: string
 *                     description: role.
 *                   password:
 *                     type: string
 *                     description: password.
 *             example:
 *               - _id: "64f0ebd9331d3c99b2d510b3"
 *                 name: "lorem_name"
 *                 email: "lorem@email.com"
 *                 username: "lorem_username"
 *                 role: "admin"
 *                 password: "hashed"
 *       '400':
 *         description: Bad Request - Invalid request
 *       '401':
 *         description: Invalid - Invalid access
 *       '500':
 *         description: Internal Server Error - An unexpected error occurred
 *     security:
 *       - bearerAuth: []  # Requires a valid bearer token (JWT) for authorization
 */
//update one user
/**
 * @openapi
 * /user/one/{id}:
 *   put:
 *     summary: edit one user data
 *     tags:
 *       - 1. User
 *     description: |
 *       Edit one user.
 *       Requires authorization with a valid bearer token (JWT).
 *       Requires object id in request params.
 *       Requires body of update parameter
 *     parameters:
 *       - in: header
 *         name: authorization
 *         description: Insert your JWT token here.
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         description: Insert object id here.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                 schema:
 *                     type: object
 *                     description: request body
 *                     properties:
 *                         name:
 *                             type: string
 *                             description: name
 *                     example:
 *                         name: "new name"
 *     responses:
 *       '200':
 *         description: Successful retrieval of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The unique identifier for the user request.
 *                   name:
 *                     type: string
 *                     description: name.
 *                   email:
 *                     type: string
 *                     description: email.
 *                   username:
 *                     type: string
 *                     description: username.
 *                   role:
 *                     type: string
 *                     description: role.
 *                   password:
 *                     type: string
 *                     description: password.
 *             example:
 *               - _id: "64f0ebd9331d3c99b2d510b3"
 *                 name: "lorem_name"
 *                 email: "lorem@email.com"
 *                 username: "lorem_username"
 *                 role: "admin"
 *                 password: "hashed"
 *       '400':
 *         description: Bad Request - Invalid request
 *       '401':
 *         description: Invalid - Invalid access
 *       '500':
 *         description: Internal Server Error - An unexpected error occurred
 *     security:
 *       - bearerAuth: []  # Requires a valid bearer token (JWT) for authorization
 */
//delete one user
/**
 * @openapi
 * /user/one/{id}:
 *   delete:
 *     summary: delete one user data
 *     tags:
 *       - 1. User
 *     description: |
 *       Delete one user.
 *       Requires authorization with a valid bearer token (JWT).
 *       Requires object id in request params.
 *       Permits role only admin and officer.
 *     parameters:
 *       - in: header
 *         name: authorization
 *         description: Insert your JWT token here.
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         description: Insert object id here.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful retrieval of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   acknowledged:
 *                     type: booolean
 *                     description: boolean.
 *                   deletedCount:
 *                     type: number
 *                     description: count
 *             example:
 *               - acknowledged: true
 *                 deletedCount: 1
 *       '400':
 *         description: Bad Request - Invalid request
 *       '401':
 *         description: Invalid - Invalid access
 *       '500':
 *         description: Internal Server Error - An unexpected error occurred
 *     security:
 *       - bearerAuth: []  # Requires a valid bearer token (JWT) for authorization
 */

"use strict";
/**
 * @openapi
 * /jobs:
 *   post:
 *     summary: Create New Job
 *     tags:
 *       - 3. Jobs
 *     description: |
 *       Create a new Job.
 *       Requires authorization with a valid bearer token (JWT).
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             description: The request body for creating a new Job.
 *             properties:
 *               createdBy:
 *                 type: string
 *                 description: The username of the user making the request.
 *               stakeholder:
 *                 type: string
 *               job:
 *                 type: string
 *               externalId:
 *                 type: string
 *             example:
 *               requestedBy: "alpha_110"
 *               status: "pending"
 *               requestedServices:
 *                 - "LAB01"
 *     responses:
 *       '200':
 *         description: Successful creation of a new Job
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 acknowledged:
 *                   type: boolean
 *                   description: Indicates if the request was acknowledged.
 *                 insertedId:
 *                   type: string
 *                   description: The unique identifier for the created request.
 *             example:
 *               acknowledged: true
 *               insertedId: "64f24a27c703235334e8fa1c"
 *       '400':
 *         description: Bad Request - Invalid request
 *       '500':
 *         description: Internal Server Error - An unexpected error occurred
 *     security:
 *       - bearerAuth: []    # Requires a valid bearer token (JWT) for authorization
 */
//GET all servicesRequest
/**
 * @openapi
 * /jobs:
 *   get:
 *     summary: Retrieve All Jobs
 *     tags:
 *       - 3. Jobs
 *     description: |
 *       Retrieve a list of all Jobs.
 *       Requires authorization with a valid bearer token (JWT).
 *       Admin can retrieve all, member can retrieve self.
 *     parameters:
 *       - in: header
 *         name: authorization
 *         schema:
 *           type: string
 *         description: Requires JWT Token
 *         required: true
 *     responses:
 *       '200':
 *         description: Successful retrieval of Jobs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The unique identifier for the Job.
 *                   requestedBy:
 *                     type: string
 *                     description: The username of the requester.
 *                   status:
 *                     type: string
 *                     description: The status of the Job.
 *                   requestedServices:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: An array of requested services.
 *                   createdTime:
 *                     type: string
 *                     format: date-time
 *                     description: The timestamp when the request was created.
 *                   updatedTime:
 *                     type: string
 *                     format: date-time
 *                     description: The timestamp when the request was last updated.
 *             example:
 *               - _id: "64f0ebd9331d3c99b2d510b3"
 *                 requestedBy: "alpha_110"
 *                 status: "pending"
 *                 requestedServices: ["LAB01"]
 *                 createdTime: "2023-08-31T19:36:55.477Z"
 *                 updatedTime: "2023-08-31T19:36:55.477Z"
 *               - _id: "64f24a27c703235334e8fa1c"
 *                 requestedBy: "alpha_110"
 *                 status: "pending"
 *                 requestedServices: ["LAB01"]
 *                 createdTime: "2023-09-01T20:31:32.649Z"
 *                 updatedTime: "2023-09-01T20:31:32.649Z"
 *               - _id: "64f24b8bc703235334e8fa1d"
 *                 requestedBy: "alpha_110"
 *                 status: "pending"
 *                 requestedServices: ["LAB03"]
 *                 createdTime: "2023-09-01T20:37:28.651Z"
 *                 updatedTime: "2023-09-01T20:37:28.651Z"
 *       '400':
 *         description: Bad Request - Invalid request
 *       '500':
 *         description: Internal Server Error - An unexpected error occurred
 *     security:
 *       - bearerAuth: []  # Requires a valid bearer token (JWT) for authorization
 */
//GET one servicesRequest
/**
 * @openapi
 * /jobs:
 *   get:
 *     summary: Get One Job
 *     tags:
 *       - 3. Jobs
 *     description: |
 *       Retrieve a specific Job by its unique identifier.
 *       Requires authorization with a valid bearer token (JWT).
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Insert your JWT token here.
 *         required: true
 *         schema:
 *           type: string
 *       - in: query  # Change the parameter location to "query"
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier for the Job.
 *     responses:
 *       '200':
 *         description: Successful retrieval of the Job
 *         content:
 *           application/json:
 *             schema:
 *               type: object  # Change the type to "object"
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The unique identifier of the Job.
 *                 requestedBy:
 *                   type: string
 *                   description: The username of the requester.
 *                 status:
 *                   type: string
 *                   description: The status of the Job.
 *                 requestedServices:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: The requested services.
 *                 createdTime:
 *                   type: string
 *                   format: date-time
 *                   description: The creation timestamp of the Job.
 *                 updatedTime:
 *                   type: string
 *                   format: date-time
 *                   description: The last update timestamp of the Job.
 *             example:
 *               _id: "64f24b8bc703235334e8fa1d"
 *               requestedBy: "alpha_110"
 *               status: "pending"
 *               requestedServices: ["LAB03"]
 *               createdTime: "2023-09-01T20:37:28.651Z"
 *               updatedTime: "2023-09-01T20:37:28.651Z"
 *       '400':
 *         description: Bad Request - Invalid request
 *       '403':
 *         description: Forbidden - Unauthorized access
 *       '500':
 *         description: Internal Server Error - An unexpected error occurred
 *     security:
 *       - bearerAuth: []  # Requires a valid bearer token (JWT) for authorization
 */
// PUT servicesRequest
/**
 * @openapi
 * /jobs/one/{id}:
 *   put:
 *     summary: update jobs document
 *     tags:
 *       - 3. Jobs
 *     description: |
 *       Update jobs document
 *       Requires authorization with a valid bearer token (JWT).
 *       Requires request body.
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Insert your JWT token here.
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier for the Job.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             description: the request body for update info
 *             properties:
 *               status:
 *                 type: string
 *                 description: the new status value to update
 *     responses:
 *       '200':
 *         description: Successful approval of the Job
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 acknowledged:
 *                   type: boolean
 *                   description: Indicates if the approval was acknowledged.
 *                 modifiedCount:
 *                   type: integer
 *                   description: The number of documents modified.
 *                 upsertedId:
 *                   type: null
 *                   description: The identifier for upserted documents (null in this case).
 *                 upsertedCount:
 *                   type: integer
 *                   description: The number of upserted documents.
 *                 matchedCount:
 *                   type: integer
 *                   description: The number of documents matched.
 *             example:
 *               acknowledged: true
 *               modifiedCount: 1
 *               upsertedId: null
 *               upsertedCount: 0
 *               matchedCount: 1
 *       '400':
 *         description: Bad Request - Invalid request
 *       '500':
 *         description: Internal Server Error - An unexpected error occurred
 *     security:
 *       - bearerAuth: []  # Requires a valid bearer token (JWT) for authorization
 */
//Delete servicesRequest
/**
 * @openapi
 * /jobs/one/{id}:
 *   delete:
 *     summary: Delete Permanently Job
 *     tags:
 *       - 3. Jobs
 *     description: |
 *       Permanently delete a Job.
 *       Requires authorization with a valid bearer token (JWT).
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Insert your JWT token here.
 *         required: true
 *         schema:
 *         type: string
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier for the Job.
 *     responses:
 *       '200':
 *         description: Successful permanent deletion of the Job
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 acknowledged:
 *                   type: boolean
 *                   description: Indicates if the deletion was acknowledged.
 *                 deletedCount:
 *                   type: integer
 *                   description: The number of documents deleted.
 *             example:
 *               acknowledged: true
 *               deletedCount: 1
 *       '400':
 *         description: Bad Request - Invalid request
 *       '403':
 *         description: Forbidden - Unauthorized access
 *       '500':
 *         description: Internal Server Error - An unexpected error occurred
 *     security:
 *       - bearerAuth: []  # Requires a valid bearer token (JWT) for authorization
 */ 

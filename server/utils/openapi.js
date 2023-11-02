export const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'week18',
            version: '1.0.0',
            description: 'Welcome to the API documentation for jobsprint app.',
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: "JWT"
                }
            },
        },
        security: [
            {
                bearerAuth: []
            }
        ],
        servers: [
            {
                url: "https://edpkdmygqf.execute-api.ap-southeast-3.amazonaws.com/dev",
            },
            {
                url: 'http://localhost:5002',
            }
        ],
        tags: [
            {
                name: '1. User',
                description: 'Endpoints related to user CRUD',
            },
            {
                name: '2. Login',
                description: 'Endpoints related to token and refresh token',
            },
            {
                name: '3. Jobs',
                description: 'Endpoints related to service request CRUD',
            },
            {
                name: '4. Reset Password',
                description: 'Endpoints related to request and reset token',
            },
            {
                name: '5. Logout',
                description: 'Endpoints related to clear token',
            },
        ]
    },
    apis: ["./routes/user/userOpenapi.js", "./routes/login/loginOpenapi.js", "./routes/job/jobOpenapi.js", "./routes/resetPass/resetOpenapi.js", "./routes/logout/logoutOpenapi.js"]
};

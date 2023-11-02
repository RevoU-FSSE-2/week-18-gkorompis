import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import cookieParser from 'cookie-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { swaggerOptions } from './utils/openapi.js';
//utils
import { logger } from './utils/morganConfig.js';
import { securedHeader } from './utils/securedHeader.js';
import { userRoute, jobRoute, loginRoute, resetRoute, logoutRoute } from './routes/index.js';
import { log } from './utils/logger.js';
const app = express();
app.use(logger);
app.use(securedHeader);
app.use(express.json());
app.use(cookieParser());
//cors
const allowedOrigins = [
    'http://jobsprint.app.s3-website.ap-southeast-3.amazonaws.com',
    'https://edpkdmygqf.execute-api.ap-southeast-3.amazonaws.com/dev',
    'https://edpkdmygqf.execute-api.ap-southeast-3.amazonaws.com',
    'http://localhost:5002',
    'http://localhost:3000'
];
app.use(cors({
    origin(origin, callback) {
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true,
}));
// app.use(cors())
//openapi
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
//routes
app.use('/users', userRoute);
app.use('/jobs', jobRoute);
app.use('/login', loginRoute);
app.use('/reset', resetRoute);
app.use('/logout', logoutRoute);
console.log(">>> deploy v #5");
app.listen(5002, () => {
    log("listening at", 5002);
});
// const server = awsServerlessExpress.createServer(app);
export const handler = serverless(app);
// export const handler = (event:any, context:any) => awsServerlessExpress.proxy(server, event, context);

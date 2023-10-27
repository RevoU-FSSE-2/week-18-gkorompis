import express from 'express';
import cors from 'cors'
import serverless from 'serverless-http';
import cookieParser from 'cookie-parser';


//utils
import { logger } from './utils/morganConfig.js';
import { securedHeader } from './utils/securedHeader.js';

import {
    userRoute,
    jobRoute,
    loginRoute,
    resetRoute,
    logoutRoute
} from './routes/index.js'

import { log } from './utils/logger.js';


const app = express();
app.use(logger);
app.use(securedHeader);
app.use(express.json());
app.use(cookieParser());

//cors
const allowedOrigins = [
    'http://week17.app.s3-website.ap-southeast-3.amazonaws.com',
    'https://dwampb0q8b.execute-api.ap-southeast-3.amazonaws.com',
    'https://dwampb0q8b.execute-api.ap-southeast-3.amazonaws.com/dev',
    'http://localhost:5001',
    'http://localhost:5002',
    'http://localhost:3000'
];

app.use(
  cors({
    origin(origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

//routes
app.use('/users', userRoute);
app.use('/jobs', jobRoute);
app.use('/login', loginRoute);
app.use('/reset', resetRoute);
app.use('/logout', logoutRoute);

app.listen(5002, ()=>{
    log("listening at", 5002)
}) 

export const handler = serverless(app);
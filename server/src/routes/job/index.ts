import express from 'express';
import { jobController } from '../../controller/index.js';
import { 
    jobsPostMiddlewares,
    jobsGetMiddlewares,
    jobsPutMiddlewares,
    jobsDeleteMiddlewares
} from "./middleware.js";

const app = express();
app.use(express.json());

const jobRoute = express.Router();
const {
    postController,
    getController,
    updateController,
    deleteController
} = jobController

jobRoute.post(
    '/', 
    jobsPostMiddlewares,
    postController
)

jobRoute.get(
    '/', 
    jobsGetMiddlewares,
    getController
)

jobRoute.put(
    '/one/:_id', 
    jobsPutMiddlewares,
    updateController
)

jobRoute.delete(
    '/one/:_id',
    jobsDeleteMiddlewares,
    deleteController
)

export default jobRoute;
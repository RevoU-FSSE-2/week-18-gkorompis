import express from 'express';
import { userController } from '../../controller/index.js';
import { 
    userPostMiddlewares,
    userGetMiddlewares,
    userPutMiddlewares,
    userDeleteMiddlewares
} from "./middleware.js";

const app = express();
app.use(express.json());

const userRoute = express.Router();
const {
    postController,
    getController,
    updateController,
    deleteController
} = userController

userRoute.post(
    '/',
    // userPostMiddlewares,
    postController
)

userRoute.get(
    '/', 
    // userGetMiddlewares,
    getController
)

userRoute.put(
    '/one/:_id', 
    // userPutMiddlewares,
    updateController
)

userRoute.delete(
    '/one/:_id',
    // userDeleteMiddlewares,
    deleteController
)

export default userRoute;
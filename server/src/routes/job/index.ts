import express from 'express';
import { jobController } from '../../controller/index.js';

const app = express();
app.use(express.json());

const jobRoute = express.Router();
const {
    postController,
    getController,
    updateController,
    deleteController
} = jobController

jobRoute.post('/', postController)
jobRoute.get('/', getController)
jobRoute.put('/', updateController)
jobRoute.delete('/',deleteController)

export default jobRoute;
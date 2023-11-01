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
jobRoute.put('/one/:_id', updateController)
jobRoute.delete('/one/:_id',deleteController)

export default jobRoute;
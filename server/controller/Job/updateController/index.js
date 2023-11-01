var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Job } from '../../../models/index.js';
import { log } from '../../../utils/logger.js';
const controllerName = "updateController";
//foo
const group = "Job";
const Unit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //request parameters
        log(`${controllerName} at ${group}`);
        const query = (req && req.params) || (req && req.query) || {};
        const update = req.body || {};
        //dao
        //foo
        const response = yield Job.updateDocByQuery({ query, update });
        //response
        log(`response ${controllerName} at ${group}`, response);
        return res.status(200).json(response);
    }
    catch (error) {
        log(`error ${controllerName} at ${group}`, error);
        return res.status(500).json({ message: error });
    }
});
export default Unit;

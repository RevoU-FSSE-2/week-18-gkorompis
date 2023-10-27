var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Unit = (permittedRoles, endpoint) => {
    const cb = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // fetch role from cookies
            // const {sessionRole, sessionUsername} = req.cookies;
            const { sessionRole, sessionUsername } = req.headers;
            console.log(">>> sessionRole", sessionRole);
            console.log(">>> sessionUsername", sessionUsername);
            if (!sessionRole) {
                return res.status(401).json({ message: "Invalid role!" });
            }
            ;
            //check permission
            if (!permittedRoles.includes(sessionRole)) {
                return res.status(403).json({ message: "Unauthorized role access!" });
            }
            ;
            //modify default query for role member
            if (sessionRole == "member") {
                if (endpoint == "jobs") {
                    console.log('>>> modifying default query for members', endpoint);
                    const { query } = req;
                    req.query = Object.assign(Object.assign({}, query), { createdBy: sessionUsername });
                }
                else {
                    console.log('>>> modifying default query for members', endpoint);
                    const { query } = req;
                    req.query = Object.assign(Object.assign({}, query), { username: sessionUsername });
                }
            }
            console.log(">>> passed role permission", sessionRole, req.query);
            next();
        }
        catch (err) {
            console.log(">>> error at middleware", err);
            return res.status(500).json({ message: "Bad request at request body!" });
        }
    });
    return cb;
};
export default Unit;

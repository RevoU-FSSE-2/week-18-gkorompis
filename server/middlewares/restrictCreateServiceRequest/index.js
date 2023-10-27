const Unit = (req, res, next) => {
    const { body } = req;
    if (!body) {
        return res.status(400).json({ message: "Bad request at request body!" });
    }
    ;
    const { sessionUsername, sessionRole } = req.cookies;
    if (sessionRole == "member") {
        console.log(">>> restrict create service request for role member");
        req.body = Object.assign(Object.assign({}, body), { requestedBy: sessionUsername });
    }
    ;
    console.log(">>> passed at restrict create service request");
    next();
};
export default Unit;

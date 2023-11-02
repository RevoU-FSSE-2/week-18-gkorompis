const Unit = (req, res, next) => {
    const { body } = req;
    if (!body) {
        return res.status(400).json({ message: "Bad request at request body!" });
    }
    ;
    const { sessionUsername, sessionRole } = req.cookies;
    if (sessionRole == "member") {
        console.log(">>> restrict create for role member");
        req.body = Object.assign(Object.assign({}, body), { createdBy: sessionUsername });
    }
    ;
    console.log(">>> passed at restrict create");
    next();
};
export default Unit;

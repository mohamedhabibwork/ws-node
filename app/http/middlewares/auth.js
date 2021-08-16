const User = require("../../models/User");

const auth = async function (req, res, next) {
    try {

        let token = null;

        if (req.header("token") !== null) token = req.header("token");

        else if (req.query.get("token") !== null) token = req.query.get("token");
        else if (req.params.get("token") !== null) token = req.params.get("token");

        console.log(token)

        const user = await User.findOne({
            where: {
                token: token
            }
        });

        if (user == null) return res.status(401).json({ "message" : "Unauthorized" });

        req.user = user;

        req.token = token;

        return next();
    }catch (e) {
        console.error(e);
       return  res.status(400).json({ error : e});
    }
}

module.exports = {
    auth
};
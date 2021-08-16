const User = require("../../models/User");

const login = async function (req, res) {

    if (!req.body) console.log(req.body);

    const {username, password} = req.body;

    if (username === undefined) return res.json({username: "empty"}).status(400);

    if (password === undefined) return res.json({password: "empty"}).status(400);

    const [user] = await Promise.all([User.findOne({"where": {username: username || '', password: password || '',}})]);

    if (user === null) return res.json({user: "not found"}).status(400);

    return res.json(user);
};

const userStore = async function (req, res) {
    const {username, password} = req.body;

    if (username === undefined) res.json({username: "empty"}).status(400);

    if (password === undefined) res.json({password: "empty"}).status(400);

    const [user, created] = await User.findOrCreate({
        where: {
            username: username,
        },
        defaults: {
            password: password,
        },
    });

    if (user === null) return res.json({user: "not found"}).status(404);

    return res.json(user);
};

const users = async function (req, res) {
    const users = await User.findAll();

    return res.json(users);
};

module.exports = {
    login,
    users,
    userStore
}
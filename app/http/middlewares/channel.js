const channelCheck = async function (req, res, next) {
    try {

        let channel = null;

        if (req.header("channel") !== null) channel = req.header("channel");

        else if (req.query.get("channel") !== null) channel = req.query.get("channel");
        else if (req.params.get("channel") !== null) channel = req.params.get("channel");

        req.channel = channel;

        return next();
    }catch (e) {
        console.error(e);
       return  res.status(400).json({ error : e});
    }
}

module.exports = {
    channelCheck
};
const {router} = require("./router");
const {auth} = require("../app/http/middlewares/auth");
const {channelCheck} = require("../app/http/middlewares/channel");

const channels = [];

router.ws('/', channelCheck, auth, function (ws, req) {

    channels[req.token][req.channel] = ws;

    ws.on('message', function ({to, from, msg, data}) {
        channels[req.token][to].send({from, to, msg, data});
    });

    console.log('socket', ws);

});

module.exports = router;
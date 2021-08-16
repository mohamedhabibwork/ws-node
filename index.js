// const ws = require('ws');
// require('dotenv').config()

const express = require('express');
const app = express();
// const multer = require('multer')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// const expressWs =
require('express-ws')(app);

const AuthRouter = require("./routes/auth");
const WSRouter = require("./routes/ws");
const RedisRouter = require("./routes/redis");


app.get('/', function (req, res) {
    return res.json({"message": "welcome to docker server", "redis": true, "postgres": true, "ws": true});
});

app.use(AuthRouter);
app.use('/redis/', RedisRouter);

app.use('/ws/', WSRouter);


app.listen(process.env.PORT || 3333);

console.log(`http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3333}`);
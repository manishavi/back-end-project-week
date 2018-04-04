const express = require("express");
const server = express();

const session = require("express-session");
const config = require("./config.json");

const STATUS_USER_ERROR = 422;
const BCRYPT_COST = 11;

server.use(express.json());
server.use(
    session({
        secret: 'lzEIGyov8aXTzq80V8YMY8MTffp4imV93FngTXwD4bzmnepFNN',
        resave: true,
        saveUninitialized: false
    })
);

const sendUserError = (err, res) => {
    res.status(STATUS_USER_ERROR);
    if (err && err.message) {
        res.json({ message: err.message, stack: err.stack });
    } else {
        res.json({ error: err });
    }
};

server.get('/', (req, res) => {
    console.log('Get route is working');
    res.json({ success: true });
});
module.exports = { server };
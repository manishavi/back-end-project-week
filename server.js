const express = require("express");
const server = express();

const session = require("express-session");
const config = require("./config.json");

const STATUS_USER_ERROR = 422;
const BCRYPT_COST = 11;

server.use(express.json());
server.use(
    session({
        secret: config.SECRET,
        resave: true,
        saveUninitialized: false
    })
);

server.get('/', (req, res) => {
    console.log('Get route is working');
});
module.exports = { server };
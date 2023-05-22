const dotenv = require('dotenv');
const connection = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

module.exports = (app, jwt, secret) => {
    app.use('/user', (req, res, next) => {
        const headAuth = req.headers.authorization;
        if (!headAuth) {
            res
            .status(400)
            .json({ msg: "No token, authorization denied"});
            return;
        }
        const token = headAuth.split(' ')[1];
        try {
            jwt.verify(token, secret);
        } catch {
            res
            .status(400)
            .json({ msg: "Token is not valid" });
            return;
        }
        req.token = token;
        next();
    })

    app.use('/todos', (req, res, next) => {
        const headAuth = req.headers.authorization;
        if (!headAuth) {
            res
            .status(400)
            .json({ msg: "No token, authorization denied"});
            return;
        }
        const token = headAuth.split(' ')[1];
        try {
            jwt.verify(token, secret, { algorithms: ['HS256']});
        } catch {
            res
            .status(400)
            .json({ msg: "Token is not valid" });
            return;
        }
        req.token = token;
        next();
    })
}

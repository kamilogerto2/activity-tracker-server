const HttpStatus = require('http-status-codes');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config/config').JWT;

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userData = decoded;
        next();
    } catch (err) {
        console.log(err);
        return res.sendStatus(HttpStatus.UNAUTHORIZED);
    }
};

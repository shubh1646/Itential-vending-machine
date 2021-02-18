var jwt = require('jsonwebtoken')
const config = require('../config')



module.exports = function auth(req, res, next) {
    const token = req.header('auth-token')
    if (!token)
        res.send(401).send("Please login! Acess denied")

    try {
        let secret = config.token
        let verify = jwt.verify(token, secret)

        next()
    }

    catch (err) {
        console.log(err)
        res.status(401).send('Invalid Token')
    }
}


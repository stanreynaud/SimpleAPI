require('dotenv').config()
const jwt = require("jsonwebtoken")

// This function checks the request bearer token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.status(401).send()

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,user) => {
        if (err) {
            console.log(err)
            return res.status(403).send()
        }
        req.user = user
        next()
    })
}

module.exports = {authenticateToken}
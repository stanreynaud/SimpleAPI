const jwt = require("jsonwebtoken")
require('dotenv').config()

module.exports = function(app){

    app.post("/login", (req, res) => {
        try {
            const user = {user : req.params.username}
            const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{ expiresIn: 30 })
            res.json({accessToken : accessToken})
        }
        catch(err) {
            console.log(err)
            res.status(500).json(err)
        }
    });
}
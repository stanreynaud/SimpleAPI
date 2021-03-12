const jwt = require("jsonwebtoken")

app.get("/login", (req, res) => {
    const token = generateAccessToken()
    res.json(token)
});

function generateAccessToken() {
    return jwt.sign({data: 'foobar'}, "secret", { expiresIn: '120s' });
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.status(401).send()

    jwt.verify(token, "secret", (err,user) => {
    console.log(err)
    if (err) return res.status(403).send()
    req.user = user
    next()
    })
}
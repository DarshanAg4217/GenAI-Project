
const jwt = require('jsonwebtoken')

function authUser(req, res, next) {
    const token = req.cookies.token3

    if (!token) {
        return res.status(401).json({
            message: "Token is Missing"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.user = decoded

        next()

    } catch (err) {
        return res.status(401).json({
            message: "Invalid Token"
        })
    }
}

module.exports = {
    authUser
}
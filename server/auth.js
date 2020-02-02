const config = require('config')
const jwt = require = require('jsonwebtoken')

function auth (req, res, next) {
    const token = req.header('x-auth-token')
    if (!token) {
        //res 401 not authorised
        res.status(401).json({msg : 'user not authorised, lack a token'})
    }

    try {


        const decoded = jwt.verify(token, config.get('jwtSecret'))
        
        req.user = decoded;
        
        next();

    }

    catch (e) {
        res.status(400).json({msg: 'token is not valid'})
    }


}

module.exports = auth
const jwt = require('jsonwebtoken');

const auth = {};

auth.verifyToken = (req, res, next) => {
    let token = req.get('Authorization');
    if (token) {
        token = token.split('Bearer ') [1];
        jwt.verify(token, 'secret', (err, decoded) => {
            if (!err) {
                req.decoded = decoded;
                next();
            }
        });
    }else{
        res.status(401).json({ msg:'No existe token' });
    }
}

module.exports = auth;
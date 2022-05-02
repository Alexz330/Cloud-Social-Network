const jwt = require('jsonwebtoken');
const config = require('../config')
const sing = (data) => {
    return jwt.sign(data, secret)
}

const secret = config.jwt.secret;

const verify = (token) => {
    return jwt.verify(token,secret)
}

const check = {
    own: function (req, owner) {
        const decoded = decoderHeader(req);
        console.log(decoded);
    }
}
const getToken = (auth) => {
    if(!auth){
        throw  new Error('no vienve tokenc')
    }
    if(auth.indexOf('Bearer')=== -1){
        throw new Error('Formato invalido')
    }
    let token = auth.replace('Bearer',"");

    return token;
}

const decoderHeader = (req) => {
    const authorization = req.headers.authorization || "";
    const token = getToken(authorization);
    const decoded = verify(token);
    req.user = decoded;
    return decoded

    
}

module.exports = {
    sing,
};
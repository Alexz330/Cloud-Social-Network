const jwt = require('jsonwebtoken')

const sing = (data)=>{
    return jwt.sign(data,'secreto')

}

module.exports = {
    sing, 
};


const jwt = require('jsonwebtoken')


const secret = config.jwt
const sing = (data)=>{
    return jwt.sign(data,'secreto')

}


const check = {
  own: function(req,owner){


  }
}

const verify = (token)=>{
  return jwt.verify(token)
}

const getToken = (auth)=>{

  if(!auth){
    throw new Error('No viene token'); 
  }

    
  if(auth.indexOf('Bearer') === -1){
     throw new Error('Formato invalido'); 
  }
  let token =  auth.replace('Bearer','');

  return token;
}


const decoderHeader = (req)=>{

  const authorization = req.headers.authorization || '';
  const token = getToken(authorization);
  const decoded = verify(token);
  req.user = decoded;

  return decoded

}
  module.exports = {
    sing, 
};

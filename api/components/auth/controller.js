const auth = require('../../../auth');
const bcrypt = require('bcrypt');
const TABLA = 'auth';

module.exports = function (injectedStore) {
    let store = injectedStore

    if (!store) {
        store = require('../../../store/dummy')
    }
    const login = async (username, password) => {
        const data = await store.query(TABLA, { username: username });
        
        return bcrypt.compare(password,data.password)
          .then(esIgual=>{

            if(esIgual === true){
             //Generar token;
            return auth.sing(data);
            } else
              throw new Error('Informacion invalida')
          })
        
      
    }

    const upsert = async(data) => {
        const authData = {
            id: data.id
        }
        if (data.username) {
            authData.username = data.username
        }

        if (data.password) {
            authData.password = await bcrypt.hash(data.password,10);
        }
    
        return store.upsert(TABLA, authData);
    }

    return {
        upsert,
        login
    }
};


const TABLE = 'user'


module.exports = function (injectedStore) {
    let store = injectedStore

    if (!store) {
        store = require('../../../store/dummy')
    }
    const list = () => {
        return store.list(TABLE);
    }

    const get = (id) => {
        return store.get(TABLE, id);
    }
    const upsert = (user) => {

        return store.upsert(TABLE, user);
    }
    return {
        list,
        get,
        upsert
    }
}

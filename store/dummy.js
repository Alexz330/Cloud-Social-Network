const db = {};

const list = (table)=>{
    return db[table];
}

const get = (table,id)=>{
    let collection =  list(table);
    return collection.filter(item => item.id=== id)[0] || null;
}

const upsert = (table,data)=>{
    	db[table].push(data)
}

const remove  = (tabla,id)=>{
    return true
}

module.exports = {
    list,
    get,
    upsert,
    remove
}
const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url)

async function dbConnect(){
    const result = await client.connect()
    const db = result.db('ecomm_dbase')
    return db;
   
}

module.exports = dbConnect;
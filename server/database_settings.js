const mongodb = require("mongodb");
const auth = require('./auth.json');

async function loadCollections(collection) {
    const client = await mongodb.MongoClient
        .connect(auth.mongodb_token, {
            useNewUrlParser: true
        });

    return client.db(auth.mongodb_db_name).collection(collection);
}

module.exports = loadCollections;
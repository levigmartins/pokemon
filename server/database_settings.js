const mongodb = require("mongodb");

async function loadCollections(collection) {
    const client = await mongodb.MongoClient
        .connect('mongodb+srv://mongodb:x5YoblBMIKSnqcRP@cluster0.own8z.mongodb.net/Cluster0?retryWrites=true&w=majority', {
            useNewUrlParser: true
        });

    return client.db('Cluster0').collection(collection);
}

module.exports = loadCollections;
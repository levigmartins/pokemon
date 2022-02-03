const { ObjectId } = require('mongodb');
const loadCollections = require('../database_settings');

module.exports = {
    async get(req, res) {
        const posts = await loadCollections('posts');
        return res.send(await posts.find({}).toArray());
    },
    async post(req, res) {
        const posts = await loadCollections('posts');
        await posts.insertOne({
            text: req.body.text,
            createdAt: new Date(),
        });

        return res.status(201).send();
    },
    async delete(req, res) {
        const posts = await loadCollections('posts');
        await posts.deleteOne({_id: new ObjectId(req.query.id)});
        return res.status(200).send();
    },
    async patch(req, res) {
        const posts = await loadCollections('posts');
        await posts.updateMany({_id: new ObjectId(req.query.id)}, {
            $set: { "text": req.body.text }
        });

        return res.status(200).send();
    }
}
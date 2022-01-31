const loadCollections = require('./../server/database_settings');

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
            boolean: req.body.bool
        });

        return res.status(201).send();

    }
}
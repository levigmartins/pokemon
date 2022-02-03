const router = require('express').Router();

const tester = require('./controllers/test');

router.get('/', tester.get);
router.post('/', tester.post);
router.patch('/', tester.patch);
router.delete('/', tester.delete);

module.exports = router;
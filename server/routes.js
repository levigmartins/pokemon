const router = require('express').Router();

const tester = require('./../controllers/test');

router.get('/', tester.get);
router.post('/', tester.post);

module.exports = router;
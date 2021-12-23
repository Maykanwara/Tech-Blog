const router = require('express').Router();

const apiRouter = require('./api');

router.use('/api', apiRoutes);

module.exports = router;
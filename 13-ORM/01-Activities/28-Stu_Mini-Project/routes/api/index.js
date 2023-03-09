const router = require('express').Router();

const travellers = require('./travellersRoutes');

router.use('/travellers', travellers);

module.exports = router;

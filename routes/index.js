const router = require('express').Router();
const userRoutes = require('./user-routes');
const foodPostRoutes = require('./foodPost-routes');

router.use('/user', userRoutes);
router.use('/food-post', foodPostRoutes);

module.exports = router;
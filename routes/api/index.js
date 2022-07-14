const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');


//  add prefix of the ro routes create in the api dir

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router
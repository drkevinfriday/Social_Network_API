// router import for api
const router = require('express').Router();

// import functions
const{
    createthought,
    getAllthought
}= require('../../controllers/thought-controller');


// Set up the GET and Post route at api/thoughts

router
    .route('/')
    .get(getAllthought)
    .post(createthought);

module.exports = router;
// router import for api
const router = require('express').Router();

// import functions
const{
    createthought,
    getAllthought,
    getThoughtByID,
    updatethought,
    removeThought,
    addReply,
    removeReply,
    removeReaction
}= require('../../controllers/thought-controller');


// Set up the GET and Post route at api/thoughts

router
    .route('/')
    .get(getAllthought)
    .post(createthought);

// Set up the GET and Post route at api/users/:id
router
.route('/:_id')
.get(getThoughtByID)
.put(updatethought)
.delete(removeThought);


router
    .route('/:thoughtId/reactions')
    .post(addReply)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);


module.exports = router;
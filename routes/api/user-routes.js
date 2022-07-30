// router import for api
const router = require('express').Router();

// import functions
const{ 
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    removeUser,
    addFriend,
    removeFriend
}= require('../../controllers/user-controller');


// Set up the GET and Post route at api/users

router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// Set up the GET and Post route at api/users/:id
router
    .route('/:_id')
    .get(getUserById)
    .put(updateUser)
    .delete(removeUser);



// /api/users/:userId/friends/:friendId

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;
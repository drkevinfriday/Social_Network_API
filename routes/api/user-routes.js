// router import for api
const router = require('express').Router();

// import functions
const{ 
    createUser,
    getAllUser
}= require('../../controllers/user-controllers');


// Set up the GET and Post route at api/users

router
    .route('/')
    .get(getAllUser)
    .post(createUser);
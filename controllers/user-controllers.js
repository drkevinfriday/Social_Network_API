const { createPoolCluster } = require('mysql');
const { User, Thought } = require('../models');

const userController = {
    //  the functions for the user will go here

    //  **** User Methods ******
    //  get all users
    getAllUser(req, res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

   createUser(req, res){
    User.create({})
    .then(dbUserData=> res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err)
    })
   }
}
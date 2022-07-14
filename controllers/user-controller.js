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
    getUserById(req, res) {
        User.findOne({_id: req.params._id})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

   createUser(req, res){
    User.create(req.body)
    .then(dbUserData=> res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err)
    })
   },

   updateUser(req, res) {
    User.findByIdAndUpdate({_id: req.params._id}, body ,{new: true, runValidators: true})
    .then(dbUserData => res.json(dbUserData))
    .catch(err=> {
        console.log(err)

    })


   },
   removeUser(req,res){
    User.findOneAndDelete({_id: req.params._id})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
   },

   addFriend(req,res){
    User.findByIdAndUpdate(
        req.params.userId,
       { $push: {freinds:req.params.friendId}},
       { new: true }
        )
        .then(dbUserData=> {
            if(!dbUserData){
                res.status(404).json({message:'No friends with that Id , no new friends' })
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => res.json(err))
   },

   removeFriend(req,res){
    User.findByIdAndUpdate(
        req.params.userId,
       { $pull: {freinds:req.params.friendId}},
       { new: true })
        .then(dbUserData=> {
            if(!dbUserData){
                res.status(404).json({message:'No friends with that Id , who are you looking for' })
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => res.json(err))
   }
}


module.exports = userController;
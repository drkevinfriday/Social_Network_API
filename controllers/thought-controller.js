const { User, Thought } = require('../models');

const thougtController = {
    //  the functions for the user will go here

    //  **** User Methods ******
    //  get all

    getAllthought(req, res) {
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },
    getThoughtByID(req, res) {
        Thought.findOne({_id: req.params._id})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },
    
    
    // create thought

   createthought(req, res){
    Thought.create(req.body)
    .then(dbThoughtData=>
         {User.findOneAndUpdate
        ({username: dbThoughtData.username},
        { $push:{ thoughts:dbThoughtData._id}} )
    res.json(dbThoughtData)}
        )
    .catch(err => {
        console.log(err);
        res.status(400).json(err)
    })
   },
   
   updatethought(req, res) {
    Thought.findByIdAndUpdate({_id: req.params._id}, req.body ,{new: true, runValidators: true})
    .then(dbUserData => res.json(dbUserData))
    .catch(err=> {
        console.log(err)
    })
   },
   removeThought(req,res){
    Thought.findOneAndDelete({_id: req.params._id})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
   },
   addReply(req, res){
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: req.body } },
        { new: true, runValiadators: true }
    )
    .then(dbReplyData =>{
        if(!dbReplyData) {
            res.status(404).json({message: 'No thought found with that id' });
            return;
        }
        res.json(dbReplyData);
    })
    .catch(err => res.json(err));
},
   removeReply(req, res){
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
    )
    .then(dbReplyData => res.json(dbReplyData))
    .catch(err => res.json(err));
},
removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { _id: params.reactionId } } },
      { new: true },
    )
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.json(err))
  },


}


module.exports = thougtController
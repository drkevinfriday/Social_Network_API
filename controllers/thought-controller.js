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

   createthought(req, res){
    Thought.create({})
    .then(dbThoughtData=> res.json(dbThoughtData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err)
    })
   }
}


module.exports = thougtController
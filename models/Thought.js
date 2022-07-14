const { Schema, model }= require('mongoose');
const dateFormat = require('../utils/dateFormat');


// reaction Schema
const ReactionSchema = new Schema(
    {
      // set custom id to avoid confusion wit parent comment _id
    
    ReactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    ReactionBody: {
      type: String,
      required: true,
      maxlength: [281, 'Reaction text must be 280 characters or under']
    },
    username: {
      type: String,
      required: true

    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
  )

// thought Schema

const ThoughtSchema = new Schema (
    {
    
        thoughtText: {
            type: String,
            required: true,
            minlength: [1, 'Thought text body is to short'],
            maxlength: [281, 'thought text must be 280 characaters or under']
        },

        createdAt: {
            type: Date,
            defalut: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },

        username: {
            type: String,
            required: true,
        }, 
        // use Reaction Schema to validate for a reaction
        reacations: [ReactionSchema]
    },
    {
        toJson: {
            getters: true
        }

    }
)
//  get total of friends count
ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reacations.length;
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought
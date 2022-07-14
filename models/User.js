const { Schema, model }= require('mongoose');
const router = require('../routes');
const dateformat = require('../utils/dateFormat');

// User Schema

const UserSchema = new Schema (
    {
        username:{
            type: String,
            trim: true,
            unique: true,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: ['[a-z0-9]+@[a-z]+\.[a-z]{2,3}']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
            ],
        freinds: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
            ]


    }, 
    {
        toJSON: {
            virtuals: true       
        },
 
    }
)

//  get total of friends count
UserSchema.virtual('friendCount').get(function(){
    return this.freinds.length;
})

const User = model('User', UserSchema);

module.exports = User
const { Schema, model }= require('mongoose');

// User Schema

const UserSchema = new Schema (
    {
        username:{
            type: String,
            required: 'Username is Required',
            unique: true,
            trim: true
           
        },
        email: {
            type: String,
            required: 'Email is Required',
            unique: true,
            match: [/.+@.+\..+/]
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
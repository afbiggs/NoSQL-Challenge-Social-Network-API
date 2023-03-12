// const { Schema, model } = require('mongoose');

// // user schema
// const UserSchema = new Schema(
//     {
//         username: {
//             type: String,
//             unique: true,
//             required: true,
//             trim: true
//         },
//         email: {
//             type: String,
//             unique: true,
//             required: true,
//             match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
//         },
//         thoughts: [
//             {
//                 type: Schema.Types.ObjectId,
//                 ref: 'Thought'
//             }
//         ],
//         friends: [
//             {
//                 type: Schema.Types.ObjectId,
//                 ref: 'User'
//             }
//         ]
//     },
//     {
//         toJSON: {
//             virtuals: true,
//             getters: true
//         },
//         id: false
//     }
// );

// // create the User model using the UserSchema
// const User = model('user', UserSchema);

// // gets total friend count
// UserSchema.virtual('friendCount').get(function () {
//     return this.friends.length;
// });

// module.exports = User;

const { Schema, model } = require('mongoose')
const moment = require('moment')

//Schema to create User model
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Enter a valid email address',
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
   

 toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  },
)
//Initialize our User model
const User = model('User', UserSchema)

UserSchema.virtual('friendCount').get(function () {
  return this.friends.lenght
})

//export The user model
module.exports = User
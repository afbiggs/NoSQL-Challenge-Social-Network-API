// const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');
// const reactionSchema = require('./Reaction');

// // thought schema
// const thoughtSchema = new Schema(
//     {
//         thoughtText: {
//             type: String,
//             required: true,
//             maxlength: 280
//         },
//         createdAt: {
//             type: Date,
//             default: Date.now,
//             get: (createdAtVal) => dateFormat(createdAtVal)
//         },
//         username: {
//             type: String,
//             required: true
//         },
//         // tying reactions to thought
//         reactions: [reactionSchema]
//     },
//     {
//         toJSON: {
//             virtuals: true,
//             getters: true
//         },
//         id: false
//     }
// );

// // gets total friend count 
// thoughtSchema.virtual('reactionCount').get(function () {
//     return this.reactions.length;
// });

// // create the User model using the UserSchema
// const Thought = model('Thought', thoughtSchema);

// module.exports = { Thought };

const { Schema, model, Types } = require('mongoose')
const moment = require('moment')

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      trim: true,
      minlenght: 1,
      maxlenght: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  },
)

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minleghth: 1,
      maxlenght: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
    },
    username: {
      type: String,
      required: true,
      ref: 'User',
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  },
)

// const ReactionSchema = new Schema(
//   {
//     reactionId: {
//       type: Schema.Types.ObjectId,
//       default: () => Types.ObjectId(),
//     },
//     reactionBody: {
//       type: String,
//       required: true,
//       trim: true,
//       minlenght: 1,
//       maxlenght: 280,
//     },
//     username: {
//       type: String,
//       required: true,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//       get: (createdAtVal) =>
//         moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
//     },
//   },
//   {
//     toJSON: {
//       getters: true,
//     },
//   },
// )
const Thought = model('Thought', ThoughtSchema)

ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
})
module.exports = Thought
console.log(Thought)


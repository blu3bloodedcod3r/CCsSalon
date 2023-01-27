const { AuthenticationError } = require('apollo-server-express');
const { User, Appt, Services } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')(''); // stripe key

const resolvers = {
  Query: {
    services: async () => {
      return await Services.find();
    },
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  // Mutation: {
        
  // }    
};

module.exports = resolvers;
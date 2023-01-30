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
    appts: async () => {
      return await Appt.find();
    }
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    
  }    
};

module.exports = resolvers;
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { AuthenticationError } = require('apollo-server-express');
const { User, Appt, Services } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')(''); // stripe key

module.exports = { typeDefs, resolvers };

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: '',
                populate: ''
              });
      
              user.services.sort((a, b) => b.purchaseDate - a.purchaseDate);
      
              return user;
            }

    },


    Mutation: {
        
        }

    }
};


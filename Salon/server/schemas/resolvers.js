const { AuthenticationError } = require('apollo-server-express');
const { User, Appt, Services } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')(''); // stripe key

const resolvers = {
  Query: {
    services: async () => {
      return await Services.find();
    },
    users: async () => {
      return await User.find();
    },
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('appts').populate({
          path: 'appts',
          populate: 'service'
        });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    appts: async () => {
      return await (await Appt.find()).populate('service');
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
    makeAppt: async (parent, { name, time, message, service }, context) => {
      console.log(context);
      if (context.user) {
        const appt = new Appt({ name, time, message, service });

        await User.findByIdAndUpdate(context.user._id, { $push: { appts: appt } });

        return appt;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // deleteAppt: async (parent, args, context) => {
    //   console.log(args)
    //   if (context.user) {
    //     return User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { appts: { appt.id: appt.id } } },
    //       { new: true }
    //     );
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
    addServices: async (parent, args, context) => {
      if (context.user) {
      const service = await Services.create(args);
      return { service };
    } 
    throw new AuthenticationError("You need to be logged in!");
  },
    deleteServices: async (parent, { _id }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { Services: { _id: _id } } },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  }    
};

module.exports = resolvers;
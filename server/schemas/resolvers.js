const { AuthenticationError } = require('apollo-server-express');
const { User, Appt, Services, Order } = require('../models');
const { signToken } = require('../utils/auth');
const testEmail = require('../utils/testemail');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc'); // stripe key

const resolvers = {
  Query: {
    services: async () => {
      return await Services.find();
    },
    users: async () => {
      return await User.find().populate('appts');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('appts').populate({
          path: 'appts',
          populate: 'service'
        });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    appts: async (parent, args, context) => {
      return await (Appt.find()).populate('service').populate('user');
    },
    service: async (parent, {serviceId}) => {
      return Services.findOne({ _id: serviceId });
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      console.log('+++++++email', email)
      console.log('+++++++password', password)
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      console.log('+++++++token', token)
      console.log('+++++++user', user)
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    makeAppt: async (parent, args, context) => {
      if (context.user) {
        console.log("args", args)
        console.log("context", context.user)
        const appt = await Appt.create(args);
        console.log("appt", appt)
        await User.findByIdAndUpdate(context.user._id, { $push: { appts: appt } });
        
        try {
          const sendTo = context.user.email;
          const sentFrom = 'Test CCSalon email <test-noreply@ccsalon.com>'; // that's for development - put real email to reply to when in production
          const replyTo = 'Test CCSalon email <test-noreply@ccsalon.com>';
          const subject = 'Appointment Confirmation';
          const message = `
            <h3>Hello! ${context.user.name}</h3>
            <p>Thank you for reserving an appointment with CC's Salon</p>
          `;
          await testEmail(subject, message, sendTo, sentFrom, replyTo)
        } catch (error) {
          console.log(error.message)
        }

      return appt.populate('service')
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addReview: async (parent, args, context) => {
      console.log('args', args)
      if (context.user) {
        return Services.findOneAndUpdate(
          { _id: args.serviceId },
          {
            $addToSet: {reviews: {reviewText: args.reviewText, reviewauthor: args.reviewAuthor, reviewImg: args.reviewImg}}
          },{new: true})
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    deleteAppt: async (parent, { apptId }, context) => {
      console.log('****apptId', apptId)
      if (context.user) {
        console.log('context.user', context.user)
        const userInfo = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { appts: { _id: apptId} }}, {new: true})
        console.log('userInfo', userInfo)        
      }
      throw new AuthenticationError("You need to be logged in!");
    },
     addService: async (parent, args) => {     
        const newService = await Services.create(args);
        console.log('newService', newService)
        // await Services ({ $addToSet: { services: }})
        return newService           
    },
    deleteService: async (parent, { serviceId }) => {
      return Services.findOneAndDelete({ _id:serviceId});
    }
   
  }    
};


module.exports = resolvers;
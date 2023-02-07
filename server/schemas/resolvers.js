const { AuthenticationError } = require('apollo-server-express');
const { User, Appt, Services, Order } = require('../models');
const { signToken } = require('../utils/auth');
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
    // checkout: async (parent, args, context) => {  
    //   console.log('***args', args)

    //   const url = new URL(context.headers.referer).origin;
    //   console.log('***url', url)

    //   const order = new Order({ products: args.products });
    //   console.log('***order', order)

    //   const line_items = [];

    //   const { products } = await order.populate('products');
    //   console.log('***products', products)

    //   for (let i = 0; i < products.length; i++) {
    //     const product = await stripe.products.create({
    //       name: products[i].name,
    //       description: products[i].description,
    //       images: [`${url}/images/${products[i].image}`]
    //     });

    //     const price = await stripe.prices.create({
    //       product: product.id,
    //       unit_amount: products[i].price * 100,
    //       currency: 'usd',
    //     });

    //     line_items.push({
    //       price: price.id,
    //       quantity: 1
    //     });
    //   }

    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     line_items,
    //     mode: 'payment',
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`
    //   });

    //   return { session: session.id };
    // }
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
    makeAppt: async (parent, args, context) => {
      if (context.user) {
        console.log("context", context.user)
        const appt = await Appt.create(args);
        console.log("appt", appt)
        await User.findByIdAndUpdate(context.user._id, { $push: { appts: appt } });

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
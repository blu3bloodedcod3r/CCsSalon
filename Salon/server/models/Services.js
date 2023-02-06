const mongoose = require('mongoose');

const { Schema } = mongoose;

/// Does the price for the services get added here? 
const servicesSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  duration: {
    type: String,
  },
  image: {
    type: String,
  },
  reviews: [
    {
      reviewText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      reviewAuthor: {
        type: String,
        required: true,
      },
      reviewImg: {
        type: String,
      },
      // createdAt: {
      //   type: Date,
      //   default: Date.now,
      //   get: (timestamp) => dateFormat(timestamp),
      // },
    },
  ],
});

const Services = mongoose.model('Services', servicesSchema);    


module.exports = Services;
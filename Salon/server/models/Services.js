const mongoose = require('mongoose');

const { Schema } = mongoose;

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
        filename: {
			type: String,
		},
    });

const Services = mongoose.model('Services', servicesSchema);    


module.exports = Services;
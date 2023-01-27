const mongoose = require('mongoose');

const { Schema } = mongoose;

const servicesSchema = new Schema({
        _id: {
            type: INTEGER,
            // primaryKey: true,
            // autoIncrement: true, 
        },
        name: {
            type: String,
            // allowNull: false,
 
        },
        description: {
            type: String,
            // allowNull: false
        },
        price: {
            type: String,
            // allowNull: false
        },
        duration: {
            type: String,
            // allowNull: false
        },
        filename: {
			type: String,
		},
    });

const Services = model('Services', servicesSchema);    


module.exports = Services;
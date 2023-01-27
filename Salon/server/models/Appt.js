const mongoose = require('monogoose');

const { Schema } = mongoose;

const apptSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    time: {
        type: Date,
        default: Date.now,
    },
    message: {
        type: String,
    },
    user_id: {
        type: Number,
        ref: 'User',
        required: true,
        //Key=id in components
    },
    service_id: {
        type: Number,
        ref: 'Service',
        //Key=id in components
    },
});


const Appt = mongoose.model('Appt', productSchema);

module.exports = Appt;
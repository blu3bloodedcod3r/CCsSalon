const mongoose = require('mongoose');

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
    // user: {
    //     type: Schema.Types. ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
    service: { 
        type: Schema.Types. ObjectId,
        ref: 'Service',
    },
});


const Appt = mongoose.model('Appt', apptSchema);

module.exports = Appt;
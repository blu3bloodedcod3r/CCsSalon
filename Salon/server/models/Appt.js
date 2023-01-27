const mongoose = require('mongoose');

const { Schema } = mongoose;

const apptSchema = new Schema({
    id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      // primaryKey: true,
      // autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      // allowNull: false
    },
    time: {
        type: DataTypes.DATE,
        // allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.INTEGER,
      // reference: {
      //   model: 'user',
      //   key: 'id'
      },
    },
    service_id: {
      type: DataTypes.INTEGER,
      // reference: {
      //   model: 'services',
      //   key: 'id'
      },
)

const Appt = mongoose.model('Appt', productSchema);

module.exports = Appt

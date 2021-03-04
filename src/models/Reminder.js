const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reminderSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
});

const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;

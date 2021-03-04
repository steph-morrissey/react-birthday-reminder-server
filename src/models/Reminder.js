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
  birthday: {
    type: String,
    required: true,
  },
  birthYear: {
    type: String,
    required: true,
  },
});

const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;

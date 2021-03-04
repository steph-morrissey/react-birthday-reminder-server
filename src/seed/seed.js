const mongoose = require('mongoose');

const db = require('../models');
const { DB_URI, MONGOOSE_OPTIONS } = require('../config');

const reminders = [
  {
    firstName: 'Justin',
    lastName: 'Bieber',
    dateOfBirth: '1994-03-01',
  },
  {
    firstName: 'Tyler',
    lastName: 'The Creator',
    dateOfBirth: '1991-03-06',
  },
];

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

db.Reminder.deleteMany({})
  .then(() => db.Reminder.collection.insertMany(reminders))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

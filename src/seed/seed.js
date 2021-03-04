const mongoose = require('mongoose');

const db = require('../models');
const { DB_URI, MONGOOSE_OPTIONS } = require('../config');

const reminders = [
  {
    firstName: 'Justin',
    lastName: 'Bieber',
    birthday: '1-3',
    birthYear: '1994',
  },
  {
    firstName: 'Brooklyn',
    lastName: 'Beckham',
    birthday: '4-3',
    birthYear: '1999',
  },
  {
    firstName: 'AJ',
    lastName: 'Tracey',
    birthday: '4-3',
    birthYear: '1994',
  },
  {
    firstName: 'Tyler',
    lastName: 'The Creator',
    birthday: '6-3',
    birthYear: '1991',
  },
  {
    firstName: 'Adam',
    lastName: 'Lemine',
    birthday: '18-3',
    birthYear: '1979',
  },
  {
    firstName: 'Reece',
    lastName: 'Witherspoon',
    birthday: '22-3',
    birthYear: '1976',
  },
  {
    firstName: 'Elton',
    lastName: 'John',
    birthday: '25-3',
    birthYear: '1947',
  },
  {
    firstName: 'Keira',
    lastName: 'Knightley',
    birthday: '26-3',
    birthYear: '1985',
  },
  {
    firstName: 'Miriah',
    lastName: 'Carey',
    birthday: '27-3',
    birthYear: '1970',
  },
  {
    firstName: 'Lady',
    lastName: 'Gaga',
    birthday: '28-3',
    birthYear: '1986',
  },
  {
    firstName: 'Celine',
    lastName: 'Dion',
    birthday: '30-3',
    birthYear: '1968',
  },
  {
    firstName: 'Vincent',
    lastName: 'van Gogh',
    birthday: '30-3',
    birthYear: '1953',
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

const mongoose = require('mongoose');

const db = require('../models');
const { DB_URI, MONGOOSE_OPTIONS } = require('../config');

const reminders = [
  {
    firstName: 'Justin',
    lastName: 'Bieber',
    day: '1',
    month: '3',
    year: '1994',
  },
  {
    firstName: 'Brooklyn',
    lastName: 'Beckham',
    day: '4',
    month: '3',
    year: '1999',
  },
  {
    firstName: 'AJ',
    lastName: 'Tracey',
    day: '4',
    month: '3',
    year: '1994',
  },
  {
    firstName: 'Tyler',
    lastName: 'The Creator',
    day: '6',
    month: '3',
    year: '1991',
  },
  {
    firstName: 'Bow',
    lastName: 'Wow',
    day: '9',
    month: '3',
    year: '1987',
  },
  {
    firstName: 'Adam',
    lastName: 'Lemine',
    day: '18',
    month: '3',
    year: '1979',
  },
  {
    firstName: 'Reece',
    lastName: 'Witherspoon',
    day: '22',
    month: '3',
    year: '1976',
  },
  {
    firstName: 'Elton',
    lastName: 'John',
    day: '25',
    month: '3',
    year: '1947',
  },
  {
    firstName: 'Keira',
    lastName: 'Knightley',
    day: '26',
    month: '3',
    year: '1985',
  },
  {
    firstName: 'Miriah',
    lastName: 'Carey',
    day: '27',
    month: '3',
    year: '1970',
  },
  {
    firstName: 'Lady',
    lastName: 'Gaga',
    day: '28',
    month: '3',
    year: '1986',
  },
  {
    firstName: 'Celine',
    lastName: 'Dion',
    day: '30',
    month: '3',
    year: '1968',
  },
  {
    firstName: 'Vincent',
    lastName: 'van Gogh',
    day: '30',
    month: '3',
    year: '1953',
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

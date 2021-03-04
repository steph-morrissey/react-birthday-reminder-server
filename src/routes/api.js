const express = require('express');
const db = require('../models');

const apiRouter = express.Router();

// GET all birthday reminders
const getAllReminders = async (_, res) => {
  try {
    const reminders = await db.Reminder.find({});
    res.json({
      results: reminders,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// GET all birthday reminders for current date
const getTodaysReminders = async (_, res) => {
  try {
    let [month, date] = new Date().toLocaleDateString('en-US').split('/');
    const currentDate = `${date}-${month}`;
    const reminders = await db.Reminder.find({ birthday: currentDate });
    res.json({
      results: reminders,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// ADD a reminder
// DELETE a reminder
// UPDATE a reminder

// routes
apiRouter.get('/allReminders', getAllReminders);
apiRouter.get('/reminders', getTodaysReminders);

module.exports = apiRouter;

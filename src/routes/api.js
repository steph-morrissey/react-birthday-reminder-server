const express = require('express');
const db = require('../models');

const apiRouter = express.Router();

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

const addBirthdayReminder = async (req, res) => {
  try {
    const payload = req.body;

    db.Reminder.create(payload);

    res.status(201).json({
      reminder: 'Birthday reminder successfully added!',
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const updateBirthdayReminder = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const updateReminder = await db.Reminder.findByIdAndUpdate(id, body);

    res.status(200).json({
      reminder: 'Birthday reminder successfully updated!',
      data: updateReminder,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const deleteBirthdayReminder = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteReminder = await db.Reminder.findByIdAndDelete(id);

    res.status(200).json({
      reminder: 'Birthday reminder successfully deleted!',
      data: deleteReminder,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// routes
apiRouter.get('/allReminders', getAllReminders);
apiRouter.get('/reminders', getTodaysReminders);
apiRouter.post('/reminders', addBirthdayReminder);
apiRouter.put('/reminders/:id', updateBirthdayReminder);
apiRouter.delete('/reminders/:id', deleteBirthdayReminder);

module.exports = apiRouter;

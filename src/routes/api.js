const express = require('express');
const db = require('../models');

const apiRouter = express.Router();

const getTodaysBirthdays = async (_, res) => {
  try {
    let [month, date] = new Date().toLocaleDateString('en-US').split('/');
    const currentDate = date;
    const currentMonth = month;
    const reminders = await db.Reminder.find({
      day: `${currentDate}`,
      month: `${currentMonth}`,
    });
    res.json({
      data: reminders,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getAllBirthdays = async (_, res) => {
  try {
    const reminders = await db.Reminder.find({});

    res.json({
      data: reminders,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const addBirthday = async (req, res) => {
  try {
    const payload = req.body;

    db.Reminder.create(payload);

    res.status(201).json({
      message: 'Birthday reminder successfully added!',
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const updateBirthday = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const updateReminder = await db.Reminder.findByIdAndUpdate(id, body);

    res.status(200).json({
      message: 'Birthday reminder successfully updated!',
      data: updateReminder,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const deleteBirthday = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteReminder = await db.Reminder.findByIdAndDelete(id);

    res.status(200).json({
      message: 'Birthday reminder successfully deleted!',
      data: deleteReminder,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// routes
apiRouter.get('/monthly', getAllBirthdays);
apiRouter.get('/reminders', getTodaysBirthdays);
apiRouter.post('/reminders', addBirthday);
apiRouter.put('/reminders/:id', updateBirthday);
apiRouter.delete('/reminders/:id', deleteBirthday);

module.exports = apiRouter;

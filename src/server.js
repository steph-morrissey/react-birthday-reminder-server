const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiRoutes = require('./routes/api');

const { PORT, DB_URI, MONGOOSE_OPTIONS } = require('./config');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cors());
app.use('/', apiRoutes);

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});

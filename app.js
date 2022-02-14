const express = require('express');
const employeeRouter = require('./routes/employeeRoutes');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api/v1/employee', employeeRouter);

module.exports = app;
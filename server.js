const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config({ path: './conf.env' });
process.on('uncaughtException', err => {
    console.log('UNHANDLED REJECTION! SHUTTING DOWN......');
    console.log(err.name, err.message);
    process.exit(1);
});

const app = require('./app');
const DB = process.env.mongodb;
app.use(bodyParser.json()); 

mongoose.connect(DB, {
})
    .then(() => console.log('Database is connected'));
const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
    console.log(`App is running on port no ${port}`);
});

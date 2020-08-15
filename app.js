const express = require('express'); //get express, read about require!
const config = require('config'); //get config
const mongoose = require('mongoose');

const app = express()// our server
app.use(express.json({extended: true}))
app.use ('/api/auth', require('./routes/auth.routes')); // ?? read about it
app.use ('api/profile', require('./routes/profile.routes'))

const PORT = config.get('port') || 5000 // port's number of our app

async function start () {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }) //connect with database mongoDB
        app.listen(5000, () => console.log(`App has been started on port ${PORT}`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    } //read about try-catch
}

start();


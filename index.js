require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db_uri = process.env.db_URI ||  'mongodb://localhost:27017/?retryWrites=true&w=majority';
const router = require('./router')
mongoose.connect(db_uri,{useNewUrlParser :true, useUnifiedTopology : true});
require('./models/User');
require('./models/Post');
require('./models/Role');
require('./models/Comment');

app.use(express.json());
app.use(router);
app.get('/',(req,res) => {
    res.send({
        message : 'con cac'
    });
})

app.listen(4000, () => {
    console.log('Launched!');
});

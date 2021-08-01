const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/blog',{useNewUrlParser :true, useUnifiedTopology : true});


app.use(express.json());

app.get('/',(req,res) => {
    res.send({
        message : 'con cac'
    });
})

app.listen(4000, () => {
    console.log('Launched!');
});

const mongoose = require('mongoose');
const roleSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    user : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }] 
})


module.exports = mongoose.model('Role',roleSchema);
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    content : {
        type: String,
        trim : true,
        required : true
    },
    
    created_date : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Comment',commentSchema);
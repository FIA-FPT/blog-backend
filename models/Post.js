const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    name : {
        type : String,
        trim: true,
        required: true,
    },
    content : {
        type : String,
        trim: true,
        required: true
    },
    date : {
        type : Date,
        default : Date.now
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    comments : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

export default mongoose.model('Post',postSchema);
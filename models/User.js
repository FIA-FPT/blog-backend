const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type: String,
        default: 'Guest'
    },
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
})

userSchema.pre('save', (next) => {
   this.password = bcrypt.hashSync(this.password,10);
   next();
})

userSchema.method.compareHashes = (password) => {
    return bcrypt.compareSync(password,this.password);
}


mongoose.model('User',userSchema);
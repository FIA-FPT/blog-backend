const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
})

userSchema.pre('save', async function(next) {
    if(this.isModified()){
        return next();
    }
    const salt = bcrypt.genSaltSync('Ban_Giang_Kute_Xi_Teen_Khoe_Ca_Cmn_Tinh');
    this.password = bcrypt.hashSync(this.password, salt);
    return next();
})

userSchema.method('comparePassword', function (password,err){
    if(err){
      console.log(err);
    }
    return bcrypt.compareSync(password,this.password);
       
}) 

module.exports = mongoose.model('User', userSchema);
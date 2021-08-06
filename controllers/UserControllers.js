const User = require('../models/User')

exports.createUser = async (req, res, next) => {
    User.create(req.body, (err, user) => {
        if (err) {
            next(err);
        } else {
            res.status(200).send({
                user
            })
        }
    })
}

exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
        }).exec();
        if(user.comparePassword(req.body.password)){
            res.status(200).send(user);
        } else{
            res.status(404).send({
                'msg' : 'Wrong Username Or Password'
            })
        }
        
        
    }catch(err){
        next(err);
    }

}
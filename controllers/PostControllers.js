const Post = require('../models/Post');
const Comment = require('../models/Comment');
const User = require('../models/User');

exports.getPostList = async (res,req,next) => {
    try{
        let postList = await Post.find({}).lean().exec();
        res.status(200).send(postList);
    }catch(err){
        next(err);
    }
}

exports.createPost = async (res,req,next) => {
    Post.create({
        author : req.body.author._id,
        ...req.body
    },(err,post) => {
        if(err){
            next(err);
        }
        next(post);
    })
}

exports.updatePost = async (res,req,next) => {
    Post.findByIdAndUpdate(req.body._id,...req.body,(err,post) => {
        if(err){
            next(err);
        } else{
            next(post);
        }
    })
}
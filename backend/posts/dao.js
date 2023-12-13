import {Post} from "./model.js";

export const findAllPosts = () =>
  Post.find().populate('tagged').exec();


export const createNewPost = (newPost) =>
  Post.create(newPost);

export const findPostByPostId = (postId) =>
  Post.findById(postId);

export const findPostsByUserId = (userId) =>
  Post.find({authorId: userId}).sort({createdAt: -1}).exec();

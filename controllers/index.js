const { createUser, getUsers, getUser } = require('./user-controller');
const { createFoodPost, getAllFoodPosts, getFoodPost } = require('./foodPost-controller');

module.exports = {
  createUser,
  getUsers,
  getUser,
  createFoodPost,
  getAllFoodPosts,
  getFoodPost
}
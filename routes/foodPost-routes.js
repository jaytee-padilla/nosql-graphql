const router = require('express').Router();
const { createFoodPost, getAllFoodPosts, getFoodPost } = require('../controllers');

router
  .post('/', createFoodPost)
  .get('/', getAllFoodPosts)
  .get('/:id', getFoodPost)

module.exports = router;
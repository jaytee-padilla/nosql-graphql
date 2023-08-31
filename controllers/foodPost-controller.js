const { FoodPostModel } = require('../models');

const createFoodPost = async (req, res) => {
  try {
    const foodPostData = req.body;

    FoodPostModel.create(foodPostData)
      .then(createdFoodPost => {
        if(!createdFoodPost) {
          return res.status(400).json({
            success: false,
            message: 'Food Post creation failed',
            error: 'Unable to create food post'
          });
        }

        res.status(201).json({
          success: true,
          message: 'New food post created successfully'
        });
      })
      .catch(error => {
        res.status(400).json({
          success: false,
          error: error.message
        });
      })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
}

const getAllFoodPosts = async (req, res) => {
  try {
    FoodPostModel.find()
      .select('-__v')
      .then(foodPostData => {
        res.status(200).json({
          success: true,
          foodPostData
        });
      })
      .catch(error => {
        res.status(404).json({
          success: false,
          message: "Cant find food posts in database",
          error
        });
      })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
}

const getFoodPost = async (req, res) => {
  try {
    const foodPostId = req.params.id;

    FoodPostModel.findById(foodPostId)
      .select('-__v')
      .then(foodPostData => {
        res.status(200).json({
          success: true,
          foodPostData
        })
      })
      .catch(error => {
        res.status(404).json({
          success: false,
          message: "Food post with that ID does not exist",
          error
        })
      });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
}

module.exports = {
  createFoodPost,
  getAllFoodPosts,
  getFoodPost
}
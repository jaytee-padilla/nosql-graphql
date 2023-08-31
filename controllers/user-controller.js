const { UserModel } = require('../models');

const createUser = async (req, res) => {
  try {
    const userData = req.body;

    await UserModel.create(userData)
      .then((createdUser) => {
        if (!createdUser) {
          return res.status(404).json({
            success: false,
            message: 'User creation failed',
            error: 'Unable to get create user',
          });
        }

        res.status(201).json({
          success: true,
          createdUser,
        });
      })
      .catch((err) => {
        res.status(404).json({ success: false, error: err.message });
      });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

const getUsers = async (req, res) => {
  try {
    UserModel.find()
      .select('-__v')
      .then((allUsers) => {
        res.status(200).json({
          success: true,
          allUsers,
        });
      })
      .catch((error) => {
        res.status(404).json({
          success: false,
          message: 'Cant find users in database ',
          error,
        });
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;

    UserModel.findById(userId)
      .select('-__v')
      .then(user => {
        res.status(200).json({
          success: true,
          user
        })
      })
      .catch(err => {
        res.status(404).json({
          success: false,
          message: "User with that ID does not exist",
          err
        })
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    })
  }
}

module.exports = {
  createUser,
  getUsers,
  getUser
};

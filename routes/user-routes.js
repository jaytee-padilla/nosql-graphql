const router = require('express').Router();
const { createUser, getUsers, getUser } = require('../controllers');

router
  .post('/', createUser)
  .get('/', getUsers)
  .get('/:id', getUser)

module.exports = router;
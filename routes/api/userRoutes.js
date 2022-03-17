const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser);

// /api/users/:userId/thought
// router.route('/:userId/thought').post(addFriend);

// // /api/users/:userId/thoughts/:thoughtId
// router.route('/:userId/thought/:thoughtId').delete(removeFriend);

module.exports = router;

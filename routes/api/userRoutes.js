const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get()
    .post();


router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)


router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);


router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

module.exports = router;



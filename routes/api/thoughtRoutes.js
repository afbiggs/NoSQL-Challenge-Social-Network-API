const router = require('express').Router();
const {
    getAllThoughts,
    addThought,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');
const { route } = require('./userRoutes');


router.route('/').get(getAllThoughts);

router.route('/:userId').post(addThought);

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)


router
    .route('/:userId/:thoughtId')
    .delete(removeThought);


router
    .route('/:thoughtId/reactions')
    .post(addReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;

const express = require('express');
const router = express.Router();
const { createDeck } = require('../controllers/deckController');
const auth = require('../middleware/auth');

router.post('/', auth, createDeck);

module.exports = router;
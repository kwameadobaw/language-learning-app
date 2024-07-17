const mongoose = require('mongoose');

const DeckSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  cards: [
    {
      front: String,
      back: String,
    },
  ],
});

module.exports = mongoose.model('Deck', DeckSchema);
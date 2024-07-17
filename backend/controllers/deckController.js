const Deck = require('../models/Deck');

exports.createDeck = async (req, res) => {
  const { name, cards } = req.body;

  try {
    const newDeck = new Deck({ name, user: req.user.id, cards });
    const deck = await newDeck.save();
    res.json(deck);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
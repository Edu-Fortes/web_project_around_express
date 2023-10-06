const Card = require("../models/card");

module.exports = {
  getCards: async (req, res) => {
    const cards = await Card.find();
    return res.send(cards);
  },
  createCard: async (req, res) => {
    const { name, link } = req.body;
    try {
      const newCard = await Card.create({ name, link, owner: req.user._id });
      return res.send(newCard);
    } catch (err) {
      res.status(400).send(err.message);
    }
  },
  deleteCard: async (req, res) => {
    const { cardId } = req.params;
    const deletedCard = await Card.findByIdAndDelete(cardId);
    res.send(deletedCard);
  },
};

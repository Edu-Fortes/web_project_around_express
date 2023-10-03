const Card = require("../models/card");

module.exports = {
  getCards: async (req, res) => {
    const cards = await Card.find();
    return res.send(cards);
  },
  createCard: async (req, res) => {
    const { name, link } = req.body;
    const newCard = await Card.create({ name, link, owner: req.user._id });
    return res.send(newCard);
  },
  deleteCard: async (req, res) => {
    const { cardId } = req.params;
    const deletedCard = await Card.findByIdAndDelete(cardId);
    res.send(deletedCard);
  },
};

const mongoose = require("mongoose");

// CREATE SCHEMA

const CartItemsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, min: 0 },
  price: { type: Number, min: 0 },
});

// CREATE MODEL

const CartItem = mongoose.model("CartItem", CartItemsSchema);

module.exports = CartItem;

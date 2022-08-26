const mongoose = require("mongoose");

// CREATE SCHEMA

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  imgUrl: { type: String, required: true },
  rating: { type: Number, min: 0 },
  price: { type: Number, min: 0 },
});

// CREATE MODEL

const MenuItem = mongoose.model("MenuItem", MenuItemSchema);

module.exports = MenuItem;

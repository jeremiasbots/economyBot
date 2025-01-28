const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  item: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("shop", shopSchema);

const mongoose = require("mongoose");

const economySchema = new mongoose.Schema({
	userId: { type: String, required: true, unique: true },
	dinero: { type: Number, default: 0 },
	banco: { type: Number, default: 100 },
	inventario: [{ type: String }],
});

module.exports = mongoose.model("economy", economySchema);

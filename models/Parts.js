const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define a schema for parts
const Parts = new Schema({
    partName: { type: String, required: true },
    partType: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
});

// Create model from schema
const PartsModel = mongoose.model("PartsModel", Parts);

// Export model
module.exports = PartsModel;

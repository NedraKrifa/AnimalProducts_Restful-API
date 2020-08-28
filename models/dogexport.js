const mongoose = require("mongoose");
const ProductSchema = require("./product");

module.exports = mongoose.model("dogProducts", ProductSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    img: { type: String, required: true }
})

module.exports = mongoose.model("ProdSchema", ProductoSchema);
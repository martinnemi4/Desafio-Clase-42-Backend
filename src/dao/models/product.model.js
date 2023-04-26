import mongoose from "mongoose";

const collection = 'products';

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    stock: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    },
});

const productModel = mongoose.model(collection, productsSchema);

export default productModel;
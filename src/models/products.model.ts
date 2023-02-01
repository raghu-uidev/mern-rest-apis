import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
    },
    images: {
        type: Array
    }
});

const productsModel = mongoose.model('products', productSchema);

export default productsModel; 
import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    username : {
        type: String,
        require: true
    },
    email : {
        type: String,
        require: true,
        match: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        unique: true
    },
    password : {
        type: String,
        require: true
    },
    cartId : {
        type: String,
        require: true,
        unique: true
    }
});

const userModel = mongoose.model('users', userScheme);

export default userModel;




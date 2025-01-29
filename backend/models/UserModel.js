import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique : true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        default: "",
    },
    gender: {
        type: String,
        default: "",
    },
    profilePic: {
        type: String,
        default: "",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
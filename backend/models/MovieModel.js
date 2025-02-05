import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
        },
        img: {
            type: String,
        },
        imgTitle: {
            type: String,
        },
        imgThumbnail: {
            type: String,
        },
        trailer: {
            type: String,
        },
        video: {
            type: String,
        },
        year: {
            type: String,
        },
        limit: {
            type: Number,
        },
        duration: {
            type: String,
        },
        genre: {
            type: String,
        },
        type: {
            type: String,
            default: "",
        },
        status: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const MovieModel = mongoose.model('Movie', MovieSchema);

export default MovieModel;

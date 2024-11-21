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
        imgSlider: {
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
        genre: {
            type: String,
        },
        isShow: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const MovieModel = mongoose.model('Movie', MovieSchema);

export default MovieModel;

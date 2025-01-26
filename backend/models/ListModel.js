import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        type: {
            type: String,
        },
        genre: {
            type: String,
        },
        status: {
            type: Boolean,
            default: true,
        },
        content: {
            type: Array,
        }
    },
    { timestamps: true }
);

const ListModel = mongoose.model('List', ListSchema);

export default ListModel;

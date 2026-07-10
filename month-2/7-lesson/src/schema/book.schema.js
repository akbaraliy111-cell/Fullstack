import { Schema, model, Types } from "mongoose";

const book = new Schema({
    id: { type: Types.ObjectId },
    title: { type: String },
    genre: { type: String },
    author: { type: Types.ObjectId, ref: 'Author'}
}, {
    timestamps: true,
    versionKey: false
});

export default model('Book', book);

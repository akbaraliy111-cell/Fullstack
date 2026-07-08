import { model, Types, Schema } from 'mongoose';

const book = new Schema({
    id: { type: Types.ObjectId },
    name: { type: String , unique: true},
    publishedYear: { type: Date },
    genre: { type: String }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Book', book);
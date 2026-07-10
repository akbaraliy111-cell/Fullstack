import { Schema, model, Types } from "mongoose";

const author = new Schema({
    id: { type: Types.ObjectId },
    fullName: { type: String },
    birthDate: { type: Date },
    nick: { type: String, unique: true }
}, {
    timestamps: true,
    versionKey: false,
    toObject: { virtuals : true },
    toJSON: { virtuals : true }
});

author.virtual('books', {
    ref: 'Book',
    localField: '_id',
    foreignField: 'author'
});


export default model('Author', author);

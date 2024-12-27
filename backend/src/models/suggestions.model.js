import { ObjectId } from 'mongodb'
import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const suggestionSchema = new Schema({
    description: { type: String, required: true },
    weather: { type: String, required: true }
});

const Suggestion = mongoose.model('Suggestion', suggestionSchema);

export default Suggestion;


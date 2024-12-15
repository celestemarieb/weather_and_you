import { Request, Response } from 'express';
import {ObjectID, Db} from 'mongodb'
//import {Suggestion} from '../models/suggestions.model'

// create

// read

export const getAllSuggestions = (db: Db) => async(_: Request, res: Response) => {
    try {
        const suggestions = await db.collection("suggestions").find({}).toArray()
        console.log("Suggestions read successfully")
        res.json(suggestions)
    } catch (err) {
        console.log('Error reading suggestions',err)
        return res.status(500).send('Error reading suggestions')
    }
};

// update

// delete 
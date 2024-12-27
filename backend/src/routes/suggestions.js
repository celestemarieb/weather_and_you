import Router from 'express';
import Suggestion from '../models/suggestions.model.js'

const router = Router();

// read
router.route('/').get((req,res) => {
    Suggestion.find()
        .then(suggestions => res.json(suggestions))
        .catch(err => res.status(400).json('Error: ' + err));
});

// create

router.route('/add').post((req, res) => {
    const _id = req.body.id;
    const description = req.body.description;
    const weather = req.body.weather;

    const newSuggestion = new Suggestion({
        _id,
        description,
        weather,
    });

    newSuggestion.save()
    .then(() => res.json('Suggestion added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// update

// delete 

export default router;
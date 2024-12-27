import React from 'react';
import evaluateWeather from '../utils/evaluate-weather';
import axios from 'axios';

const goodURL = "http://localhost:8080/suggestions/good";
const badURL = "http://localhost:8080/suggestions/bad";

function MatchingSuggestions() {
    let userWeather = evaluateWeather();

    let baseURL = "http://localhost:8080/suggestions"

    if (userWeather === 'good') {
        baseURL = goodURL;
    }
    else baseURL = badURL;

    const [suggestions, setSuggestions] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setSuggestions(response.data);
        });
    }, []);

    if (!suggestions) return null;

    return (
        <div>
            <p>{suggestions.description}</p>
        </div>
    );
}


export default MatchingSuggestions;
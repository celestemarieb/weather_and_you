import React from 'react';
import axios from 'axios';

const baseURL = "http://localhost:8080/suggestions";

export default function SuggestionsList() {
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


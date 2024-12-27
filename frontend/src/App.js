import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import MatchingSuggestions from './components/matching-suggestions.js';
import AddSuggestion from './components/add-suggestions.js';
import SuggestionsList from './components/suggestions-list.js';
import GetWeather from './components/get-weather'

function App() {
    return (
        <>
        <div className="App">
        <GetWeather />
        <MatchingSuggestions />
        </div>
        </>
    );
}

export default App;
